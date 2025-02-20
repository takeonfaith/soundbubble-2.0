import {
    createApi,
    createEffect,
    createEvent,
    createStore,
    sample,
} from 'effector';
import { debounce } from 'patronum';
import { Database } from '../../../../database';
import { toastModel } from '../../../../layout/toast/model';
import { createPendingEffectsStore } from '../../../../shared/effector/createPendingEffects';
import { getDataFromEffect } from '../../../../shared/effector/getDataFromEffect';
import { TSong } from '../../../song/model/types';
import { REMOVE_FROM_LIBRARY_TIMEOUT } from '../constants';
import { TUser } from '../types';
import { $user } from '../user';
import { addAuthorsToLibrary } from './authors';
import { translate } from '../../../../i18n';

type TLibraryUpdateSongProps = {
    userId: string;
    songs: string[];
};

type TLibraryAddSongProps = {
    userId: string;
    song: TSong;
    canSaveRevert?: boolean;
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
const $canSaveRevert = createStore<boolean>(true);
const { enableSaveRevert } = createApi($canSaveRevert, {
    enableSaveRevert: (_, val: boolean) => val,
});

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
    source: { library: $library, canSaveRevert: $canSaveRevert },
    filter: ({ canSaveRevert }) => canSaveRevert,
    fn: ({ library }) => library,
    target: $copiedLibrary,
});

sample({
    clock: removeSongFromLibrary,
    source: { user: $user, canSaveRevert: $canSaveRevert },
    filter: ({ user }) => !!user,
    fn: ({ user, canSaveRevert }, song) => ({
        userId: user!.uid,
        song,
        canSaveRevert,
    }),
    target: removeSongFromLibraryFx,
});

sample({
    clock: removeSongFromLibraryFx.done,
    source: $canSaveRevert,
    filter: Boolean,
    fn: () => false,
    target: enableSaveRevert,
});

sample({
    clock: removeSongFromLibraryFx.done,
    source: $library,
    fn: (library, { params: { song } }) => {
        return library.filter((s) => s.id !== song.id);
    },
    target: $library,
});

debounce(removeSongFromLibraryFx.doneData, REMOVE_FROM_LIBRARY_TIMEOUT).watch(
    () => {
        resetCopiedLibrary();
        enableSaveRevert(true);
    }
);

sample({
    clock: revertRemove,
    source: { user: $user, oldLibrary: $copiedLibrary },
    filter: ({ user, oldLibrary }) => !!user && oldLibrary.length !== 0,
    fn: ({ user, oldLibrary }) => {
        return {
            userId: user!.uid,
            songs: oldLibrary.map((s) => s.id).reverse(),
        };
    },
    target: [updateLibraryFx],
});

sample({
    clock: revertRemove,
    fn: () => true,
    target: enableSaveRevert,
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

removeSongFromLibraryFx.done.watch(({ params: { canSaveRevert } }) => {
    if (canSaveRevert) {
        toastModel.events.add({
            message: translate('removed_from_like'),
            type: 'info',
            action: {
                text: translate('undo'),
                onClick: () => {
                    revertRemove();
                },
            },
            showTimer: true,
            duration: REMOVE_FROM_LIBRARY_TIMEOUT,
        });
    }
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
        message: translate('song_added'),
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
