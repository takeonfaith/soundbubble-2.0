export const getTime = (str: string) => {
    return new Date(str).toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    });
};
