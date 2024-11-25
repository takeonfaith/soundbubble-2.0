export const asyncRequests = async <T, K>(
    arr: T[],
    fn: (item: T, index: number) => Promise<K>
) => {
    if (arr.length === 0) return Promise.resolve([]);

    return await Promise.all(arr.map(fn));
};
