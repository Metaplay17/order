// src/components/HouseDesignHero/HouseDesignHero.tsx
import React from 'react';
import styles from './css/Design.module.css';

const Design: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Проектирование домов<br />и коттеджей</h1>
        <p className={styles.description}>
          Разрабатываем архитектурные и конструктивные решения<br />
          под ваш бюджет, участок и пожелания — с гарантией качества.
        </p>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            Бесплатная консультация и выезд архитектора на участок
          </div>
          <div className={styles.featureItem}>
            Готовый проект за <span className={styles.highlight}>14–21 день</span>
          </div>
          <div className={styles.featureItem}>
            Все документы для получения разрешения на строительство
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.secondaryButton}>Скачать каталог проектов</button>
          <button className={styles.primaryButton}>Оставить заявку</button>
        </div>

        <p className={styles.footerText}>
          Более 450 утверждённых проектов в Московской области
        </p>
      </div>
    </section>
  );
};

export default Design;