import { Effect, StoreWritable, sample } from 'effector';

export const getDataFromEffect = <T, K, L>(
    effect: Effect<T, K, L>,
    $store: StoreWritable<K>
) => {
    return sample({
        clock: effect.doneData,
        fn: (data) => data,
        target: $store,
    });
};
