export const getDeepObjectValue = <T>(obj: T, path: Paths<T>) => {
    const keys = path.split('.');

    return keys.reduce(
        (acc, key) =>
            acc && acc[key as keyof T] !== 'undefined'
                ? acc[key as keyof T]
                : undefined,
        obj
    );
};
