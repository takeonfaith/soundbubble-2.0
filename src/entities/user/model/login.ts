import { createEffect, createEvent, sample } from 'effector';
import { LoginCreditsType } from './types';
import { toastModel } from '../../../layout/toast/model';
import { Database } from '../../../database';

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
    toastModel.events.add({
        message: 'Failed to log in into your account',
        reason: err.message,
        type: 'error',
    });
});

loginFx.use(async (credits: LoginCreditsType) => {
    await Database.Users.login(credits);
});
