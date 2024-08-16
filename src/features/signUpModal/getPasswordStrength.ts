import {
    STRONG_PASSWORD,
    MEDIUM_PASSWORD,
    MIN_PASSWORD_LENGTH,
} from './constansts';

export const getPasswordStrength = (value: string) => {
    if (STRONG_PASSWORD.test(value)) return { title: 'надежный', value: 100 };
    else if (MEDIUM_PASSWORD.test(value))
        return { title: 'средний', value: 60 };
    else if (value.length === 0) return { title: 'нет', value: 0 };
    else if (value.length < MIN_PASSWORD_LENGTH)
        return { title: 'очень слабый', value: 10 };
    return { title: 'слабый', value: 20 };
};
