import { createEffect, Effect } from 'effector';
import { toastModel } from '../../layout/toast/model';

export const createEffectWithToast = <Params, Done>(
    successMessage: string,
    failMessage: string
): Effect<Params, Done, Error> => {
    const effect = createEffect<Params, Done, Error>();

    effect.doneData.watch(() => {
        toastModel.events.add({
            message: successMessage,
            type: 'success',
            duration: 5000,
        });
    });

    effect.failData.watch((err) => {
        toastModel.events.add({
            type: 'error',
            message: failMessage,
            duration: 10000,
            reason: err.message,
        });
    });

    return effect;
};
