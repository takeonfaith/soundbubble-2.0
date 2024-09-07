export const asyncRequests = async <T, K>(
    arr: T[],
    fn: (item: T, index: number) => Promise<K>
) => {
    return await Promise.all(arr.map(fn));
};
