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
import { $user, logout, setUser } from '../../user/model/user';
import { TUser } from '../../user/model/types';
import { getHeavyMediaIdsFromChats } from '../lib/getHeavyMediaIdsFromChats';
import { $cache } from './cache';
import { showNotificationFx } from './chat-notifications';
import { loadHeavyMedia } from './heavy-media';
import { TChat } from './types';

type UpdateTypingProps = { userId: string; chatId: string; isTyping: boolean };

let unsubscribe: Unsubscribe | null = null;

const $initialLoad = createStore(true);

export const subscribeToChatsFx = createEffect<string, void, Error>();
export const initialChatLoadFx = createEffect<TUser, TChat[], Error>();
const updateIsTypingFx = createEffect<UpdateTypingProps, void, Error>();

export const updateChats = createEvent<TChat[]>();
export const updateIsTyping = createEvent<boolean>();
export const insertChats = createEvent<TChat[]>();

export const $currentChatId = createStore<string | undefined | null>('');

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

export const $amITyping = createStore(false);

export const currentChatIdApi = createApi($currentChatId, {
    setCurrentChatId: (_, id: string | null | undefined) => id,
});

// unsubscribe from chat updates if logout
logout.watch(() => {
    unsubscribe?.();
    unsubscribe = null;
});

$chats.reset(logout);

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

sample({
    clock: initialChatLoadFx.done,
    fn: () => false,
    target: $initialLoad,
});

sample({
    clock: updateChats,
    source: {
        chats: $chats,
        user: $user,
        currentChatId: $currentChatId,
        cache: $cache,
        initialLoad: $initialLoad,
    },
    filter: ({ chats, user, currentChatId, initialLoad }, newChats) => {
        return (
            !initialLoad &&
            chats[0]?.lastMessage?.id !== newChats[0]?.lastMessage?.id &&
            !!user &&
            !currentChatId &&
            !!chats[0].lastMessage &&
            newChats[0].lastMessage?.sender !== user.uid
        );
    },
    fn: ({ cache }, chats) => {
        return {
            chat: chats[0],
            cache,
        };
    },
    target: showNotificationFx,
});

sample({
    clock: updateChats,
    source: { user: $user },
    filter: ({ user }, newChats) => {
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

sample({
    clock: updateIsTyping,
    target: $amITyping,
});

sample({
    clock: updateIsTyping,
    source: { user: $user, chatId: $currentChatId },
    filter: ({ user, chatId }) => !!user && !!chatId,
    fn: ({ user, chatId }, isTyping) => ({
        userId: user!.uid,
        chatId: chatId!,
        isTyping,
    }),
    target: updateIsTypingFx,
});

initialChatLoadFx.use(async (user: TUser) => {
    const chats = await Database.Chats.getChatsByIds(user.uid);
    return chats;
});

subscribeToChatsFx.use(async (userId: string) => {
    unsubscribe = await Database.Chats.subscribeToChatsWithUserId(
        userId,
        (chats) => {
            insertChats(chats);
        }
    );
});

updateIsTypingFx.use(async ({ userId, chatId, isTyping }) => {
    await Database.Chats.updateIsTyping(userId, chatId, isTyping);
});
