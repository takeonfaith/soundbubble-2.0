import { useUnit } from 'effector-react';
import { createPlaylist, createPlaylistsFx } from './create-playlist';
import { deletePlaylist } from './delete-playlist';
import { acceptInvitation, sendPlaylistInvitation } from './invitation';
import {
    $currentPlaylist,
    $currentPlaylistSongs,
    loadPlaylist,
    loadPlaylistFx,
} from './playlist';
import { $search, isSearchingApi } from './search';
import {
    $isEditing,
    addSongsToPlaylists,
    isEditingApi,
    removeSongsFromPlaylists,
    updatePlaylist,
} from './update-playlist';

export const playlistModel = {
    usePlaylist: () =>
        useUnit([
            $currentPlaylist,
            loadPlaylistFx.pending,
            $isEditing,
            $search,
        ]),
    usePlaylistSongs: () => useUnit([$currentPlaylistSongs]),
    useCreatePlaylist: () => useUnit([createPlaylistsFx.pending]),
    events: {
        loadPlaylist,
        addSongsToPlaylists,
        createPlaylist,
        deletePlaylist,
        updatePlaylist,
        sendPlaylistInvitation,
        acceptInvitation,
        removeSongsFromPlaylists,
        ...isEditingApi,
        ...isSearchingApi,
    },
};
