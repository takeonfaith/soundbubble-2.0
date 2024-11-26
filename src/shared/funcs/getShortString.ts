export const getShortString = (
    str: string | undefined,
    maxLen = 30
): string => {
    return !str
        ? ''
        : str.substring(0, maxLen) + (str.length > maxLen ? '...' : '');
};
