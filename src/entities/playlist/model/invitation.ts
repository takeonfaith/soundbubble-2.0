// #region Send Participant Requests

import { createEffect, createEvent, sample } from 'effector';
import { toastModel } from '../../../layout/toast/model';
import { userIsLoggedIn } from '../../chat/lib/userIsLoggedIn';
import { TUser } from '../../user/model/types';
import { $user } from '../../user/model/user';
import { $currentPlaylist } from './playlist';
import { TPlaylist } from './types';
import { Database } from '../../../database';
import { addOwnPlaylistToLibrary } from '../../user/model/library/playlists';

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

export const sendPlaylistInvitation = createEvent<TUser[]>();
export const acceptInvitation = createEvent<{
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
    toastModel.events.add({
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
    toastModel.events.add({
        message: 'Invitation accepted',
        type: 'success',
    });
});

acceptInvitationFx.failData.watch((err) => {
    toastModel.events.add({
        message: 'Failed to accept invitation',
        type: 'error',
        reason: err.message,
        duration: 10000,
    });
});
