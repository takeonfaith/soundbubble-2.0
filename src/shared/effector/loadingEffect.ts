import { Effect, StoreWritable, sample } from "effector"

export const loadingEffect = <T, K, F, S>(effect: Effect<T, K, F>, $store: StoreWritable<S>) => {
	return sample({
		clock: effect.pending,
		source: $store,
		fn: (store, loading) => ({ ...store, loading }),
		target: $store,
	})
}