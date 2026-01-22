import React, { useState } from 'react';
import styles from './css/Contacts.module.css';

const Contacts: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      try {
        const response = await fetch(`${API_URL}/send`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: "ОСТАВЛЕНО НОВОЕ СООБЩЕНИЕ!\n" + message }),
          }
        );
        if (!response.ok) {
          alert('Ошибка при отправке сообщения. Попробуйте позже.')
          return;
        }
      } catch (err : any) {
        alert('Ошибка сети при отправке сообщения. Попробуйте позже.');
        return;
      }
      setMessage('');
      closeModal();
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Контакты</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <div className={styles.icon}>📍</div>
            <div>
              <p className={styles.label}>Адрес</p>
              <p className={styles.value}>г. Москва</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>📧</div>
            <div>
              <p className={styles.label}>Email</p>
              <p className={styles.value}>
                <a href="mailto:info@arsstr.ru" className={styles.link}>
                  info@arsstr.ru
                </a>
              </p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>📞</div>
            <div>
              <p className={styles.label}>Телефон</p>
              <p className={styles.value}>
                <a href="tel:+79771423200" className={styles.link}>
                  +7 (977) 142-32-00
                </a>
              </p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>💬</div>
            <div>
              <button className={styles.connectButton} onClick={openModal}>
                Связаться
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3 className={styles.modalTitle}>Оставить сообщение</h3>
            <form onSubmit={handleSubmit}>
              <textarea
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Введите ваше сообщение..."
                rows={6}
              />
              <div className={styles.modalActions}>
                <button type="button" className={styles.modalCancelButton} onClick={closeModal}>
                  Отмена
                </button>
                <button type="submit" className={styles.modalSendButton}>
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contacts;