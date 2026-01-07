import React from 'react';
import styles from './css/HouseBuilding.module.css';
import { useChat } from '../quiz/ChatContext';

const HouseBuilding: React.FC = () => {
  const { openChat } = useChat();

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Строительство домов<br />под ключ в Москве и МО</h1>
        <p className={styles.price}>от <span className={styles.highlight}>37 000 руб. за кв.м²</span></p>
        <p className={styles.description}>
          Строим за 3–4 месяца. Фиксируем сроки и стоимость в договоре,<br />
          без скрытых платежей, все прозрачно и открыто!
        </p>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            Оформление ипотеки, от 6 %, согласование документов, помощь в регистрации
          </div>
          <div className={styles.featureItem}>
            Бесплатная разработка проекта, при заключении договора
          </div>
          <div className={styles.featureItem}>
            Работаем с ЭСКРОУ счетами — ваши деньги в безопасности до завершения этапов строительства
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.secondaryButton} onClick={openChat}>Узнать стоимость строительства</button>
          <button className={styles.primaryButton} onClick={openChat}>Круглогодичное строительство</button>
        </div>

        <p className={styles.footerText}>
          Успейте получить спец. цену до конца месяца!
        </p>
      </div>
    </section>
  );
};

export default HouseBuilding;