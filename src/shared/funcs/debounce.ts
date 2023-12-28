export const debounce = (fn: () => void, delay = 1000) => {
  const timer = setTimeout(fn, delay);

  return () => {
    clearTimeout(timer);
  };
};
