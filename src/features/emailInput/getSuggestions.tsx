import { TExtendedSuggestion } from '../searchWithHints/types';

export const getSuggestions = (emailValue: string): TExtendedSuggestion[] => {
    if (emailValue.length === 0 || !emailValue.includes('@')) return [];

    const emailProviders = [
        { fullName: 'gmail.com' },
        { fullName: 'yahoo.com' },
        { fullName: 'outlook.com' },
        { fullName: 'yandex.ru' },
        { fullName: 'mail.ru' },
        { fullName: 'temp.temp' },
    ];

    const [mailName, emailValueProvider] = emailValue.split('@');

    if (emailValue.includes('@')) {
        return emailProviders
            .filter((provider) => {
                return provider.fullName.includes(emailValueProvider);
            })
            .map((email) => {
                return {
                    fullName: `${mailName}@${email.fullName}`,
                    place: 'songs',
                    uid: '',
                };
            });
    }

    return emailProviders.map((email) => {
        return {
            fullName: `${emailValue}@${email}`,
            place: 'songs',
            uid: '',
        };
    });
};
