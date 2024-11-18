export const getTime = (str: string | number) => {
    return new Date(str).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });
};
