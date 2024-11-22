export const MIN_PASSWORD_LENGTH = 6;
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
    strength: 20 | 60 | 100;
    test: (...values: string[]) => boolean;
    visible?: boolean;
};

export type TRules = TRule[];

export const MANDATORY_RULES: TRules = [
    {
        text: `At least ${MIN_PASSWORD_LENGTH} characters in length`,
        strength: 20,
        test: (value1) => value1.length >= MIN_PASSWORD_LENGTH,
    },
    {
        text: 'Contains of lowercase and uppercase letters and numbers',
        strength: 60,
        test: (value1) => MEDIUM_PASSWORD.test(value1),
    },
    {
        text: 'Contains special characters (!, /, [], etc...)',
        strength: 100,
        test: (value1) => STRONG_PASSWORD.test(value1),
    },
];
