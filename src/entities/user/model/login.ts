import { createEffect, createEvent, sample } from 'effector';
import { LoginCreditsType } from './types';
import { toastModel } from '../../../layout/toast/model';
import { Database } from '../../../database';

enum FirebaseAuthError {
    'Firebase: Error (auth/wrong-password).' = 'Firebase: Error (auth/wrong-password).',
    'Firebase: Error (auth/user-not-found).' = 'Firebase: Error (auth/user-not-found).',
}

export const loginFx = createEffect<LoginCreditsType, void>();

export const login = createEvent<LoginCreditsType>();

sample({
    clock: login,
    target: loginFx,
});

loginFx.doneData.watch(() => {
    toastModel.events.add({
        message: 'Succesfully logged in',
        type: 'success',
    });
});

loginFx.failData.watch((err) => {
    if (
        err.message ===
        FirebaseAuthError['Firebase: Error (auth/wrong-password).']
    ) {
        toastModel.events.add({
            message: 'Wrong password',
            reason: err.message,
            type: 'error',
        });
        return;
    }

    if (
        err.message ===
        FirebaseAuthError['Firebase: Error (auth/user-not-found).']
    ) {
        toastModel.events.add({
            message: 'User not found',
            reason: err.message,
            type: 'error',
        });
        return;
    }

    toastModel.events.add({
        message: 'Failed to log in',
        reason: err.message,
        type: 'error',
    });
});

loginFx.use(async (credits: LoginCreditsType) => {
    await Database.Users.login(credits);
});
