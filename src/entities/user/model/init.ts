import { createEffect, createEvent, createStore, sample } from 'effector';
import { loadUserSearchHistoryFx } from '../../search/model/search-history';
import { loadAddedAuthorsFx } from './library/authors';
import { loadAddedPlaylistsFx, loadOwnPlaylistsFx } from './library/playlists';
import { loadLibraryFx } from './library/songs';
import { TUser } from './types';
import { $user, $userCreds } from './user';
import { User } from 'firebase/auth';
import { toastModel } from '../../../layout/toast/model';
import { Database } from '../../../database';
import { signUpFx } from './sign-up';

export const loadUserDataFx = createEffect<User, TUser | null>();

export const loadUserData = createEvent<User | null>();

export const $isLoadingUser = createStore(true);

export const setUser = createEvent<TUser>();

sample({
    clock: loadUserDataFx.done,
    fn: ({ params: user }) => user,
    target: $userCreds,
});

sample({
    clock: signUpFx.doneData,
    filter: Boolean,
    fn: (user) => user,
    target: setUser,
});

sample({
    clock: loadUserData,
    filter: Boolean,
    target: loadUserDataFx,
});

sample({
    clock: loadUserData,
    filter: Boolean,
    fn: () => true,
    target: $isLoadingUser,
});

sample({
    clock: loadUserData,
    filter: (creds) => !creds,
    fn: () => false,
    target: $isLoadingUser,
});

sample({
    clock: loadUserDataFx.doneData,
    fn: () => false,
    target: $isLoadingUser,
});

sample({
    clock: loadUserDataFx.doneData,
    filter: Boolean,
    target: setUser,
});

sample({
    clock: setUser,
    fn: (user) => user,
    target: [
        $user,
        loadLibraryFx,
        loadOwnPlaylistsFx,
        loadAddedPlaylistsFx,
        loadAddedAuthorsFx,
        loadUserSearchHistoryFx,
    ],
});

loadUserDataFx.use(async (user) => {
    return await Database.Users.getUserById(user.uid);
});

loadUserDataFx.failData.watch((err) => {
    toastModel.events.add({
        type: 'error',
        message: 'Failed to load your data',
        reason: err.message,
        duration: 20000,
    });
});
