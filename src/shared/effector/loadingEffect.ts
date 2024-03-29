import { Effect, StoreWritable, sample } from "effector"

export const loadingEffect = <T, K, F, S>(effect: Effect<T, K, F>, $store: StoreWritable<S>, field?: keyof S) => {
	return sample({
		clock: effect.pending,
		source: $store,
		fn: (store, loading) => ({ ...store, [field ?? 'loading']: loading }),
		target: $store,
	})
}