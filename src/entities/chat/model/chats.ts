import {
    combine,
    createApi,
    createEffect,
    createEvent,
    createStore,
    sample,
} from 'effector';
import { Unsubscribe } from 'firebase/firestore';
import { Database } from '../../../database';
import { TUser } from '../../user/model/types';
import { $user, logout, setUser } from '../../user/model/user';
import { getHeavyMediaIdsFromChats } from '../lib/getHeavyMediaIdsFromChats';
import { loadHeavyMedia } from './heavy-media';
import { TChat } from './types';

let unsubscribe: Unsubscribe | null = null;

const $initialLoad = createStore(true);

export const subscribeToChatsFx = createEffect<string, void, Error>();
export const initialChatLoadFx = createEffect<TUser, TChat[], Error>();

export const updateChats = createEvent<TChat[]>();
export const insertChats = createEvent<TChat[]>();

export const $currentChatId = createStore<Nullable<string>>('');

$currentChatId.reset(logout);

export const $chats = createStore<TChat[]>([]);

$chats.reset(logout);

export const $currentChat = combine(
    $currentChatId,
    $chats,
    (currentChatId, chats) => {
        return chats.find((chat) => chat.id === currentChatId);
    },
    { skipVoid: false }
);

export const currentChatIdApi = createApi($currentChatId, {
    setCurrentChatId: (_, id: string | null | undefined) => id,
});

// unsubscribe from chat updates if logout
logout.watch(() => {
    unsubscribe?.();
    unsubscribe = null;
});

sample({
    clock: setUser,
    fn: (user) => user,
    target: initialChatLoadFx,
});

sample({
    clock: initialChatLoadFx.done,
    source: { initialLoad: $initialLoad },
    filter: ({ initialLoad }) => !!initialLoad,
    fn: (_, { params: { uid } }) => {
        return uid;
    },
    target: subscribeToChatsFx,
});

sample({
    clock: initialChatLoadFx.doneData,
    fn: (chats) => chats,
    target: $chats,
});

// Load media when chats are first loaded
sample({
    clock: initialChatLoadFx.doneData,
    filter: (chats) => {
        return !!chats[0].lastMessage;
    },
    fn: (chats) => {
        const chat = chats[0];

        return {
            songIds: chat.lastMessage!.attachedSongs,
            playlistIds: chat.lastMessage!.attachedAlbums,
            userIds: chat.lastMessage!.attachedAuthors,
        };
    },
    target: loadHeavyMedia,
});

sample({
    clock: initialChatLoadFx.done,
    fn: () => false,
    target: $initialLoad,
});

sample({
    clock: updateChats,
    source: { user: $user },
    filter: ({ user }, newChats) => {
        console.log(user);

        const ifTheOnlyDifferenceIsMeTyping =
            newChats[0].typing.length === 1 &&
            newChats[0].typing[0] === user?.uid;

        return !ifTheOnlyDifferenceIsMeTyping;
    },
    fn: (_, chats) => {
        return chats;
    },
    target: $chats,
});

// Loading music, users etc ...
sample({
    clock: updateChats,
    fn: getHeavyMediaIdsFromChats,
    target: loadHeavyMedia,
});

initialChatLoadFx.use(async (user: TUser) => {
    const chats = await Database.Chats.getChatsByIds(user.uid);
    console.log(chats);

    return chats;
});

subscribeToChatsFx.use(async (userId: string) => {
    unsubscribe = await Database.Chats.subscribeToChatsWithUserId(
        userId,
        (chats) => {
            console.log(chats);

            insertChats(chats);
        }
    );
});
