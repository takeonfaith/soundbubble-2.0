export const debounce = (fn: (...args: unknown[]) => void, delay = 1000) => {
    const timer = setTimeout(fn, delay);

    return () => {
        clearTimeout(timer);
    };
};
