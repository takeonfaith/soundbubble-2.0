import { createEffect, createEvent, createStore, sample } from 'effector';
import { Database } from '../../../../database';
import { TPlaylist } from '../../../playlist/model/types';
import { TUser } from '../types';
import { toastModel } from '../../../../layout/toast/model';
import { $user } from '../user';
import { getDataFromEffect } from '../../../../shared/effector/getDataFromEffect';
import { createPendingEffectsStore } from '../../../../shared/effector/createPendingEffects';

type TToggleOtherPlaylistAction = {
    playlist: TPlaylist;
    isLiked: boolean;
    showToast: boolean;
};

type TEffectOtherPlaylistAction = Omit<
    TToggleOtherPlaylistAction,
    'isLiked'
> & {
    userId: string;
};

export const loadOwnPlaylistsFx = createEffect<TUser, TPlaylist[]>();
export const loadAddedPlaylistsFx = createEffect<TUser, TPlaylist[]>();
export const addPlaylistFx = createEffect<
    TEffectOtherPlaylistAction,
    TPlaylist
>();
export const removePlaylistFx = createEffect<
    TEffectOtherPlaylistAction,
    TPlaylist
>();

export const addOwnPlaylistToLibrary = createEvent<TPlaylist>();
export const removeOwnPlaylistFromLibrary = createEvent<TPlaylist>();
export const updateOwnPlaylist = createEvent<TPlaylist>();
export const toggleOtherPlaylistLiked =
    createEvent<TToggleOtherPlaylistAction>();
const dislikeOtherPlaylist =
    createEvent<Omit<TToggleOtherPlaylistAction, 'isLiked'>>();
const likeOtherPlaylist =
    createEvent<Omit<TToggleOtherPlaylistAction, 'isLiked'>>();

export const $ownPlaylists = createStore<TPlaylist[]>([]);
export const $addedPlaylists = createStore<TPlaylist[]>([]);
export const $isAddingOrRemovingPlaylists = createPendingEffectsStore({
    effects: [addPlaylistFx, removePlaylistFx],
    getId: (p) => [p.playlist.id],
});

sample({
    clock: addOwnPlaylistToLibrary,
    source: $ownPlaylists,
    fn: (store, playlist) => [playlist, ...store],
    target: $ownPlaylists,
});

sample({
    clock: removeOwnPlaylistFromLibrary,
    source: $ownPlaylists,
    fn: (currentPlaylist, playlist) =>
        currentPlaylist.filter((p) => p.id !== playlist.id),
    target: $ownPlaylists,
});

sample({
    clock: addPlaylistFx.doneData,
    source: $addedPlaylists,
    fn: (currentPlaylists, newPlaylist) => [newPlaylist, ...currentPlaylists],
    target: $addedPlaylists,
});

sample({
    clock: removePlaylistFx.doneData,
    source: $addedPlaylists,
    fn: (currentPlaylists, newPlaylist) =>
        currentPlaylists.filter((p) => p.id !== newPlaylist.id),
    target: $addedPlaylists,
});

sample({
    clock: updateOwnPlaylist,
    source: $ownPlaylists,
    fn: (playlists, playlist) => {
        console.log('updateOwnPlaylist');

        const index = playlists.findIndex((p) => p.id === playlist.id);
        if (index !== -1) {
            return [
                ...playlists.slice(0, index),
                playlist,
                ...playlists.slice(index + 1),
            ];
        }
        return playlists;
    },
    target: $ownPlaylists,
});

sample({
    clock: toggleOtherPlaylistLiked,
    source: $addedPlaylists,
    filter: (added, { playlist }) => !!added.find((u) => u.id === playlist.id),
    fn: (_, props) => props,
    target: dislikeOtherPlaylist,
});

sample({
    clock: toggleOtherPlaylistLiked,
    source: $addedPlaylists,
    filter: (added, { playlist }) => !added.find((u) => u.id === playlist.id),
    fn: (_, props) => props,
    target: likeOtherPlaylist,
});

sample({
    clock: likeOtherPlaylist,
    source: $user,
    fn: (user, props) =>
        ({ userId: user?.uid, ...props } as TEffectOtherPlaylistAction),
    target: addPlaylistFx,
});

sample({
    clock: dislikeOtherPlaylist,
    source: $user,
    fn: (user, props) =>
        ({ userId: user?.uid, ...props } as TEffectOtherPlaylistAction),
    target: removePlaylistFx,
});

getDataFromEffect(loadOwnPlaylistsFx, $ownPlaylists);
getDataFromEffect(loadAddedPlaylistsFx, $addedPlaylists);

loadAddedPlaylistsFx.use(async ({ addedPlaylists }) => {
    try {
        return await Database.Playlists.getPlaylistsByUids(addedPlaylists);
    } catch (error) {
        throw new Error('Failed to load added playlists');
    }
});

loadOwnPlaylistsFx.use(async ({ ownPlaylists }) => {
    try {
        return await Database.Playlists.getPlaylistsByUids(ownPlaylists);
    } catch (error) {
        throw new Error('Failed to load own playlists');
    }
});

addPlaylistFx.use(async ({ playlist, userId }) => {
    await Database.Users.addPlaylistToLibrary(playlist.id, userId);
    return playlist;
});

removePlaylistFx.use(async ({ playlist, userId }) => {
    await Database.Users.removePlaylistFromLibrary(playlist.id, userId);

    return playlist;
});

removePlaylistFx.done.watch(({ params: { playlist, showToast } }) => {
    if (showToast) {
        toastModel.events.add({
            message: `${
                playlist.isAlbum ? 'Album' : 'Playlist'
            } removed from library`,
            type: 'info',
            duration: 5000,
        });
    }
});

addPlaylistFx.done.watch(({ params: { showToast, playlist } }) => {
    if (showToast) {
        toastModel.events.add({
            message: `${
                playlist.isAlbum ? 'Album' : 'Playlist'
            } added to library`,
            type: 'success',
            duration: 3000,
        });
    }
});

addPlaylistFx.failData.watch((err) => {
    toastModel.events.add({
        message: 'Failed to add playlist to library',
        type: 'error',
        reason: err.message,
        duration: 8000,
    });
});

removePlaylistFx.failData.watch((err) => {
    toastModel.events.add({
        message: 'Failed to remove playlist from library',
        type: 'error',
        reason: err.message,
        duration: 8000,
    });
});
