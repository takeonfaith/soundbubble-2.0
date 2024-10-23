export const areObjectsDifferent = (
    obj1: Record<string, unknown> | null,
    obj2: Record<string, unknown> | null
) => {
    if (obj1 === null || obj2 === null) return true;

    // Check each property in Object 1
    for (const prop in obj1) {
        // If the property exists in Object 2 and the values don't match
        // return true because the objects have different values for the same field
        if (obj2.hasOwnProperty(prop) && obj1[prop] !== obj2[prop]) {
            return true;
        }
    }

    // If no mismatches found, return false
    return false;
};
