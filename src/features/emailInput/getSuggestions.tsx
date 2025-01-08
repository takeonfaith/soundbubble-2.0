import { TExtendedSuggestion } from '../searchWithHints/types';
import { getEmailProviders } from './lib/getEmailProviders';

export const getSuggestions = (emailValue: string): TExtendedSuggestion[] => {
    if (emailValue.length === 0 || !emailValue.includes('@')) return [];

    const emailProviders = getEmailProviders();

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
                    icon: email.icon,
                };
            });
    }

    return emailProviders.map((email) => {
        return {
            fullName: `${emailValue}@${email}`,
            place: 'songs',
            uid: '',
            icon: email.icon,
        };
    });
};
