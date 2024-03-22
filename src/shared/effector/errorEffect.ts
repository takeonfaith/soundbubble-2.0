import { Effect, StoreWritable, sample } from "effector"

export const errorEffect = <T, K, F, S>(effect: Effect<T, K, F>, $store: StoreWritable<S>) => {
	return sample({
		clock: effect.failData,
		source: $store,
		fn: (store, error) => ({ ...store, error }),
		target: $store,
	})
}