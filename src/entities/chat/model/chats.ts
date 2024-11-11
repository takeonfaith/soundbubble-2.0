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
import { $user, logout, setUser } from '../../user/model';
import { TChat } from './types';
import { getHeavyMediaIdsFromChats } from '../lib/getHeavyMediaIdsFromChats';
import { loadHeavyMedia } from './heavy-media';
import { showNotificationFx } from './chat-notifications';
import { $cache } from './cache';

type UpdateTypingProps = { userId: string; chatId: string; isTyping: boolean };

let unsubscribe: Unsubscribe | null = null;

export const subscribeToChatsFx = createEffect<string, void, Error>();
const updateIsTypingFx = createEffect<UpdateTypingProps, void, Error>();
export const addingUsersToChatFx = createEffect<
    { chat: TChat; userIds: string },
    void,
    Error
>();

export const updateChats = createEvent<TChat[]>();
export const updateIsTyping = createEvent<boolean>();

export const $currentChatId = createStore<string | undefined | null>('');
$currentChatId.reset(logout);

export const $chats = createStore<TChat[]>([]);

export const $currentChat = combine(
    $currentChatId,
    $chats,
    (currentChatId, chats) => {
        return chats.find((chat) => chat.id === currentChatId);
    }
);

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
    fn: (user) => user.uid,
    target: subscribeToChatsFx,
});

sample({
    clock: updateChats,
    source: {
        chats: $chats,
        user: $user,
        currentChatId: $currentChatId,
        cache: $cache,
    },
    filter: ({ chats, user, currentChatId }, newChats) => {
        return (
            chats[0]?.lastMessage?.id !== newChats[0]?.lastMessage?.id &&
            !!user &&
            !currentChatId &&
            !!chats[0].lastMessage &&
            newChats[0].lastMessage?.sender !== user.uid
        );
    },
    fn: ({ cache }, chats) => ({
        chat: chats[0],
        cache,
    }),
    target: showNotificationFx,
});

sample({
    clock: updateChats,
    fn: (chats) => {
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
    source: { user: $user, chatId: $currentChatId },
    filter: ({ user, chatId }) => !!user && !!chatId,
    fn: ({ user, chatId }, isTyping) => ({
        userId: user!.uid,
        chatId: chatId!,
        isTyping,
    }),
    target: updateIsTypingFx,
});

subscribeToChatsFx.use(async (userId: string) => {
    unsubscribe = await Database.Chats.subscribeToChatsWithUserId(
        userId,
        (chats) => {
            updateChats(chats);
        }
    );
});

updateIsTypingFx.use(async ({ userId, chatId, isTyping }) => {
    await Database.Chats.updateIsTyping(userId, chatId, isTyping);
});
