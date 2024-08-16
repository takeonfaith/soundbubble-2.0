export const MIN_PASSWORD_LENGTH = 4;
export const STRONG_PASSWORD = new RegExp(
    `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{${
        MIN_PASSWORD_LENGTH + 3
    },})`
);
export const MEDIUM_PASSWORD = new RegExp(
    `((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${MIN_PASSWORD_LENGTH},}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{${
        MIN_PASSWORD_LENGTH + 3
    },}))`
);

type TRule = {
    text: string;
    test: (...values: string[]) => boolean;
    visible?: boolean;
};

export type TRules = TRule[];

export const MANDATORY_RULES: TRules = [
    {
        text: `Минимальная длина ${MIN_PASSWORD_LENGTH} знаков`,
        test: (value1) => value1.length >= MIN_PASSWORD_LENGTH,
    },
    {
        text: `Не повторяет старый пароль`,
        test: (value1, _, old) =>
            old.length > 0 && value1.length > 0 && value1 !== old,
    },
    {
        text: 'Состоит из латинских заглавных, строчных букв, цифр',
        test: (value1) => MEDIUM_PASSWORD.test(value1),
    },
    {
        text: 'Пароли совпадают',
        visible: false,
        test: (value1, value2) =>
            value1.length > 0 && value2.length > 0 && value1 === value2,
    },
];
