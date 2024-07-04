export const filterOneArrayWithAnother = <
    T extends any[],
    K extends any[]
>(
    arr1: T,
    arr2: K,
    filterFn?: (item: T[number]) => string,
    tranformFn?: (arr2: K) => string[]
): T => arr1.filter((item) => !tranformFn(arr2).includes(filterFn(item)));
