export const getPluralForm = (
    num: number,
    texts: { one: string; toFour: string; fromFive: string }
) => {
    if (num % 10 === 1) return texts.one;

    if (num % 10 > 1 && num % 10 <= 4) return texts.toFour;

    return texts.fromFive;
};
