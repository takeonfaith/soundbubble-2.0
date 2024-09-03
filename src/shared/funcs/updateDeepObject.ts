export const updateDeepObject = <T>(
    obj: T,
    path: Paths<T>,
    value: unknown
): T => {
    const keys = path.split('.');
    const [currentKey, ...remainingKeys] = keys;

    if (remainingKeys.length === 0) {
        return {
            ...obj,
            [currentKey]: value,
        } as T;
    }

    return {
        ...obj,
        [currentKey]: updateDeepObject(
            obj[currentKey as keyof T],
            remainingKeys.join('.') as Paths<T[keyof T]>,
            value
        ),
    } as T;
};
