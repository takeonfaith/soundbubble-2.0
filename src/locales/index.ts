import translationEN from './translations/en.json';
import translationRU from './translations/ru.json';
import translationDE from './translations/de.json';
import translationFR from './translations/fr.json';
import translationES from './translations/es.json';
import translationPT from './translations/pt.json';

const resources = {
    en: {
        translation: translationEN,
    },
    ru: {
        translation: translationRU,
    },
    es: {
        translation: translationES,
    },
    fr: {
        translation: translationFR,
    },
    pt: {
        translation: translationPT,
    },
    de: translationDE,
};

export type TLocales = keyof typeof resources;

export default resources;
