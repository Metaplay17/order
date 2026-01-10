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
import design_2_3 from '../assets/projects/design_2/3.jpg';
import design_2_4 from '../assets/projects/design_2/4.jpg';

import design_3_1 from '../assets/projects/design_3/1.png';
import design_3_2 from '../assets/projects/design_3/2.png';
import design_3_3 from '../assets/projects/design_3/3.png';
import design_3_4 from '../assets/projects/design_3/4.png';

import design_4_1 from '../assets/projects/design_4/1.png';
import design_4_2 from '../assets/projects/design_4/2.png';
import design_4_3 from '../assets/projects/design_4/3.png';
import design_4_4 from '../assets/projects/design_4/4.png';
import design_4_5 from '../assets/projects/design_4/5.png';
import design_4_6 from '../assets/projects/design_4/6.png';
import design_4_7 from '../assets/projects/design_4/7.png';
import design_4_8 from '../assets/projects/design_4/8.png';

import design_5_1 from '../assets/projects/design_5/1.png';
import design_5_2 from '../assets/projects/design_5/2.png';
import design_5_3 from '../assets/projects/design_5/3.png';
import design_5_4 from '../assets/projects/design_5/4.png';
import design_5_5 from '../assets/projects/design_5/5.png';
import design_5_6 from '../assets/projects/design_5/6.png';


import repair_1_1 from '../assets/projects/repair_1/1.png';
import repair_1_2 from '../assets/projects/repair_1/2.png';
import repair_1_3 from '../assets/projects/repair_1/3.png';
import repair_1_4 from '../assets/projects/repair_1/4.png';
import repair_1_5 from '../assets/projects/repair_1/5.png';
import repair_1_6 from '../assets/projects/repair_1/6.png';
import repair_1_7 from '../assets/projects/repair_1/7.png';
import repair_1_8 from '../assets/projects/repair_1/8.png';
import repair_1_9 from '../assets/projects/repair_1/9.png';

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

const projects_types = ["Изготовление металлоконструкций", "Дизайн проекты (флиппинг)", "Ремонт коммерческих и жилых помещений", "Отделка коммерческих помещений"];

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
    type: "Дизайн проекты (флиппинг)",
    description: "Здесь будет описание проекта",
    images: [design_1_1, design_1_2]
  },
  {
    id: 5,
    title: "Дизайн проект 2",
    type: "Дизайн проекты (флиппинг)",
    description: "Здесь будет описание проекта",
    images: [design_2_1, design_2_2, design_2_3, design_2_4]
  },
  {
    id: 6,
    title: "Дизайн проект 3",
    type: "Дизайн проекты (флиппинг)",
    description: "Здесь будет описание проекта",
    images: [design_3_1, design_3_2, design_3_3, design_3_4]
  },
  {
    id: 7,
    title: "Зиларт",
    type: "Ремонт коммерческих и жилых помещений",
    description: "Здесь будет описание проекта",
    images: [repair_1_1, repair_1_2, repair_1_3, repair_1_4, repair_1_5, repair_1_6, repair_1_7, repair_1_8, repair_1_9]
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
    id: 13,
    title: "Отделка С/У в коттедже",
    type: "Ремонт коммерческих и жилых помещений",
    description: "Здесь будет описание проекта",
    images: [repair_5_1, repair_5_2, repair_5_3, repair_5_4, repair_5_5, repair_5_6]
  },
  {
    id: 14,
    title: "Дизайн проект 4",
    type: "Дизайн проекты (флиппинг)",
    description: "Здесь будет описание проекта",
    images: [design_4_1, design_4_2, design_4_3, design_4_4, design_4_5, design_4_6, design_4_7, design_4_8]
  },
  {
    id: 15,
    title: "Дизайн проект 5",
    type: "Дизайн проекты (флиппинг)",
    description: "Здесь будет описание проекта",
    images: [design_5_1, design_5_2, design_5_3, design_5_4, design_5_5, design_5_6]
  },
];

interface ModalState {
  images: string[];
  currentIndex: number;
}


const Portfolio: React.FC = () => {
  const [modal, setModal] = useState<ModalState | null>(null);

  const openModal = (images: string[], index: number) => {
    setModal({ images, currentIndex: index });
  };

  const closeModal = () => {
    setModal(null);
  };

  const goToPrev = () => {
    if (!modal) return;
    const newIndex =
      modal.currentIndex === 0 ? modal.images.length - 1 : modal.currentIndex - 1;
    setModal({ ...modal, currentIndex: newIndex });
  };

  const goToNext = () => {
    if (!modal) return;
    const newIndex =
      modal.currentIndex === modal.images.length - 1 ? 0 : modal.currentIndex + 1;
    setModal({ ...modal, currentIndex: newIndex });
  };

  // Закрытие по нажатию Esc
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (modal) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modal]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши реализованные проекты</h2>
        {projects_types.map((name) => (
          <div className={styles.project_type} key={name}>
            <h2>{name}</h2>
            <div className={styles.grid}>
              {projects
                .filter((p) => p.type === name)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onImageClick={(index) => openModal(project.images, index)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      {modal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>

            {/* Изображение */}
            <img
              src={modal.images[modal.currentIndex]}
              alt={`Изображение ${modal.currentIndex + 1}`}
              className={styles.modalImage}
            />

            {/* Стрелки навигации */}
            {modal.images.length > 1 && (
              <>
                <button
                  className={`${styles.modalArrow} ${styles.modalArrowLeft}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                  aria-label="Предыдущее изображение"
                >
                  ❮
                </button>
                <button
                  className={`${styles.modalArrow} ${styles.modalArrowRight}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  aria-label="Следующее изображение"
                >
                  ❯
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

const ProjectCard: React.FC<{
  project: Project;
  onImageClick: (index: number) => void;
}> = ({ project, onImageClick }) => {
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

  const handleClickImage = () => {
    onImageClick(currentImageIndex);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <button
          className={`${styles.arrowButton} ${styles.leftArrow}`}
          onClick={handlePrevClick}
          aria-label="Предыдущее изображение"
        >
          ❮
        </button>

        <div
          className={styles.image}
          style={{ backgroundImage: `url(${project.images[currentImageIndex]})` }}
          onClick={handleClickImage}
        />

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