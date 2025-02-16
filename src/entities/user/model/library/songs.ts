import { createEffect, createEvent, createStore, sample } from 'effector';
import { throttle } from 'patronum';
import { Database } from '../../../../database';
import { toastModel } from '../../../../layout/toast/model';
import { TSong } from '../../../song/model/types';
import { REMOVE_FROM_LIBRARY_TIMEOUT } from '../constants';
import { TUser } from '../types';
import { $user } from '../user';
import { addAuthorsToLibrary } from './authors';
import { getDataFromEffect } from '../../../../shared/effector/getDataFromEffect';
import { createPendingEffectsStore } from '../../../../shared/effector/createPendingEffects';

type TLibraryUpdateSongProps = {
    userId: string;
    songs: string[];
};

type TLibraryAddSongProps = {
    userId: string;
    song: TSong;
};

const updateLibraryFx = createEffect<TLibraryUpdateSongProps, void>();
export const loadLibraryFx = createEffect<TUser, TSong[]>();
export const addSongToLibraryFx = createEffect<TLibraryAddSongProps, void>();
export const removeSongFromLibraryFx = createEffect<
    TLibraryAddSongProps,
    void
>();

export const addSongToLibrary = createEvent<TSong>();
export const removeSongFromLibrary = createEvent<TSong>();
export const toggleSongLiked = createEvent<{ song: TSong; isLiked: boolean }>();
export const revertRemove = createEvent();
export const resetCopiedLibrary = createEvent();

export const $library = createStore<TSong[]>([]);
export const $isAddingOrRemovingSong = createPendingEffectsStore({
    effects: [addSongToLibraryFx, removeSongFromLibraryFx],
    getId: (p) => [p.song.id],
});
const $copiedLibrary = createStore<TSong[]>([]).reset(resetCopiedLibrary);

sample({
    clock: toggleSongLiked,
    filter: ({ isLiked }) => isLiked,
    fn: ({ song }) => song,
    target: removeSongFromLibrary,
});

sample({
    clock: toggleSongLiked,
    filter: ({ isLiked }) => !isLiked,
    fn: ({ song }) => song,
    target: addSongToLibrary,
});

sample({
    clock: addSongToLibrary,
    source: $user,
    filter: Boolean,
    fn: (user, song) => ({
        userId: user.uid,
        song: song,
        authors: song.authors,
    }),
    target: [addSongToLibraryFx],
});

sample({
    clock: addSongToLibraryFx.done,
    source: $library,
    fn: (library, { params }) => {
        return [params.song, ...library];
    },
    target: $library,
});

sample({
    clock: addSongToLibraryFx.done,
    fn: ({ params }) => ({
        authors: params.song.authors.map((a) => ({
            ...a,
            isAuthor: true,
        })) as TUser[],
        showToast: false,
    }),
    target: addAuthorsToLibrary,
});

sample({
    clock: removeSongFromLibrary,
    source: $library,
    fn: (library) => library,
    target: $copiedLibrary,
});

sample({
    clock: removeSongFromLibrary,
    source: $user,
    filter: Boolean,
    fn: (user, song) => ({ userId: user.uid, song }),
    target: removeSongFromLibraryFx,
});

sample({
    clock: removeSongFromLibraryFx.done,
    source: $library,
    fn: (library, { params: { song } }) => {
        return library.filter((s) => s.id !== song.id);
    },
    target: $library,
});

const { unsubscribe } = throttle(
    removeSongFromLibraryFx.doneData,
    REMOVE_FROM_LIBRARY_TIMEOUT
).watch(() => {
    resetCopiedLibrary();
});

sample({
    clock: revertRemove,
    source: { user: $user, oldLibrary: $copiedLibrary },
    filter: ({ user }) => !!user,
    fn: ({ user, oldLibrary }) => {
        unsubscribe();

        return {
            userId: user!.uid,
            songs: oldLibrary.map((s) => s.id).reverse(),
        };
    },
    target: [updateLibraryFx],
});

sample({
    clock: updateLibraryFx.doneData,
    source: $copiedLibrary,
    fn: (copiedLibrary) => copiedLibrary,
    target: [$library, resetCopiedLibrary],
});

getDataFromEffect(loadLibraryFx, $library);

loadLibraryFx.use(async ({ addedSongs }) => {
    return await Database.Songs.getSongsByUids(addedSongs?.reverse());
});

addSongToLibraryFx.use(async ({ userId, song }) => {
    if (!userId) return;

    await Database.Users.addSongToLibrary(userId, song.id);
});

removeSongFromLibraryFx.use(async ({ userId, song }) => {
    if (!userId) return;

    await Database.Users.removeSongFromLibrary(userId, song.id);
});

updateLibraryFx.use(async ({ userId, songs }) => {
    if (!userId) return;

    await Database.Users.updateLibrary(userId, songs);
});

removeSongFromLibraryFx.doneData.watch(() => {
    toastModel.events.add({
        message: 'Removed from Liked',
        type: 'info',
        action: {
            text: 'Undo',
            onClick: () => {
                revertRemove();
            },
        },
        showTimer: true,
        duration: REMOVE_FROM_LIBRARY_TIMEOUT,
    });
});

removeSongFromLibraryFx.failData.watch((err) => {
    toastModel.events.add({
        message: `Failed to remove song from Liked. Reason: ${err.message}`,
        type: 'error',
        duration: 8000,
    });
});

addSongToLibraryFx.doneData.watch(() => {
    toastModel.events.add({
        message: 'Song added to Liked',
        type: 'success',
        duration: 5000,
    });
});

addSongToLibraryFx.failData.watch((err) => {
    toastModel.events.add({
        message: `Failed to add song to Liked. Reason: ${err.message}`,
        type: 'error',
        duration: 8000,
    });
});
