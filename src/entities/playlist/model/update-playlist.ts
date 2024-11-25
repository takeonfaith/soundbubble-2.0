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
import { updateDeepObject } from '../../../shared/funcs/updateDeepObject';
import { TSong } from '../../song/model/types';
import { $user, updateOwnPlaylist } from '../../user/model/user';
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

export const updatePlaylist = createEvent<{
    update: Partial<TUploadPlaylist>;
    onSuccess?: (updated: TPlaylist) => void;
}>();
export const updateLocalPlaylist = createEvent<{
    playlist: TPlaylist;
    songs?: TSong[];
}>();
export const addSongsToPlaylists = createEvent<{
    songs: TSong[];
    playlists: TPlaylist[];
    onSuccess?: () => void;
}>();

export const $isEditing = createStore(false);
export const isEditingApi = createApi($isEditing, {
    updateIsEditing: (_, val: boolean) => val,
});

sample({
    clock: addSongsToPlaylists,
    target: addSongsToPlaylistsFx,
});

// If this playlist is opened, update UI
sample({
    clock: addSongsToPlaylistsFx.doneData,
    source: $currentPlaylist,
    filter: (currentPlaylist, { playlists }) =>
        !!playlists.find((p) => p.id === currentPlaylist?.id),
    fn: (currentPlaylist, { songs }) =>
        updateDeepObject(
            currentPlaylist,
            'songs',
            songs.map((s) => s.id)
        ),
    target: $currentPlaylist,
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
    fn: ({ playlist }) => playlist,
    target: $currentPlaylist,
});

sample({
    clock: updateLocalPlaylist,
    filter: ({ songs }) => !!songs,
    fn: ({ songs }) => songs!,
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
