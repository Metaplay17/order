import { Link } from 'react-router-dom';
import styles from './css/Home.module.css';

const Home = () => {
    return (
        <section className={styles.hero}>
        <div className={styles.content}>
            <h1 className={styles.title}>Что вас интересует?</h1>

            <div className={styles.cards}>
            <Link to="/metal-structures" className={styles.card}>
                <h2>Изготовление металлоконструкций</h2>
            </Link>
            <Link to="/decoration-works" className={styles.card}>
                <h2>Ремонт жилых и коммерческих помещений</h2>
            </Link>
            <Link to="/house-building" className={styles.card}>
                <h2>Строительство дома под ключ</h2>
            </Link>
            <Link to="/design" className={styles.card}>
                <h2>Дизайн и проектирование</h2>
            </Link>
            </div>
        </div>
        </section>
    );
}

export default Home;