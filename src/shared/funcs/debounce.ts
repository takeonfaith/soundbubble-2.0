export const debounce = (fn: (...ars: any[]) => void, delay = 1000) => {
    const timer = setTimeout(fn, delay);

    return () => {
        clearTimeout(timer);
    };
};
