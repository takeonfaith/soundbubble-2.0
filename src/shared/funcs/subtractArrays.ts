export const subtractArrays = <T>(arr1: T[], arr2: T[]): T[] => {
    return arr2.filter((x) => !arr1.includes(x));
};
