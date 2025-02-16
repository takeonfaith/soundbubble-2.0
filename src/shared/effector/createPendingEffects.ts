import { createStore, Effect, sample } from 'effector';

type Props<TParams, TReturn, TFail = Error> = {
    effects: Effect<TParams, TReturn, TFail>[];

    getId: (params: TParams) => string[];
};

export const createPendingEffectsStore = <TParams, TReturn, TFail = Error>({
    effects,
    getId,
}: Props<TParams, TReturn, TFail>) => {
    const $pendings = createStore<Set<string>>(new Set());

    effects.forEach((effect) => {
        sample({
            clock: effect,
            source: $pendings,
            fn: (pending, params) => {
                const ids = getId(params);
                const newPending = new Set(pending);
                ids.forEach(newPending.add, newPending);
                return newPending;
            },
            target: $pendings,
        });

        sample({
            clock: effect.finally,
            source: $pendings,
            fn: (pending, { params: params }) => {
                const ids = getId(params);
                const newPending = new Set(pending);
                ids.forEach(newPending.delete, newPending);
                return newPending;
            },
            target: $pendings,
        });
    });

    return $pendings;
};
