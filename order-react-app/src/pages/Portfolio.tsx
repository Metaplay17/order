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

import design_1_1 from '../assets/projects/design_1/1.png';
import design_1_2 from '../assets/projects/design_1/2.png';

import design_2_1 from '../assets/projects/design_2/1.png';
import design_2_2 from '../assets/projects/design_2/2.png';

import design_3_1 from '../assets/projects/design_3/1.png';
import design_3_2 from '../assets/projects/design_3/2.png';
import design_3_3 from '../assets/projects/design_3/3.png';

import repair_1_1 from '../assets/projects/repair_1/1.png';
import repair_1_2 from '../assets/projects/repair_1/2.png';
import repair_1_3 from '../assets/projects/repair_1/3.png';

import repair_2_1 from '../assets/projects/repair_2/1.png';
import repair_2_2 from '../assets/projects/repair_2/2.png';
import repair_2_3 from '../assets/projects/repair_2/3.png';

import repair_3_1 from '../assets/projects/repair_3/1.png';
import repair_3_2 from '../assets/projects/repair_3/2.png';
import repair_3_3 from '../assets/projects/repair_3/3.png';

import repair_4_1 from '../assets/projects/repair_4/1.jpg';
import repair_4_2 from '../assets/projects/repair_4/2.jpg';
import repair_4_3 from '../assets/projects/repair_4/3.jpg';
import repair_4_4 from '../assets/projects/repair_4/4.jpg';
import repair_4_5 from '../assets/projects/repair_4/5.jpg';

import repair_5_1 from '../assets/projects/repair_5/1.jpg';
import repair_5_2 from '../assets/projects/repair_5/2.jpg';
import repair_5_3 from '../assets/projects/repair_5/3.jpg';
import repair_5_4 from '../assets/projects/repair_5/4.jpg';
import repair_5_5 from '../assets/projects/repair_5/5.jpg';
import repair_5_6 from '../assets/projects/repair_5/6.jpg';

import kashir_1 from '../assets/projects/decorating/kashir/1.jpg';
import kashir_2 from '../assets/projects/decorating/kashir/2.jpg';
import kashir_3 from '../assets/projects/decorating/kashir/3.jpg';
import kashir_4 from '../assets/projects/decorating/kashir/4.jpg';
import kashir_5 from '../assets/projects/decorating/kashir/5.jpg';
import kashir_6 from '../assets/projects/decorating/kashir/6.jpg';
import kashir_7 from '../assets/projects/decorating/kashir/7.jpg';

import michur_1 from '../assets/projects/decorating/michur/1.jpg';
import michur_2 from '../assets/projects/decorating/michur/2.jpg';
import michur_3 from '../assets/projects/decorating/michur/3.jpg';
import michur_4 from '../assets/projects/decorating/michur/4.jpg';
import michur_5 from '../assets/projects/decorating/michur/5.jpg';



interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  images: string[];
}

const projects_types = ["Изготовление металлоконструкций", "Дизайн проекты", "Ремонт коммерческих и жилых помещений", "Отделка коммерческих помещений"];

const projects: Project[] = [
  {
    id: 1,
    title: "Проектирование с последующим изготовлением и монтажом лестницы с применением холодного цинкования",
    type: "Изготовление металлоконструкций",
    description: "Здесь будет описание проекта",
    images: [withzh1, withzh2, withzh3, withzh4]
  },
  {
    id: 2,
    title: "Проектирование с последующим изготовлением и монтажом лестницы для многоуровневого офисного помещения",
    type: "Изготовление металлоконструкций",
    description: "Здесь будет описание проекта",
    images: [foroffieceroom2, foroffieceroom1, foroffieceroom3, foroffieceroom4]
  },
  {
    id: 3,
    title: "Проектирование с последующим изготовлением и монтажом наружной пожарной лестницы",
    type: "Изготовление металлоконструкций",
    description: "Здесь будет описание проекта",
    images: [last1, last2, last3, last4]
  },

  {
    id: 4,
    title: "Дизайн проект 1",
    type: "Дизайн проекты",
    description: "Здесь будет описание проекта",
    images: [design_1_1, design_1_2]
  },
  {
    id: 5,
    title: "Дизайн проект 2",
    type: "Дизайн проекты",
    description: "Здесь будет описание проекта",
    images: [design_2_1, design_2_2]
  },
  {
    id: 6,
    title: "Дизайн проект 3",
    type: "Дизайн проекты",
    description: "Здесь будет описание проекта",
    images: [design_3_1, design_3_2, design_3_3]
  },
  {
    id: 7,
    title: "Зиларт",
    type: "Ремонт коммерческих и жилых помещений",
    description: "Здесь будет описание проекта",
    images: [repair_1_1, repair_1_2, repair_1_3]
  },
  {
    id: 8,
    title: "Пресня",
    type: "Ремонт коммерческих и жилых помещений",
    description: "Здесь будет описание проекта",
    images: [repair_2_1, repair_2_2, repair_2_3]
  },
  {
    id: 9,
    title: "Некрасовка",
    type: "Ремонт коммерческих и жилых помещений",
    description: "Здесь будет описание проекта",
    images: [repair_3_1, repair_3_2, repair_3_3]
  },
  {
    id: 10,
    title: "г. Москва, Каширское шоссе",
    type: "Отделка коммерческих помещений",
    description: "Отделка коммерческого помещения 440 м² (17000р/м² по полу) по адресу: г. Москва, Каширское шоссе. Срок реализации - 35 дней",
    images: [kashir_1, kashir_2, kashir_3, kashir_4, kashir_5, kashir_6, kashir_7]
  },
  {
    id: 11,
    title: "г. Москва, Мичуринский проспект",
    type: "Отделка коммерческих помещений",
    description: "Отделка коммерческого помещения 117 м² под офис – г. Москва, Мичуринский проспект. 19000р/м², срок реализации - 26 дней вместе с демонтажом и перепланировкой.",
    images: [michur_1, michur_2, michur_3, michur_4, michur_5]
  },
  {
    id: 12,
    title: "ВДНХ",
    type: "Ремонт коммерческих и жилых помещений",
    description: "Здесь будет описание проекта",
    images: [repair_4_1, repair_4_2, repair_4_3, repair_4_4, repair_4_5]
  },
  {
    id: 12,
    title: "Отделка СУ",
    type: "Ремонт коммерческих и жилых помещений",
    description: "Здесь будет описание проекта",
    images: [repair_5_1, repair_5_2, repair_5_3, repair_5_4, repair_5_5, repair_5_6]
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши реализованные проекты</h2>
        {
          projects_types.map((name) => (
            <div className={styles.project_type}>
              <h2>{name}</h2>
              <div className={styles.grid}>
                {projects.filter(p => p.type == name).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          ))
        }
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