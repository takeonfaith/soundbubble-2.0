import { createEffect, createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { Database } from '../../../database';
import { TPlaylist } from './types';
import { TSong } from '../../song/model/types';

type TStore = {
    loadingPlaylistId: string | null;
    loading: boolean;
    loadingAddedPlaylists: boolean;
    currentPlaylist: TPlaylist | null;
    currentPlaylistSongs: TSong[] | null;
    addedPlaylists: TPlaylist[];
};

const DEFAULT_STORE = {
    loadingPlaylistId: null,
    loadingAddedPlaylists: false,
    loading: false,
    currentPlaylist: null,
    currentPlaylistSongs: null,
    addedPlaylists: [],
};

const loadPlaylistFx = createEffect(async (store: TStore) => {
    try {
        if (!store.loadingPlaylistId)
            throw new Error('Playlist id not specified');
        const playlist = await Database.Playlists.getPlaylistByUid(
            store.loadingPlaylistId
        );
        const songs = await Database.Songs.getSongsByUids(playlist.songs);

        return { playlist, songs };
    } catch (error) {
        throw new Error((error as Error).message);
    }
});

// const loadAddedPlaylistsFx = createEffect(async (userId: string) => {
//     try {
//         return '';
//     } catch (error) {
//         throw new Error('Error');
//     }
// });

const addSongToPlaylistsFx = createEffect(
    async ({
        songId,
        playlistIds,
    }: {
        songId: string;
        playlistIds: string[];
    }) => {
        try {
            if (!songId) throw new Error('Song id not specified');
            if (!playlistIds.length)
                throw new Error('Playlist ids not specified');

            return await Database.Playlists.addSongToPlaylists(
                songId,
                playlistIds
            );
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
);

const loadPlaylist = createEvent<string>();
const addSongToPlaylists = createEvent<{
    songId: string;
    playlistIds: string[];
}>();

const $store = createStore<TStore>(DEFAULT_STORE);

sample({
    clock: loadPlaylist,
    source: $store,
    fn: (store, id) => ({ ...store, loadingPlaylistId: id, loading: true }),
    target: [$store, loadPlaylistFx],
});

sample({
    clock: loadPlaylistFx.doneData,
    source: $store,
    fn: (store, { playlist, songs }) => ({
        ...store,
        loading: false,
        currentPlaylist: playlist,
        currentPlaylistSongs: songs,
    }),
    target: $store,
});

// sample({
//     clock: loadPlaylistsByUserId,
//     source: $store,
//     fn: (store) => ({ ...store, loadingAddedPlaylists: true }),
//     target: [loadAddedPlaylistsFx, $store],
// });

sample({
    clock: addSongToPlaylists,
    target: addSongToPlaylistsFx,
});

export const playlistModel = {
    usePlaylist: () => useUnit($store),
    useAddingSongToPlaylists: () =>
        useUnit([addSongToPlaylistsFx.pending]),
    events: {
        loadPlaylist,
        addSongToPlaylists,
    },
};
