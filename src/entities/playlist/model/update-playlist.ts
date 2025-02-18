import {
    createApi,
    createEffect,
    createEvent,
    createStore,
    sample,
} from 'effector';
import { Database } from '../../../database';
import { toastModel } from '../../../layout/toast/model';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { createPendingEffectsStore } from '../../../shared/effector/createPendingEffects';
import { filterOneArrayWithAnother } from '../../../shared/funcs/filterOneArrayWithAnother';
import { TSong } from '../../song/model/types';
import { $currentPlaylist, $currentPlaylistSongs } from './playlist';
import { TPlaylist, TUploadPlaylist } from './types';
import {
    $ownPlaylists,
    updateOwnPlaylist,
} from '../../user/model/library/playlists';
import { $user } from '../../user/model/user';

// #region Update Playlist
type TUpdatePlaylistEffectProps = {
    playlist: TPlaylist;
    update: Partial<TUploadPlaylist>;
    onSuccess?: (updated: TPlaylist) => void;
};

type AddSongsToPlaylistProps = {
    songs: TSong[];
    playlists: TPlaylist[];
    onSuccess?: () => void;
};

const getSongs = (
    currentPlaylistSongs: TSong[] | null,
    currentSongIds?: string[],
    newSongIds?: string[]
) => {
    if (currentSongIds?.length === newSongIds?.length) {
        return currentPlaylistSongs ?? [];
    }

    return currentPlaylistSongs?.filter((s) => newSongIds?.includes(s.id));
};

export const updatePlaylistFx = createEffectWithToast<
    TUpdatePlaylistEffectProps,
    TPlaylist
>('Playlist updated', 'Failed to update playlist');

export const addSongsToPlaylistsFx = createEffect<
    AddSongsToPlaylistProps,
    { songs: TSong[]; playlists: TPlaylist[] }
>();

export const removeSongsFromPlaylistsFx = createEffect<
    AddSongsToPlaylistProps,
    { songs: TSong[]; playlists: TPlaylist[] }
>();

export const updatePlaylist = createEvent<{
    update: Partial<TUploadPlaylist>;
    onSuccess?: (updated: TPlaylist) => void;
}>();
export const updateLocalPlaylist = createEvent<{
    playlist: TPlaylist;
    songs?: TSong[];
}>();
export const addSongsToPlaylists = createEvent<AddSongsToPlaylistProps>();
export const removeSongsFromPlaylists = createEvent<AddSongsToPlaylistProps>();

export const $pendingAddingOrRemoving = createPendingEffectsStore({
    effects: [addSongsToPlaylistsFx, removeSongsFromPlaylistsFx],
    getId: (p) => p.playlists.map((p) => p.id),
});

export const $isEditing = createStore(false);

export const isEditingApi = createApi($isEditing, {
    updateIsEditing: (_, val: boolean) => val,
});

sample({
    clock: addSongsToPlaylists,
    target: addSongsToPlaylistsFx,
});

sample({
    clock: removeSongsFromPlaylists,
    target: removeSongsFromPlaylistsFx,
});

sample({
    clock: removeSongsFromPlaylistsFx.doneData,
    source: $ownPlaylists,
    fn: (ownPlaylists, { playlists, songs }) => {
        const newPlaylists = [...ownPlaylists];
        const found = newPlaylists.find(
            // POTENTIAL BUG: ----------------------↓ because it's an array and I only change in the first element
            (playlist) => playlist.id === playlists[0].id
        )!;

        return {
            playlist: {
                ...found,
                songs: filterOneArrayWithAnother(
                    found.songs,
                    songs,
                    (id) => id,
                    (songs) => songs.map((s) => s.id)
                ),
            } as TPlaylist,
        };
    },
    target: updateLocalPlaylist,
});

sample({
    clock: addSongsToPlaylistsFx.doneData,
    source: {
        currentPlaylist: $currentPlaylist,
        currentPlaylistSongs: $currentPlaylistSongs,
    },
    filter: ({ currentPlaylist }, { playlists }) =>
        !!playlists.find((p) => p.id === currentPlaylist?.id),
    fn: ({ currentPlaylistSongs }, { songs }) => [
        ...currentPlaylistSongs,
        ...songs,
    ],
    target: $currentPlaylistSongs,
});

sample({
    clock: addSongsToPlaylistsFx.doneData,
    source: $ownPlaylists,
    fn: (ownPlaylists, { playlists, songs }) => {
        const newPlaylists = [...ownPlaylists];

        return newPlaylists.reduce((acc, p, index) => {
            const found = playlists.find((playlist) => playlist.id === p.id);
            if (found) {
                newPlaylists[index].songs = [
                    ...newPlaylists[index].songs,
                    ...songs.map((s) => s.id),
                ];
            }
            acc.push(newPlaylists[index]);
            return acc;
        }, [] as TPlaylist[]);
    },
    target: $ownPlaylists,
});

sample({
    clock: updatePlaylist,
    source: { user: $user, playlist: $currentPlaylist },
    filter: ({ playlist, user }) =>
        !!playlist &&
        !!user &&
        !!playlist.authors.find((a) => a.uid === user.uid),
    fn: ({ playlist }, { update, onSuccess }) => ({
        update,
        onSuccess,
        playlist: playlist!,
    }),
    target: updatePlaylistFx,
});

sample({
    clock: updatePlaylistFx.doneData,
    source: {
        currentPlaylist: $currentPlaylist,
        currentPlaylistSongs: $currentPlaylistSongs,
    },
    fn: ({ currentPlaylist, currentPlaylistSongs }, newPlaylist) => ({
        playlist: newPlaylist,
        songs: getSongs(
            currentPlaylistSongs,
            currentPlaylist?.songs,
            newPlaylist.songs
        ),
    }),
    target: updateLocalPlaylist,
});

sample({
    clock: updateLocalPlaylist,
    source: $currentPlaylist,
    filter: (currentPlaylist, { playlist }) =>
        !!currentPlaylist && currentPlaylist.id === playlist.id,
    fn: (_, { playlist }) => playlist,
    target: $currentPlaylist,
});

sample({
    clock: updateLocalPlaylist,
    source: $currentPlaylist,
    filter: (currentPlaylist, { songs, playlist }) =>
        !!currentPlaylist && !!songs && playlist.id === currentPlaylist.id,
    fn: (_, { songs }) => songs!,
    target: $currentPlaylistSongs,
});

sample({
    clock: updateLocalPlaylist,
    fn: ({ playlist }) => playlist,
    target: updateOwnPlaylist,
});

updatePlaylistFx.use(async ({ playlist, update, onSuccess }) => {
    const updated = await Database.Playlists.updatePlaylist(playlist, update);
    onSuccess?.(updated);
    return updated;
});

addSongsToPlaylistsFx.use(async ({ songs, playlists, onSuccess }) => {
    await Database.Playlists.addSongsToPlaylists(songs, playlists);
    onSuccess?.();
    return { songs, playlists };
});

removeSongsFromPlaylistsFx.use(async ({ songs, playlists, onSuccess }) => {
    console.log('remove songs', songs, playlists);

    await Database.Playlists.removeSongsFromPlaylists(songs, playlists);
    onSuccess?.();
    return { songs, playlists };
});

addSongsToPlaylistsFx.done.watch(({ result: { songs, playlists } }) => {
    toastModel.events.add({
        message: `Song${songs.length > 1 ? 's' : ''} added to playlist${
            playlists.length > 1 ? 's' : ''
        }`,
        type: 'success',
    });
});

addSongsToPlaylistsFx.failData.watch((error) => {
    toastModel.events.add({
        message: 'Failed to add song to playlist',
        reason: error.message,
        type: 'error',
    });
});

removeSongsFromPlaylistsFx.failData.watch((error) => {
    toastModel.events.add({
        message: 'Failed to remove song from playlist',
        reason: error.message,
        type: 'error',
    });
});

removeSongsFromPlaylistsFx.done.watch(({ result: { songs, playlists } }) => {
    toastModel.events.add({
        type: 'success',
        message: `Song${songs.length > 1 ? 's' : ''} removed from playlist${
            playlists.length > 1 ? 's' : ''
        }`,
    });
});
