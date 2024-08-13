import { TSuggestion } from "../../entities/search/model/types";

export const getSuggestions = (emailValue: string): TSuggestion[] => {
    if (emailValue.length === 0 || !emailValue.includes("@")) return [];

    const emailProviders = ['gmail.com', 'yahoo.com', 'outlook.com', 'yandex.ru', 'mail.ru', 'temp.temp'];

    const [mailName, emailValueProvider] = emailValue.split('@');

    if (emailValue.includes('@')) {
        console.log(emailValueProvider);

        return emailProviders
            .filter((provider) => {
                return provider.includes(emailValueProvider);
            })
            .map((email) => {
                return {
                    fullName: `${mailName}@${email}`,
                    rank: 0,
                    place: 'songs',
                    variantsOfName: [],
                    uid: '',
                };
            });
    }

    return emailProviders.map((email) => {
        return {
            fullName: `${emailValue}@${email}`,
            rank: 0,
            place: 'songs',
            variantsOfName: [],
            uid: '',
        };
    });
};
