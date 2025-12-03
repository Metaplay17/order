import React from 'react';
import styles from './css/MetalStructures.module.css';

const MetalStructures: React.FC = () => {
    return (
        <section className={styles.hero}>
        <div className={styles.content}>
            <p className={styles.subtitle}>Полный спектр услуг: от резки до изготовления различных изделий</p>
            <h1 className={styles.title}>
            Обработка черного и цветного металла в Москве от 1 дня
            </h1>

            <div className={styles.stats}>
            <div className={styles.statItem}>
                <h3>1 год</h3>
                <p>Составляет гарантия на услуги по обработке металлов — ручаемся за качество</p>
            </div>
            <div className={styles.statItem}>
                <h3>С 2014 года</h3>
                <p>Опыт работы нашей компании в сфере обработки металлов — знаем все тонкости и нюансы</p>
            </div>
            <div className={styles.statItem}>
                <h3>От 1 до 7 дней</h3>
                <p>В среднем выполняем обработку металла — не срываем согласованные сроки</p>
            </div>
            </div>

            <button className={styles.ctaButton}>Оставить заявку</button>
        </div>
        </section>
    );
};

export default MetalStructures;