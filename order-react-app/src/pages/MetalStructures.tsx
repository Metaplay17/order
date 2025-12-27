import React from 'react';
import styles from './css/MetalStructures.module.css';

import details from '../assets/metals/details.png';
import fire_ladder from '../assets/metals/fire-ladder.png';
import metal_ladder from '../assets/metals/metal-ladder.png';
import floors from '../assets/metals/floors.png';
import screw from '../assets/metals/screw.png';
import tests from '../assets/metals/tests.png';

interface Step {
  number: string;
  text: string;
}

const steps: Step[] = [
  {
    number: '01',
    text: 'Выполнение полного комплекса работ - подготовка проектно-сметной документации, изготовление, сборка, доставка и монтаж',
  },
  {
    number: '02',
    text: 'Все операции в рамках металлообработки выполняются на высокотехнологичном оборудовании с применением прогрессивных технологий, что обеспечивает выполнение заказа в минимально возможные сроки и по наименьшим расценкам',
  },
  {
    number: '03',
    text: 'Каждая операция может выполняться несколькими способами, например, резка металла производится лазерным, плазменным, газовым методом, что позволяет работать с заготовками любой толщины',
  },
  {
    number: '04',
    text: 'При производстве строго соблюдаются нормы ГОСТ и технических регламентов, что гарантирует прочность и безопасность эксплуатации',
  },
  {
    number: '05',
    text: 'Использование своего парка спецтехники, грузоподъемного оборудования и автотранспорта позволяет минимизировать расходы на доставку и монтаж и не зависеть от других компаний',
  },
];



const MetalStructures: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                {/* <p className={styles.subtitle}>Полный спектр услуг: проектирование, изготовление, монтаж различных изделий, а также их цинкование в заводских условиях, мы сотрудничаем с тремя крупными заводами</p> */}
                <h1 className={styles.title}>
                Полный спектр услуг: проектирование, изготовление, монтаж различных изделий, а также их цинкование в заводских условиях, мы сотрудничаем с тремя крупными заводами
                </h1>

                <div className={styles.stats}>
                <div className={styles.statItem}>
                    <h3>1 год</h3>
                    <p>Составляет гарантия на услуги — ручаемся за качество</p>
                </div>
                <div className={styles.statItem}>
                    <h3>С 2014 года</h3>
                    <p>Опыт работы нашей компании в сфере проектирования, изготовления и обработки металлоконструкций — знаем все тонкости и нюансы</p>
                </div>
                <div className={styles.statItem}>
                    <h3>От 1 до 7 дней</h3>
                    <p>В среднем выполняем заказ — не срываем согласованные сроки</p>
                </div>
                </div>
                <button className={styles.ctaButton}>Оставить заявку</button>
            </div>

            <section className={styles.content}>
              <h2>МЕТАЛЛИЧЕСКИЕ КОНСТРУКЦИИ</h2>
              <div className={styles.content_block}>
                <div className={styles.metalconstruction__card}>
                  <img src={details} alt="" className={styles.metalconstruction__image} />
                  <h3 className={styles.metalconstruction__card__tittle}>
                    Закладные детали
                  </h3>
                  <ul className={styles.metalconstruction__card__list}>
                    <li className={styles.metalconstruction__card__element}>
                      арматурные каркасы
                    </li>
                  </ul>
                </div>

                <div className={styles.metalconstruction__card}>
                  <img src={screw} alt="" className={styles.metalconstruction__image} />
                  <h3 className={styles.metalconstruction__card__tittle}>
                    Металлоизделия
                  </h3>
                  <ul className={styles.metalconstruction__card__list}>
                    <li className={styles.metalconstruction__card__element}>
                      рамы и эстакады
                    </li>
                    <li className={styles.metalconstruction__card__element}>
                      рекламные конструкции
                    </li>
                    <li className={styles.metalconstruction__card__element}>
                      мебель и архетектурные элементы
                    </li>
                    <li className={styles.metalconstruction__card__element}>
                      беседки и мангалы
                    </li>
                  </ul>
                </div>

                <div className={styles.metalconstruction__card}>
                  <img src={tests} alt="" className={styles.metalconstruction__image} />
                  <h3 className={styles.metalconstruction__card__tittle}>
                    Испытания пожарных лестниц
                  </h3>
                  <ul className={styles.metalconstruction__card__list}>
                    <li className={styles.metalconstruction__card__element}>
                      с 2 ригелями
                    </li>
                    <li className={styles.metalconstruction__card__element}>
                      с 3 ригелями
                    </li>
                    <li className={styles.metalconstruction__card__element}>
                      без ригелей
                    </li>
                  </ul>
                </div>

                <div className={styles.metalconstruction__card}>
                  <img src={metal_ladder} alt="" className={styles.metalconstruction__image} />
                  <h3 className={styles.metalconstruction__card__tittle}>
                    Металлические лестницы
                  </h3>
                  <ul className={styles.metalconstruction__card__list}>
                    <li className={styles.metalconstruction__card__element}>
                      лестницы винтовые
                    </li>
                    <li className={styles.metalconstruction__card__element}>
                      каркасы лестниц
                    </li>
                    <li className={styles.metalconstruction__card__element}>
                      лестницы на косоурах
                    </li>
                    <li className={styles.metalconstruction__card__element}>
                      лестницы на тетивах
                    </li>
                  </ul>
                </div>

                <div className={styles.metalconstruction__card}>
                  <img src={fire_ladder} alt="" className={styles.metalconstruction__image} />
                  <h3 className={styles.metalconstruction__card__tittle}>
                    Пожарные лестницы
                  </h3>
                  <ul className={styles.metalconstruction__card__list}>
                    <li className={styles.metalconstruction__card__element}>
                      П1 вертикальные
                    </li>
                    <li className={styles.metalconstruction__card__element}>
                      П2 эвакуационные (тип 3)
                    </li>
                    <li className={styles.metalconstruction__card__element}>
                      маршевые пожарные
                    </li>
                  </ul>
                </div>

                <div className={styles.metalconstruction__card}>
                  <img src={floors} alt="" className={styles.metalconstruction__image} />
                  <h3 className={styles.metalconstruction__card__tittle}>
                    Антресольные этажи
                  </h3>
                  <ul className={styles.metalconstruction__card__list}>
                    <li className={styles.metalconstruction__card__element}>
                      металлические перекрытия
                    </li>
                    <li className={styles.metalconstruction__card__element}>
                      мезонин
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div className={styles.process_steps}>
                <div className={styles.step_number}>НАШИ ПРЕИМУЩЕСТВА:</div>
                {steps.map((step, index) => (
                    <div key={index} className={styles.step}>
                    <div className={styles.step_number}>{step.number}</div>
                    <div className={styles.step_text}>{step.text}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MetalStructures;