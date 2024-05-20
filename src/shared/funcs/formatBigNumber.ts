export const formatBigNumber = (num: number | undefined) => {
    if (!num) return null;

    if (num >= 1_000 && num < 1_000_000) return (num / 1_000).toFixed(1) + 'K';

    if (num >= 1_000_000 && num < 1_000_000_000)
        return (num / 1_000_000).toFixed(1) + 'M';

    return num.toString();
};
