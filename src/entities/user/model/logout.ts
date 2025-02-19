import { createEffect, createEvent, sample } from 'effector';
import { Unsubscribe } from 'firebase/auth';
import { Database } from '../../../database';
import { toastModel } from '../../../layout/toast/model';
import {
    $chats,
    $currentChatId,
    unsubscribeFromChats,
} from '../../chat/model/chats';
import {
    $currentChatMessages,
    unsubscribeFromCurrentMessages,
} from '../../chat/model/messages';
import {
    $maxSeenAtInCurrentChat,
    $messagesReadCount,
    $unreadCountMap,
    $userLastReadAt,
} from '../../chat/model/unread';
import { $searchHistory } from '../../search/model/search-history';
import { currentTimeApi } from '../../song/new-model/current-time';
import { $currentSongIndex, $queue } from '../../song/new-model/queue/index';
import { stop } from '../../song/new-model/song-state';
import { $isSlowWave } from '../../song/new-model/wave';
import {
    $awaiting,
    $friendRequests,
    $friends,
    unsubscribeFromFriends,
} from './friends';
import { $addedAuthors } from './library/authors';
import { $addedPlaylists, $ownPlaylists } from './library/playlists';
import { $library } from './library/songs';
import { $user, $userCreds } from './user';
import { translate } from '../../../i18n';

export const logoutFx = createEffect();

export const logout = createEvent();

const stores = [
    $user,
    $userCreds,
    $library,
    $addedPlaylists,
    $isSlowWave,
    $ownPlaylists,
    $addedAuthors,
    $searchHistory,
    $chats,
    $currentChatId,
    $friends,
    $friendRequests,
    $awaiting,
    $queue,
    $currentSongIndex,
    $currentChatMessages,
    $unreadCountMap,
    $userLastReadAt,
    $maxSeenAtInCurrentChat,
    $messagesReadCount,
];

const subscriptions: (Unsubscribe | null)[] = [
    unsubscribeFromFriends,
    unsubscribeFromChats,
    unsubscribeFromCurrentMessages,
];

logoutFx.doneData.watch(() => {
    subscriptions.forEach((unsubscribe) => {
        if (unsubscribe) unsubscribe();
    });
});

stores.forEach((store) => store.reset(logoutFx.doneData));

sample({
    clock: logout,
    target: logoutFx,
});

sample({
    clock: logoutFx.doneData,
    target: [stop, currentTimeApi.reset],
});

logoutFx.use(async () => {
    await Database.Users.logout();
});

logoutFx.doneData.watch(() => {
    toastModel.events.add({
        type: 'info',
        message: translate('logged_out'),
        duration: 5000,
    });
});

logoutFx.failData.watch((err) => {
    toastModel.events.add({
        type: 'info',
        message: 'Failed to log out',
        reason: err.message,
        duration: 5000,
    });
});
