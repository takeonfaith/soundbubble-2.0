import { createEvent, createStore, sample } from 'effector';
import { Database } from '../../../database';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { TSong } from '../../song/model/types';
import { TPlaylist } from './types';

type TLoadPlaylistProps = { playlist: TPlaylist | null; songs: TSong[] };

export const loadPlaylistFx = createEffectWithToast<string, TLoadPlaylistProps>(
    '',
    'Failed to load playlist'
);

export const loadPlaylist = createEvent<string>();

export const $currentPlaylist = createStore<TPlaylist | null>(null);
export const $currentPlaylistSongs = createStore<TSong[]>([]);

sample({
    clock: loadPlaylist,
    fn: (playlistId) => playlistId,
    target: loadPlaylistFx,
});

sample({
    clock: loadPlaylistFx.doneData,
    fn: ({ playlist }) => playlist,
    target: $currentPlaylist,
});

sample({
    clock: loadPlaylistFx.doneData,
    fn: ({ songs }) => songs,
    target: $currentPlaylistSongs,
});

loadPlaylistFx.use(async (playlistId) => {
    const playlist = await Database.Playlists.getPlaylistByUid(playlistId);
    const songs = playlist
        ? await Database.Songs.getSongsByUids(playlist.songs)
        : [];

    return { playlist, songs };
});
