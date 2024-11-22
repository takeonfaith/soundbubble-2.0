// sorting own playlists when play clicked

import { createEffect, sample } from 'effector';
import { $ownPlaylists, $user } from '../../user/model';
import { initalize, loadAndPlay } from './song-state';
import { Database } from '../../../database';

const updateOwnPlaylistsOrderFx = createEffect<
    {
        userId: string;
        playlistIds: string[];
    },
    void,
    Error
>();

sample({
    clock: [loadAndPlay, initalize],
    source: $ownPlaylists,
    filter: (ownPlaylists, { queue }) =>
        !!ownPlaylists.find((playlist) => playlist.id === queue.id),
    fn: (ownPlaylists, { queue }) => {
        const playlistIndex = ownPlaylists.findIndex(
            (playlist) => playlist.id === queue.id
        );
        const newOwnPlaylists = [...ownPlaylists];
        newOwnPlaylists.splice(playlistIndex, 1);
        return [ownPlaylists[playlistIndex], ...newOwnPlaylists];
    },
    target: $ownPlaylists,
});

sample({
    clock: [loadAndPlay, initalize],
    source: { ownPlaylists: $ownPlaylists, user: $user },
    filter: ({ ownPlaylists, user }, { queue }) =>
        !!user && !!ownPlaylists.find((playlist) => playlist.id === queue.id),
    fn: ({ ownPlaylists, user }, { queue }) => {
        const playlistIndex = ownPlaylists.findIndex(
            (playlist) => playlist.id === queue.id
        );
        const newOwnPlaylists = [...ownPlaylists];
        newOwnPlaylists.splice(playlistIndex, 1);
        const res = [ownPlaylists[playlistIndex], ...newOwnPlaylists];
        return {
            userId: user!.uid,
            playlistIds: res.map((playlist) => playlist.id).reverse(),
        };
    },
    target: updateOwnPlaylistsOrderFx,
});

updateOwnPlaylistsOrderFx.use(
    async ({ userId, playlistIds }) =>
        await Database.Users.updateOwnPlaylistsOrder(userId, playlistIds)
);
