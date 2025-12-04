import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Portfolio.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}


const projects: Project[] = [
  {
    id: 1,
    title: 'Жилой дом в Подмосковье',
    description: 'Кирпичный дом 220 м² с гаражом и террасой. Сдан в срок — за 4 месяца.',
    imageUrl: 'https://afystatic.ru/files/vpbb/full/c/c1/c1dac14bc449c5c9ddc505001265035300.webp',
  },
  {
    id: 2,
    title: 'Офисный центр, Москва',
    description: 'Комплексная отделка 1200 м². Использованы экологичные материалы.',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=b1bb00322da51e2fa00f4bfec70d59a89a3256d6-15415022-images-thumbs&n=13',
  },
  {
    id: 3,
    title: 'Металлоконструкции для ТЦ',
    description: 'Производство и монтаж несущих ферм и фасадных элементов.',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=62314cbb5efb96b724a32a091c9bd82c_l-5843049-images-thumbs&n=13',
  },
  {
    id: 4,
    title: 'Ремонт квартиры 85 м²',
    description: 'Евро-ремонт под ключ с авторским дизайном интерьера.',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=ebbbd1a788f171b2ae2f40f8b59bb68c0169148d-16514385-images-thumbs&n=13',
  },
  {
    id: 5,
    title: 'Проект коттеджа 300 м²',
    description: 'Полный архитектурный и инженерный проект с 3D-визуализацией.',
    imageUrl: 'https://avatars.mds.yandex.net/get-mpic/4342845/2a000001923220412e6a94ce7c3305de9bcd/orig',
  },
  {
    id: 6,
    title: 'Складской комплекс',
    description: 'Быстровозводимое здание из ЛМК площадью 2500 м².',
    imageUrl: 'https://grand-mo.ru/images/torgovie/31ware/tp_31_01.jpg',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши реализованные проекты</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            // <Link to={`/portfolio/${project.id}`} className={styles.card} key={project.id}>
            <div>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>{project.description}</p>
                </div>`
            </div>
            // </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;