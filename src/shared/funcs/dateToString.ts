import i18n from '../../i18n';

export const dateToString = (date: Date | string): string => {
    const langToLocale = {
        en: 'en-US',
        es: 'es-ES',
        pt: 'pt-PT',
        de: 'de-DE',
        fr: 'fr-FR',
        ru: 'ru-RU',
    };

    return new Date(date).toLocaleDateString(
        langToLocale[i18n.language as keyof typeof langToLocale],
        {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }
    );
};
