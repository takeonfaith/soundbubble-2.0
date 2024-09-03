export const getDeepObjectValue = <T extends object>(
    object: T,
    path: Paths<T>
) => {
    const keys = path.split('.');
    let result: string | T = object;

    for (const key of keys) {
        // @ts-expect-error Fuck this
        result = result[key];
    }

    return result;
};
