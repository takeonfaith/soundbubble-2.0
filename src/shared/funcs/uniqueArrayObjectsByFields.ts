export const uniqueArrayObjectsByField = <T extends object>(
    array: T[],
    field: keyof T
) => {
    const seen = new Set();

    return array.filter((obj) => {
        const value = obj[field];

        if (seen.has(value)) {
            return false;
        } else {
            seen.add(value);
            return true;
        }
    });
};
