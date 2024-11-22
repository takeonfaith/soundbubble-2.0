import {
    createApi,
    createEffect,
    createEvent,
    createStore,
    sample,
} from 'effector';
import { Unsubscribe } from 'firebase/auth';
import { Database } from '../../../database';
import { $user, logout } from '../../user/model';
import { getHeavyMediaIdsFromMessages } from '../lib/getHeavyMediaIdsFromMessages';
import { $currentChatId } from './chats';
import { MAX_MESSAGES_PER_LOAD } from './constants';
import { loadHeavyMedia } from './heavy-media';
import { TMessage } from './types';

let unsubscribe: Unsubscribe | null;

export const subscribeToCurrentChatMessagesFx = createEffect<
    { chatId: string; userId: string },
    void,
    Error
>();

export const initiallyLoadChatMessagesFx = createEffect<
    { chatId: string; userId: string },
    { messages: TMessage[]; firstUnreadMessage: TMessage | null },
    Error
>();

export const paginationLoadMessagesFx = createEffect<
    { chatId: string; pagination: number; userId: string },
    TMessage[],
    Error
>();

const setCurrentChatMessages = createEvent<TMessage[]>();
const prependChatMessages = createEvent<TMessage[]>();
const addMessage = createEvent<TMessage>();

export const $currentChatMessages = createStore<TMessage[]>([]);
export const $firstUnreadMessage = createStore<TMessage | null>(null);

export const $initialLoad = createStore(true);
const $pagination = createStore(0);
export const $canMoreBeLoaded = createStore(true);
export const loadNextMessages = createEvent();

export const canMoreBeLoadedApi = createApi($canMoreBeLoaded, {
    canMoreBeLoaded: (_, val: boolean) => val,
});

// unsubscribe from chat updates if logout
logout.watch(() => {
    unsubscribe?.();
    unsubscribe = null;
});

$currentChatMessages.reset(logout);

sample({
    clock: $currentChatId,
    fn: () => true,
    target: $initialLoad,
});

sample({
    clock: setCurrentChatMessages,
    fn: (messages) => messages,
    target: $currentChatMessages,
});

sample({
    clock: [$currentChatId, $user],
    source: { chatId: $currentChatId, user: $user },
    filter: ({ chatId, user }) => !!chatId && !!user,
    fn: ({ chatId, user }) => {
        return { chatId: chatId!, userId: user!.uid };
    },
    target: [initiallyLoadChatMessagesFx],
});

sample({
    clock: initiallyLoadChatMessagesFx.doneData,
    fn: ({ messages }) => messages,
    target: [setCurrentChatMessages],
});

sample({
    clock: initiallyLoadChatMessagesFx.doneData,
    fn: ({ firstUnreadMessage }) => firstUnreadMessage,
    target: $firstUnreadMessage,
});

sample({
    clock: initiallyLoadChatMessagesFx.done,
    source: $user,
    filter: (user) => {
        return !!user;
    },
    fn: (_, { params }) => ({ ...params }),
    target: subscribeToCurrentChatMessagesFx,
});

// Loading music, users etc ...
sample({
    clock: initiallyLoadChatMessagesFx.doneData,
    fn: ({ messages }) => getHeavyMediaIdsFromMessages(messages),
    target: loadHeavyMedia,
});

sample({
    clock: addMessage,
    source: {
        messages: $currentChatMessages,
        initial: $initialLoad,
        user: $user,
    },
    filter: ({ initial, user, messages }, message) => {
        const lastMessage = messages[messages.length - 1];
        return (
            (!initial &&
                user?.uid !== message.sender &&
                lastMessage.sentTime < message.sentTime) ||
            lastMessage.isRead !== message.isRead
        );
    },
    fn: ({ messages }, message) => {
        const lastMessage = messages[messages.length - 1];

        if (message.id === lastMessage.id) {
            return [...messages.slice(0, messages.length - 1), message];
        }

        return [...messages, message];
    },
    target: $currentChatMessages,
});

// Loading music, users etc ...
sample({
    clock: addMessage,
    fn: (message) => getHeavyMediaIdsFromMessages([message]),
    target: loadHeavyMedia,
});

// Needed so that last message in chat is not displayed twice after initial load and subscription
sample({
    clock: addMessage,
    fn: () => false,
    target: $initialLoad,
});

sample({
    clock: loadNextMessages,
    source: { chatId: $currentChatId, pagination: $pagination, user: $user },
    filter: ({ chatId, user }) => !!chatId && !!user,
    fn: ({ chatId, pagination, user }) => ({
        pagination,
        chatId: chatId!,
        userId: user!.uid,
    }),
    target: paginationLoadMessagesFx,
});

// Loading music, users etc ...
sample({
    clock: paginationLoadMessagesFx.doneData,
    fn: getHeavyMediaIdsFromMessages,
    target: loadHeavyMedia,
});

sample({
    clock: paginationLoadMessagesFx.doneData,
    target: [prependChatMessages],
});

sample({
    clock: paginationLoadMessagesFx.doneData,
    filter: (messages) => {
        return messages.length < MAX_MESSAGES_PER_LOAD;
    },
    fn: () => false,
    target: $canMoreBeLoaded,
});

sample({
    clock: prependChatMessages,
    source: $currentChatMessages,
    fn: (messages, previous) => [...previous, ...messages],
    target: $currentChatMessages,
});

$currentChatId.watch((id) => {
    if (!id) {
        unsubscribe?.();
    }
});

initiallyLoadChatMessagesFx.use(async ({ chatId, userId }) => {
    const res = await Database.Chats.getChatMessagesByChatId(
        chatId,
        userId,
        'desc',
        MAX_MESSAGES_PER_LOAD
    );
    return res;
});

paginationLoadMessagesFx.use(async ({ chatId, userId }) => {
    const res = await Database.Chats.getChatMessagesByChatId(
        chatId,
        userId,
        'desc',
        MAX_MESSAGES_PER_LOAD,
        true
    );

    return res.messages;
});

subscribeToCurrentChatMessagesFx.use(async ({ chatId }) => {
    unsubscribe?.();

    unsubscribe = await Database.Chats.subscribeToChatMessagesWithChatId(
        chatId,
        (messages) => {
            addMessage(messages[0]);
        }
    );
});
