import {
    createApi,
    createEffect,
    createEvent,
    createStore,
    sample,
} from 'effector';
import { Database } from '../../../database';
import { translate } from '../../../i18n';
import { toastModel } from '../../../layout/toast/model';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { createPendingEffectsStore } from '../../../shared/effector/createPendingEffects';
import { capitalize } from '../../../shared/funcs/capitalize';
import { filterOneArrayWithAnother } from '../../../shared/funcs/filterOneArrayWithAnother';
import { TSong } from '../../song/model/types';
import {
    $ownPlaylists,
    updateOwnPlaylist,
} from '../../user/model/library/playlists';
import { $user } from '../../user/model/user';
import { $currentPlaylist, $currentPlaylistSongs } from './playlist';
import { TPlaylist, TUploadPlaylist } from './types';

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
    source: {
        ownPlaylists: $ownPlaylists,
        currentPlaylistSongs: $currentPlaylistSongs,
    },
    fn: ({ ownPlaylists, currentPlaylistSongs }, { playlists, songs }) => {
        const newPlaylists = [...ownPlaylists];
        const found = newPlaylists.find(
            // POTENTIAL BUG: ----------------------↓ because it's an array and I only change in the first element
            (playlist) => playlist.id === playlists[0].id
        )!;
        console.log();

        const filteredSongIds = filterOneArrayWithAnother(
            found.songs,
            songs,
            (id) => id,
            (songs) => songs.map((s) => s.id)
        );

        const filteredSongs = filterOneArrayWithAnother(
            currentPlaylistSongs,
            songs,
            (song) => song.id,
            (songs) => songs.map((s) => s.id)
        );

        return {
            playlist: {
                ...found,
                songs: filteredSongIds,
            } as TPlaylist,
            songs: filteredSongs,
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
    const song =
        songs.length > 1 ? translate('songs_to_four') : translate('song_one');
    const playlist =
        playlists.length > 1
            ? translate('playlist_to_four')
            : translate('playlist_one');

    toastModel.events.add({
        message: `${capitalize(song)} ${translate('added_to')} ${playlist}`,
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
    const song =
        songs.length > 1 ? translate('songs_to_four') : translate('song_one');
    const playlist =
        playlists.length > 1
            ? translate('playlist_from_five')
            : translate('playlist_to_four');
    const removed =
        songs.length > 1
            ? translate('many_removed_from')
            : translate('removed_from');

    toastModel.events.add({
        type: 'success',
        message: `${capitalize(song)} ${removed} ${playlist}`,
    });
});
