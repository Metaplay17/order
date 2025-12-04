import React from 'react';
import styles from './css/Repair.module.css';

const Repair: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>РЕМОНТ КВАРТИР В МОСКВЕ И МОСКОВСКОЙ ОБЛАСТИ</h1>
        <p className={styles.subtitle}>Мы берём на себя весь процесс — от сметы до идеального результата</p>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.checkmark}>✓</span>
            <span>Выезд замерщика <strong className={styles.highlight}>БЕСПЛАТНО</strong></span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.checkmark}>✓</span>
            <span>Ремонт от <strong className={styles.highlight}>6 890 ₽/м²</strong></span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.checkmark}>✓</span>
            <span>Точно в <strong className={styles.highlight}>СРОК</strong></span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.checkmark}>✓</span>
            <span><strong className={styles.highlight}>БЕЗ</strong> стресса и переплат</span>
          </div>
        </div>

        <button className={styles.ctaButton}>Получить смету</button>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Лет опыта в сфере ремонта и дизайна</span>
            </div>
          </div>
          <div className={styles.statItem}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <span className={styles.statNumber}>300+</span>
              <span className={styles.statLabel}>Инженерных проектов квартир и офисов</span>
            </div>
          </div>
          <div className={styles.statItem}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Надёжных поставщиков ведущих компаний</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repair;