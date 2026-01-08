import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatWidget.module.css';
import { quizConfig, type Option } from './QuizConfig.ts';
import { useChat } from './ChatContext.tsx';

// Типы для localStorage
type Message = { type: 'user' | 'bot'; text: string; id?: string; timestamp: number };
type ChatState = {
  currentQuestionId: string;
  messages: Message[];
  userAnswers: Record<string, string>;
  lastInteraction: number;
  spamCount: number;
};

const MAX_SPAM_COUNT = 20;
const SPAM_INTERVAL_MS = 60000; // 1 минута

const ChatWidget: React.FC = () => {
  const { isChatOpen, openChat, closeChat } = useChat();

  const [state, setState] = useState<ChatState>({
    currentQuestionId: quizConfig.start,
    messages: [],
    userAnswers: {},
    lastInteraction: Date.now(),
    spamCount: 0,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const API_URL = import.meta.env.VITE_API_URL;

  // Загрузка состояния из localStorage при монтировании
  useEffect(() => {
    const saved = localStorage.getItem('chatWidgetState');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as ChatState;
        // Сброс спам-счетчика, если прошло больше минуты
        const now = Date.now();
        if (now - parsed.lastInteraction > SPAM_INTERVAL_MS) {
          parsed.spamCount = 0;
          parsed.lastInteraction = now;
        }
        setState(parsed);
        // Восстанавливаем сообщения только если диалог не завершен
        if (parsed.currentQuestionId !== 'final') {
          const firstMsg: Message = {
            type: 'bot',
            text: quizConfig.questions[quizConfig.start].text,
            timestamp: Date.now() - 1000,
          };
          if (parsed.messages.length === 0) {
            setState(prev => ({ ...prev, messages: [firstMsg] }));
          }
        }
      } catch (e) {
        console.warn('Failed to parse chat state from localStorage');
      }
    } else {
      // Инициализация первого сообщения
      const firstMsg: Message = {
        type: 'bot',
        text: quizConfig.questions[quizConfig.start].text,
        timestamp: Date.now(),
      };
      setState(prev => ({ ...prev, messages: [firstMsg] }));
    }
  }, []);

  // Сохранение состояния в localStorage
  useEffect(() => {
    localStorage.setItem('chatWidgetState', JSON.stringify(state));
  }, [state]);

  const currentQuestion = quizConfig.questions[state.currentQuestionId];

  const addMessage = (msg: Message) => {
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
  };

  const handleOptionSelect = (option: Option) => {
    const now = Date.now();
    const timeDiff = now - state.lastInteraction;

    // Защита от спама
    if (timeDiff < SPAM_INTERVAL_MS) {
      if (state.spamCount >= MAX_SPAM_COUNT) {
        addMessage({
          type: 'bot',
          text: 'Слишком много запросов. Попробуйте позже.',
          timestamp: now,
        });
        return;
      }
    } else {
      // Сброс счетчика, если прошло больше минуты
      setState(prev => ({ ...prev, spamCount: 0 }));
    }

    const userMsg: Message = { type: 'user', text: option.text, timestamp: now };
    addMessage(userMsg);

    // Сохраняем ответ
    setState(prev => ({
      ...prev,
      userAnswers: { ...prev.userAnswers, [currentQuestion.id]: option.text },
      lastInteraction: now,
      spamCount: timeDiff < SPAM_INTERVAL_MS ? prev.spamCount + 1 : 0,
    }));

    if (option.next) {
      const nextQuestion = quizConfig.questions[option.next];
      if (nextQuestion.id === 'contacts_accept') {
        const summary = generateSummary(state.userAnswers);
        addMessage({ type: 'bot', text: nextQuestion.text, timestamp: now + 100 });
        addMessage({ type: 'bot', text: summary, timestamp: now + 200 });
        setState(prev => ({ ...prev, currentQuestionId: nextQuestion.id }));
      } else {
        const botMsg: Message = { type: 'bot', text: nextQuestion.text, timestamp: now + 100 };
        addMessage(botMsg);
        setState(prev => ({ ...prev, currentQuestionId: nextQuestion.id }));
      }
    }
    if (option.id === 'restart') {
      resetChat();
    }
  };

  const handleTextInput = (value: string) => {
    const now = Date.now();
    const timeDiff = now - state.lastInteraction;

    if (value.trim() === '') {
      addMessage({
        type: 'bot',
        text: 'Пожалуйста, введите текст.',
        timestamp: now,
      });
      return;
    }

    if (timeDiff < SPAM_INTERVAL_MS && state.spamCount >= MAX_SPAM_COUNT) {
      addMessage({
        type: 'bot',
        text: 'Слишком много запросов. Попробуйте позже.',
        timestamp: now,
      });
      return;
    }

    const userMsg: Message = { type: 'user', text: value, timestamp: now };
    addMessage(userMsg);

    setState(prev => ({
      ...prev,
      userAnswers: { ...prev.userAnswers, [currentQuestion.id]: value },
      lastInteraction: now,
      spamCount: timeDiff < SPAM_INTERVAL_MS ? prev.spamCount + 1 : 0,
    }));

    if (currentQuestion.next) {
      const nextId = currentQuestion.next;
      if (nextId === 'contacts_accept') {
        const summary = generateSummary({ ...state.userAnswers, [currentQuestion.id]: value });
        addMessage({ type: 'bot', text: quizConfig.questions[nextId].text, timestamp: now + 100 });
        addMessage({ type: 'bot', text: summary, timestamp: now + 200 });
        setState(prev => ({ ...prev, currentQuestionId: nextId }));
      } else {
        const nextQuestion = quizConfig.questions[nextId];
        const botMsg: Message = { type: 'bot', text: nextQuestion.text, timestamp: now + 100 };
        addMessage(botMsg);
        setState(prev => ({ ...prev, currentQuestionId: nextId }));
      }
    }
  };

  const generateSummary = (answers: Record<string, string>): string => {
    let summary = 'Ваша заявка:\n';
    const questionKeys = Object.keys(quizConfig.questions);
    for (const key of questionKeys) {
      if (answers[key]) {
        const q = quizConfig.questions[key];
        summary += `- ${q.text}\n  Ответ: ${answers[key]}\n`;
      }
    }
    return summary;
  };

  const resetChat = () => {
    const firstMsg: Message = {
      type: 'bot',
      text: quizConfig.questions[quizConfig.start].text,
      timestamp: Date.now(),
    };
    setState({
      currentQuestionId: quizConfig.start,
      messages: [firstMsg],
      userAnswers: {},
      lastInteraction: Date.now(),
      spamCount: 0,
    });
  };

  const sendTelegramMessage = async (text: string) => {
    try {
      const response = await fetch(`${API_URL}/send`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: "ОСТАВЛЕНА НОВАЯ ЗАЯВКА!\n" + text.slice(12) }),
        }
      );
      if (!response.ok) {
        addMessage({
          type: 'bot',
          text: 'Ошибка при отправке сообщения. Попробуйте позже.',
          timestamp: Date.now(),
        });
        return;
      }
      else {
        addMessage({
          type: 'bot',
          text: 'Спасибо за заявку! Менеджер свяжется с вами для уточнения деталей в ближайшее время',
          timestamp: Date.now(),
        });
        setState(prev => ({ ...prev, currentQuestionId: 'final' }));
      }
    } catch (err : any) {
      addMessage({
        type: 'bot',
        text: 'Ошибка сети при отправке сообщения. Попробуйте позже.',
        timestamp: Date.now(),
      });
    }
  }

  const renderInput = () => {
    if (currentQuestion.id == 'contacts_accept') {
        return (
            <div className={styles.options}>
                {currentQuestion.options?.map(opt => {
                  if (opt.id === 'send') {
                      return (
                        <button
                            key={opt.id}
                            className={styles.optionButton}
                            onClick={() => sendTelegramMessage(generateSummary(state.userAnswers))}
                        >
                            {opt.text}
                        </button>
                    )
                  }
                  return (
                    <button
                        key={opt.id}
                        className={styles.optionButton}
                        onClick={() => handleOptionSelect(opt)}
                        >
                        {opt.text}
                    </button>
                  )
                })}
            </div>
        )
    }
    if (currentQuestion.type === 'select') {
      return (
        <div className={styles.options}>
          {currentQuestion.options?.map(opt => (
            <button
              key={opt.id}
              className={styles.optionButton}
              onClick={() => handleOptionSelect(opt)}
            >
              {opt.text}
            </button>
          ))}
        </div>
      );
    } else {
      const isNumber = currentQuestion.type === 'number';
      return (
        <div className={styles.inputContainer}>
          <input
            ref={inputRef}
            type={isNumber ? 'number' : 'text'}
            className={styles.textInput}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                const target = e.target as HTMLInputElement;
                handleTextInput(target.value);
                target.value = '';
              }
            }}
            placeholder={`Введите ${isNumber ? 'число' : 'текст'}...`}
          />
          <button
            className={styles.sendButton}
            onClick={() => {
              if (inputRef.current) {
                handleTextInput(inputRef.current.value);
                inputRef.current.value = '';
              }
            }}
          >
            Отправить
          </button>
        </div>
      );
    }
  };

    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [state.messages]);
    
  return (
    <>
      {/* Кнопка открытия */}
      {!isChatOpen && (
        <button className={styles.toggleButton} onClick={() => openChat()}>
          💬 Связаться
        </button>
      )}

      {/* Виджет чата */}
      {isChatOpen && (
        <div className={styles.widget}>
          <div className={styles.header}>
            <span>Алексей, менеджер «АРС Строй»</span>
            <button className={styles.closeButton} onClick={() => closeChat()}>
              ✕
            </button>
          </div>
            <div className={styles.messages} ref={messagesContainerRef}>
            {state.messages.map((msg, i) => (
                <div key={i} className={msg.type === 'user' ? styles.userMsg : styles.botMsg}>
                {msg.text}
                </div>
            ))}
            </div>
          {renderInput()}
        </div>
      )}
    </>
  );
};

export default ChatWidget;