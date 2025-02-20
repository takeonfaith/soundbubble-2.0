import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './locales';
import i18next from 'i18next';
import backend from 'i18next-http-backend';

i18next
    .use(initReactI18next) // передаем экземпляр i18n в react-i18next, который сделает его доступным для всех компонентов через context API.
    .use(backend)
    .use(LanguageDetector) // с помощью плагина определяем язык пользователя в браузере
    .init({
        resources, // передаем переводы текстов интерфейса в формате JSON
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // экранирование уже есть в React, поэтому отключаем
        },
    });

export const translate = (
    key: keyof (typeof resources)['en']['translation'],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: any
) => i18next.t(key, params) as string;

export default i18next;
