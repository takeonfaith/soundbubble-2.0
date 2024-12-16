import { createEffect, createEvent, sample } from 'effector';
import { Database } from '../../../database';
import { toastModel } from '../../../layout/toast/model';
import { modalModel } from '../../../layout/modal/model';

const resetPasswordFx = createEffect<string, void>();

export const resetPassword = createEvent<string>();

sample({
    clock: resetPassword,
    target: resetPasswordFx,
});

resetPasswordFx.doneData.watch(() => {
    toastModel.events.add({
        type: 'success',
        message: 'Password reset link has been sent to your email',
    });
    modalModel.events.back();
});

resetPasswordFx.failData.watch((err) => {
    toastModel.events.add({
        type: 'error',
        message: 'Failed to send password reset link',
        reason: err.message,
        duration: 10000,
    });
});

resetPasswordFx.use(async (email) => {
    await Database.Users.resetPassword(email);
});
