import React, { useState } from 'react';
import styles from './css/Layout.module.css';
import { Link } from 'react-router';
import logo from '../assets/Logo.png';
import ChatWidget from '../quiz/ChatWidget';

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
          <div className={styles.logo_block}>
            <img className={styles.logo} src={logo} alt="Logo" />
            <span>АРС СТРОЙ</span>
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
          <span className={styles.open_time}>Пн-Пт с 9:00 до 18:00</span>
        </nav>
      </header>

      <ChatWidget />
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            © {currentYear} «АРС СТРОЙ» — Архитектура Ремонт Строительство
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;