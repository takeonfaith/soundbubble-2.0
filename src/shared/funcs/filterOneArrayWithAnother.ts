export const filterOneArrayWithAnother = <
    T extends unknown[],
    K extends unknown[]
>(
    arr1: T,
    arr2: K,
    filterFn: (item: T[number]) => string,
    tranformFn: (arr2: K) => string[]
): T => {
    return arr1.filter((item) => {
        return !tranformFn(arr2).includes(filterFn(item));
    }) as T;
};
