// src/components/ContactSection/ContactSection.tsx
import React from 'react';
import styles from './css/Contacts.module.css';

const Contacts: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Контакты</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <div className={styles.icon}>📍</div>
            <div>
              <p className={styles.label}>Адрес</p>
              <p className={styles.value}>г. Москва, ул. Строительная, д. 15, офис 302</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>📧</div>
            <div>
              <p className={styles.label}>Email</p>
              <p className={styles.value}>
                <a href="mailto:info@stroyprofi.ru" className={styles.link}>info@stroyprofi.ru</a>
              </p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>📞</div>
            <div>
              <p className={styles.label}>Телефон</p>
              <p className={styles.value}>
                <a href="tel:+74951234567" className={styles.link}>+7 (495) 123-45-67</a>
              </p>
            </div>
          </div>

          {/* <div className={styles.contactItem}>
            <div className={styles.icon}>🤖</div>
            <div>
              <p className={styles.label}>Telegram-бот</p>
              <p className={styles.value}>
                <a
                  href="https://t.me/stroyprofi_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  @stroyprofi_bot
                </a>
              </p>
            </div>
          </div> */}

          <div className={styles.contactItem}>
            <div className={styles.icon}>💬</div>
            <div>
              <p className={styles.label}>Написать в Telegram</p>
              <p className={styles.value}>
                <a
                  href="https://t.me/stroyprofi_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  @stroyprofi_support
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;