export const arrayToString = (
    array: Array<unknown>,
    separator?: string
): string => {
    return array.join(separator ?? ' & ');
};
