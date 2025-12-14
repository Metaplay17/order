import React, { useState } from 'react';
import styles from './css/Portfolio.module.css';

import withzh1 from '../assets/projects/withzn/1.jpg';
import withzh2 from '../assets/projects/withzn/2.jpg';
import withzh3 from '../assets/projects/withzn/3.jpg';
import withzh4 from '../assets/projects/withzn/4.jpg';

import foroffieceroom1 from '../assets/projects/foroffieceroom/1.jpg';
import foroffieceroom2 from '../assets/projects/foroffieceroom/2.jpg';
import foroffieceroom3 from '../assets/projects/foroffieceroom/3.jpg';
import foroffieceroom4 from '../assets/projects/foroffieceroom/4.jpg';

import last1 from '../assets/projects/last/1.jpg';
import last2 from '../assets/projects/last/2.jpg';
import last3 from '../assets/projects/last/3.png';
import last4 from '../assets/projects/last/4.png';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Проектирование с последующим изготовлением и монтажом лестницы с применением холодного цинкования",
    description: "Здесь будет описание проекта",
    images: [withzh1, withzh2, withzh3, withzh4]
  },
  {
    id: 2,
    title: "Проектирование с последующим изготовлением и монтажом лестницы для многоуровневого офисного помещения",
    description: "Здесь будет описание проекта",
    images: [foroffieceroom1, foroffieceroom2, foroffieceroom3, foroffieceroom4]
  },
  {
    id: 3,
    title: "Проектирование с последующим изготовлением и монтажом наружной пожарной лестницы",
    description: "Здесь будет описание проекта",
    images: [last1, last2, last3, last4]
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши реализованные проекты</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {/* Кнопка "Назад" */}
        <button
          className={`${styles.arrowButton} ${styles.leftArrow}`}
          onClick={handlePrevClick}
          aria-label="Предыдущее изображение"
        >
          ❮
        </button>

        {/* Текущее изображение */}
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${project.images[currentImageIndex]})` }}
        />

        {/* Кнопка "Вперед" */}
        <button
          className={`${styles.arrowButton} ${styles.rightArrow}`}
          onClick={handleNextClick}
          aria-label="Следующее изображение"
        >
          ❯
        </button>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
      </div>
    </div>
  );
};


export default Portfolio;