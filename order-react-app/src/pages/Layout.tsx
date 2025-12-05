import React, { useState } from 'react';
import styles from './css/Layout.module.css';
import { Link } from 'react-router';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {/* Логотип или название можно добавить сюда */}
          <div style={{ color: '#e0e0e0', fontWeight: 'bold', fontSize: '1.2rem' }}>
            СтройПрофи
          </div>

          <button
            className={styles.burgerButton}
            onClick={toggleMenu}
            aria-label="Открыть меню"
          >
            ☰
          </button>

          <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ''}`}>
            <Link to="/">
              <li>
                <a className={styles.navLink} onClick={closeMenu}>
                  Главная
                </a>
              </li>
            </Link>

            <Link to="/metal-structures">
              <li>
                <a className={styles.navLink} onClick={closeMenu}>
                  Металлоконструкции
                </a>
              </li>
            </Link>

            <Link to="/house-building">
              <li>
                <a className={styles.navLink} onClick={closeMenu}>
                  Строительство дома
                </a>
              </li>
            </Link>

            <Link to="/design">
              <li>
                <a className={styles.navLink} onClick={closeMenu}>
                  Проектирование
                </a>
              </li>
            </Link>

            <Link to="/portfolio">
              <li>
                <a className={styles.navLink} onClick={closeMenu}>
                  Примеры работ
                </a>
              </li>
            </Link>

            <Link to="/contacts">
              <li>
                <a className={styles.navLink} onClick={closeMenu}>
                  Контакты
                </a>
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