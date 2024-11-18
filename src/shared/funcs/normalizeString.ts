export const normalizeString = (str: string, removeComma?: boolean) => {
    if (!str.length) return '';

    const shouldRemoveComma = removeComma ?? true;

    const result = str
        .replace(/\s/g, '')
        .replace(/\$/g, 's')

        .replace(/-/g, '')
        .replace('ć', 'c')
        .toLowerCase();
    return shouldRemoveComma ? result.replace(/[,'._/]/g, '') : result;
};
