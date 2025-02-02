export const getHistoryDate = (time = Date.now()) => {
    return new Date(time).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
};
