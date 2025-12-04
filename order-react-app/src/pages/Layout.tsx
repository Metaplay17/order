import React from 'react';
import styles from './css/Layout.module.css';
import { Link } from 'react-router-dom';

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
            <Link to="/">
              <li>
                <a href="/" className={styles.navLink}>Главная</a>
              </li>
            </Link>
            <Link to="/metal-structures">
              <li>
                <a className={styles.navLink}>Металлоконструкции</a>
              </li>
            </Link>
            <Link to="/house-building">            
              <li>
                <a className={styles.navLink}>Строительство дома</a>
              </li>
            </Link>
            <Link to="/design">
              <li>
                <a className={styles.navLink}>Проектирование</a>
              </li>
            </Link>
            <Link to="/portfolio">
              <li>
                <a className={styles.navLink}>Примеры работ</a>
              </li>
            </Link>
            <Link to="/contacts">
              <li>
                <a className={styles.navLink}>Контакты</a>
              </li>
            </Link>

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