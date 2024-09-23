export const getHumanFileSize = (size: number) => {
    const DEFAULT_SIZE = 0;
    const fileSize = size ?? DEFAULT_SIZE;

    if (!fileSize) {
        return `${DEFAULT_SIZE} KB`;
    }

    const sizeInKb = fileSize / 1024;

    if (sizeInKb > 1024 * 1024) {
        return `${(sizeInKb / (1024 * 1024)).toFixed(2)} GB`;
    }
    if (sizeInKb > 1024) {
        return `${(sizeInKb / 1024).toFixed(2)} MB`;
    } else {
        return `${sizeInKb.toFixed(2)} KB`;
    }
};
