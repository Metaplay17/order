import React from 'react';
import styles from './css/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="/" className={styles.navLink}>Главная</a>
            </li>
            <li>
              <a href="/metal-structures" className={styles.navLink}>Металлоконструкции</a>
            </li>
            <li>
              <a href="/decoration-works" className={styles.navLink}>Отделочные работы</a>
            </li>
            <li>
              <a href="/house-building" className={styles.navLink}>Строительство дома</a>
            </li>
            <li>
              <a href="/design" className={styles.navLink}>Проектирование</a>
            </li>
            <li>
              <a href="/portfolio" className={styles.navLink}>Примеры работ</a>
            </li>
            <li>
              <a href="/contacts" className={styles.navLink}>Контакты</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            © {currentYear} «СтройПрофи» — надёжное строительство с 2010 года
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;