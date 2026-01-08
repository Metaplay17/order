
export type Option = {
  id: string;
  text: string;
  next: string | null;
};

export type Question = {
  id: string;
  text: string;
  type: 'select' | 'text' | 'number';
  options?: Option[]; // для select
  next?: string | null; // для text/number
};

export type QuizConfig = {
  start: string;
  questions: Record<string, Question>;
};

export const quizConfig : QuizConfig = {
    start: 'init_question',
    questions: {
        'init_question': {
            id: 'init_question',
            text: 'Что вас интересует?',
            type: 'select',
            options: [
                { id: 'metal_structures_start_option', text: 'Изготовление металлоконструкций', next: 'metal_structures_2' },
                { id: 'repair_start_option', text: 'Ремонт помещений', next: 'repair_2' },
                { id: 'building_start_option', text: 'Строительство дома', next: 'building_2' },
                { id: 'design_start_option', text: 'Дизайн и проектирование', next: 'design_2' }
            ]
        },
        'metal_structures_2': {
            id: 'metal_structures_2',
            text: 'Есть ли проектная документация?',
            type: 'select',
            options: [
                { id: 'metal_structures_documents_yes', text: 'Да', next: 'metal_structures_3' },
                { id: 'metal_structures_documents_no', text: 'Нет', next: 'metal_structures_3' }
            ]
        },
        'metal_structures_3': {
            id: 'metal_structures_3',
            text: 'Укажите тип конструкции:',
            type: 'text',
            next: 'metal_structures_4'
        },
        'metal_structures_4': {
            id: 'metal_structures_4',
            text: 'Примерный бюджет (диапазон либо "не знаю"):',
            type: 'text',
            next: 'contacts_name'
        },
        'repair_2': {
            id: 'repair_2',
            text: 'Укажите тип помещения:',
            type: 'select',
            options: [
                { id: 'repair_type_living', text: 'Жилое', next: 'repair_3' },
                { id: 'repair_type_commercial', text: 'Коммерческое', next: 'repair_3' },
            ]
        },
        'repair_3': {
            id: 'repair_3',
            text: 'Введите площадь по полу (м²):',
            type: 'number',
            next: 'repair_4'
        },
        'repair_4': {
            id: 'repair_4',
            text: 'Укажите вид ремонта:',
            type: 'select',
            options: [
                { id: 'repair_renovation_type_cosmetic', text: 'Косметический', next: 'contacts_name' },
                { id: 'repair_renovation_type_capital', text: 'Капитальный', next: 'contacts_name' },
                { id: 'repair_renovation_type_under_key', text: 'Под ключ', next: 'contacts_name' },
            ]
        },
        'building_2': {
            id: 'building_2',
            text: 'Есть ли проект?',
            type: 'select',
            options: [
                { id: 'building_project_yes', text: 'Да', next: 'building_3' },
                { id: 'building_project_no', text: 'Нет', next: 'building_3' },
            ]
        },
        'building_3': {
            id: 'building_3',
            text: 'Введите площадь дома (м²):',
            type: 'number',
            next: 'building_4'
        },
        'building_4': {
            id: 'building_4',
            text: 'Примерный бюджет (диапазон либо "не знаю"):',
            type: 'text',
            next: 'building_5'
        },
        'building_5': {
            id: 'building_5',
            text: 'Введите регион строительства:',
            type: 'text',
            next: 'contacts_name'
        },
        'design_2': {
            id: 'design_2',
            text: 'Тип объекта',
            type: 'select',
            options: [
                { id: 'design_type_flat', text: 'Квартира', next: 'design_3' },
                { id: 'design_type_house', text: 'Дом', next: 'design_3' },
                { id: 'design_type_commercial', text: 'Коммерция', next: 'design_3' }
            ]
        },
        'design_3': {
            id: 'design_3',
            text: 'Введите площадь:',
            type: 'number',
            next: 'design_4'
        },
        'design_4': {
            id: 'design_4',
            text: 'Нужен ли авторский надзор?',
            type: 'select',
            options: [
                { id: 'design_oversee_yes', text: 'Да', next: 'contacts_name' },
                { id: 'design_oversee_no', text: 'Нет', next: 'contacts_name' },
            ]
        },
        'contacts_name': {
            id: 'contacts_name',
            text: 'Введите ваше имя:',
            type: 'text',
            next: 'contacts_phone'
        },
        'contacts_phone': {
            id: 'contacts_phone',
            text: 'Введите ваш телефон:',
            type: 'text',
            next: 'contacts_telegram'
        },
        'contacts_telegram': {
            id: 'contacts_telegram',
            text: 'Telegram-аккаунт (тег с "@"), (если нет, поставьте прочерк):',
            type: 'text',
            next: 'contacts_email',
        },
        'contacts_email': {
            id: 'contacts_email',
            text: 'Введите ваш email (если нет, поставьте прочерк)',
            type: 'text',
            next: 'contacts_accept'
        },
        'contacts_accept': {
            id: 'contacts_accept',
            text: 'Проверьте введенные данные:', // Тут добавляется текст сформированной заявки
            type: 'select',
            options: [
                { id: 'send', text: 'Отправить', next: 'final' },
                { id: 'restart', text: 'Заполнить заново', next: 'init_question' }
            ]
        },
        'final': {
            id: 'final',
            text: 'Спасибо за заявку! Менеджер свяжется с вами для уточнения деталей в ближайшее время',
            type: 'select',
            options: [
                { id: 'restart', text: 'Заполнить еще раз', next: 'init_question' }
            ]
        }
    }
}