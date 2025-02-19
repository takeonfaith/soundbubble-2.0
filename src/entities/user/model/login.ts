import { createEffect, createEvent, sample } from 'effector';
import { LoginCreditsType } from './types';
import { toastModel } from '../../../layout/toast/model';
import { Database } from '../../../database';
import { translate } from '../../../i18n';

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
        message: translate('logged_in'),
        type: 'success',
    });
});

loginFx.failData.watch((err) => {
    if (
        err.message ===
        FirebaseAuthError['Firebase: Error (auth/wrong-password).']
    ) {
        toastModel.events.add({
            message: translate('wrong_password'),
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
            message: translate('user_not_found'),
            reason: err.message,
            type: 'error',
        });
        return;
    }

    toastModel.events.add({
        message: translate('failed_to_login'),
        reason: err.message,
        type: 'error',
    });
});

loginFx.use(async (credits: LoginCreditsType) => {
    await Database.Users.login(credits);
});
