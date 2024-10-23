import { createEffect, createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { Database } from '../../../database';
import { toastModel } from '../../../layout/toast/model';
import { userIsLoggedIn } from '../../chat/lib/userIsLoggedIn';
import { TSong } from '../../song/model/types';
import {
    $user,
    addOwnPlaylistToLibrary,
    removeOwnPlaylistFromLibrary,
    updateOwnPlaylist,
} from '../../user/model';
import { TUser } from '../../user/model/types';
import { TPlaylist, TUploadPlaylist } from './types';

type TStore = {
    loadingPlaylistId: string | null;
    loading: boolean;
    loadingAddedPlaylists: boolean;
    currentPlaylist: TPlaylist | null;
    currentPlaylistSongs: TSong[] | null;
    addedPlaylists: TPlaylist[];
    error: string | null;
};

const DEFAULT_STORE = {
    loadingPlaylistId: null,
    loadingAddedPlaylists: false,
    loading: false,
    currentPlaylist: null,
    currentPlaylistSongs: null,
    addedPlaylists: [],
    error: null,
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

type AddSongsToPlaylistProps = {
    songs: TSong[];
    playlists: TPlaylist[];
    onSuccess?: () => void;
};

export const addSongsToPlaylistsFx = createEffect(
    async ({ songs, playlists, onSuccess }: AddSongsToPlaylistProps) => {
        await Database.Playlists.addSongsToPlaylists(songs, playlists);
        onSuccess?.();
        return { songs, playlists };
    }
);

addSongsToPlaylistsFx.done.watch(() => {
    toastModel.events.show({
        message: 'Song added to playlist',
        type: 'success',
    });
});

addSongsToPlaylistsFx.failData.watch((error) => {
    toastModel.events.show({
        message: 'Failed to add song to playlist',
        reason: error.message,
        type: 'error',
    });
});

const createPlaylistsFx = createEffect(
    async ({
        playlist,
        onSuccess,
    }: {
        playlist: TUploadPlaylist;
        onSuccess?: (playlist: TPlaylist) => void;
    }) => {
        const res = await Database.Playlists.createPlaylist(playlist);
        onSuccess?.(res);
        return res;
    }
);

createPlaylistsFx.doneData.watch(() => {
    toastModel.events.show({
        message: `Playlist created`,
        type: 'success',
    });
});

createPlaylistsFx.fail.watch(({ error }) => {
    toastModel.events.show({
        message: 'Failed to create playlist',
        reason: error.message,
        type: 'error',
    });
});

const loadPlaylist = createEvent<string>();
const addSongsToPlaylists = createEvent<{
    songs: TSong[];
    playlists: TPlaylist[];
    onSuccess?: () => void;
}>();
const createPlaylist = createEvent<{
    playlist: TUploadPlaylist;
    onSuccess?: (playlist: TPlaylist) => void;
}>();

const $store = createStore<TStore>(DEFAULT_STORE);

sample({
    clock: loadPlaylist,
    source: $store,
    fn: (store, id) => ({
        ...store,
        loadingPlaylistId: id,
        loading: true,
        error: null,
    }),
    target: [$store, loadPlaylistFx],
});

sample({
    clock: createPlaylist,
    target: createPlaylistsFx,
});

sample({
    clock: createPlaylistsFx.doneData,
    target: addOwnPlaylistToLibrary,
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

sample({
    clock: loadPlaylistFx.failData,
    source: $store,
    fn: (store, error) => ({ ...store, error: error.message }),
    target: $store,
});

// sample({
//     clock: loadPlaylistsByUserId,
//     source: $store,
//     fn: (store) => ({ ...store, loadingAddedPlaylists: true }),
//     target: [loadAddedPlaylistsFx, $store],
// });

sample({
    clock: addSongsToPlaylists,
    target: addSongsToPlaylistsFx,
});

// If this playlist is opened, update UI
sample({
    clock: addSongsToPlaylistsFx.doneData,
    source: $store,
    filter: ({ currentPlaylist }, { playlists }) =>
        !!playlists.find((p) => p.id === currentPlaylist?.id),
    fn: (store, { songs }) =>
        ({
            ...store,
            currentPlaylist: {
                ...store.currentPlaylist,
                songs: [
                    ...(store.currentPlaylist?.songs ?? []),
                    ...songs.map((song) => song.id),
                ],
            },
            currentPlaylistSongs: [
                ...(store.currentPlaylistSongs ?? []),
                ...songs,
            ],
        } as TStore),
    target: $store,
});

// #region Delete playlist

export const deletePlaylistFx = createEffect<
    { playlist: TPlaylist; onSuccess?: (playlist: TPlaylist) => void },
    TPlaylist,
    Error
>();

const deletePlaylist = createEvent<{
    playlist: TPlaylist;
    onSuccess?: (playlist: TPlaylist) => void;
}>();

sample({
    clock: deletePlaylist,
    source: $user,
    filter: (currentUser, { playlist }) =>
        !!playlist.authors.find((author) => author.uid === currentUser?.uid),
    fn: (_, props) => props,
    target: deletePlaylistFx,
});

sample({
    clock: deletePlaylistFx.doneData,
    source: $store,
    fn: (store) => ({
        ...store,
        currentPlaylist: null,
        currentPlaylistSongs: [],
    }),
    target: $store,
});

sample({
    clock: deletePlaylistFx.doneData,
    target: removeOwnPlaylistFromLibrary,
});

deletePlaylistFx.doneData.watch(() => {
    toastModel.events.show({
        message: 'Playlist deleted',
        type: 'success',
    });
});

deletePlaylistFx.failData.watch((err) => {
    toastModel.events.show({
        message: 'Failed to delete playlist',
        reason: err.message,
        type: 'error',
        duration: 10000,
    });
});

deletePlaylistFx.use(async ({ playlist, onSuccess }) => {
    await Database.Playlists.deletePlaylist(playlist);
    onSuccess?.(playlist);
    return playlist;
});

// #endregion

// #region Update Playlist
type TUpdatePlaylistEffectProps = {
    playlist: TPlaylist;
    update: Partial<TUploadPlaylist>;
    onSuccess?: (updated: TPlaylist) => void;
};

export const updatePlaylistFx = createEffect<
    TUpdatePlaylistEffectProps,
    TPlaylist,
    Error
>();
const updatePlaylist = createEvent<{
    update: Partial<TUploadPlaylist>;
    onSuccess?: (updated: TPlaylist) => void;
}>();
const updateLocalPlaylist = createEvent<TPlaylist>();

const $currentPlaylist = $store.map((store) => store.currentPlaylist);

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
    target: updateLocalPlaylist,
});

sample({
    clock: updateLocalPlaylist,
    source: $store,
    fn: (store, updated) => ({
        ...store,
        currentPlaylist: updated,
    }),
    target: $store,
});

sample({
    clock: updateLocalPlaylist,
    target: updateOwnPlaylist,
});

updatePlaylistFx.doneData.watch(() => {
    toastModel.events.show({
        message: 'Playlist updated',
        type: 'success',
    });
});

updatePlaylistFx.failData.watch((err) => {
    toastModel.events.show({
        message: 'Failed to update playlist',
        reason: err.message,
        type: 'error',
        duration: 10000,
    });
});

updatePlaylistFx.use(async ({ playlist, update, onSuccess }) => {
    const updated = await Database.Playlists.updatePlaylist(playlist, update);
    onSuccess?.(updated);
    return updated;
});

// #endregion

// #region Send Participant Requests

const sendPlaylistInvitationFx = createEffect<
    { senderId: string; playlist: TPlaylist; participants: TUser[] },
    TUser[],
    Error
>();

export const acceptInvitationFx = createEffect<
    {
        user: TUser;
        playlist: TPlaylist;
        chatId: string;
        messageId: string;
        onSuccess?: (playlist: TPlaylist) => void;
    },
    TPlaylist,
    Error
>();

const sendPlaylistInvitation = createEvent<TUser[]>();
const acceptInvitation = createEvent<{
    playlist: TPlaylist;
    chatId: string;
    messageId: string;
    onSuccess?: (playlist: TPlaylist) => void;
}>();

sample({
    clock: sendPlaylistInvitation,
    source: { user: $user, playlist: $currentPlaylist },
    filter: ({ user, playlist }) => userIsLoggedIn(user) && !!playlist,
    fn: ({ user, playlist }, participants) => ({
        senderId: user!.uid,
        playlist: playlist!,
        participants,
    }),
    target: sendPlaylistInvitationFx,
});

sample({
    clock: acceptInvitation,
    source: $user,
    filter: userIsLoggedIn,
    fn: (user, props) => ({ user, ...props }),
    target: acceptInvitationFx,
});

sample({
    clock: acceptInvitationFx.doneData,
    target: addOwnPlaylistToLibrary,
});

sendPlaylistInvitationFx.use(async ({ senderId, playlist, participants }) => {
    await Database.Playlists.sendPlaylistInvitation(
        senderId,
        playlist,
        participants
    );

    return participants;
});

sendPlaylistInvitationFx.doneData.watch(() => {
    toastModel.events.show({
        message: 'Participant requests sent',
        type: 'success',
    });
});

acceptInvitationFx.use(
    async ({ user, chatId, messageId, playlist, onSuccess }) => {
        await Database.Playlists.acceptInvitation(
            user,
            chatId,
            messageId,
            playlist
        );
        onSuccess?.(playlist);
        return playlist;
    }
);

acceptInvitationFx.doneData.watch(() => {
    toastModel.events.show({
        message: 'Invitation accepted',
        type: 'success',
    });
});

acceptInvitationFx.failData.watch((err) => {
    toastModel.events.show({
        message: 'Failed to accept invitation',
        type: 'error',
        reason: err.message,
        duration: 10000,
    });
});

// #endregion

export const playlistModel = {
    usePlaylist: () => useUnit($store),
    useCreatePlaylist: () => useUnit([createPlaylistsFx.pending]),
    events: {
        loadPlaylist,
        addSongsToPlaylists,
        createPlaylist,
        deletePlaylist,
        updatePlaylist,
        sendPlaylistInvitation,
        acceptInvitation,
    },
};
