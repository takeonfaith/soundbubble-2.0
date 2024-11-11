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
    { chatId: string },
    TMessage[],
    Error
>();

export const paginationLoadMessagesFx = createEffect<
    { chatId: string; pagination: number },
    TMessage[],
    Error
>();

const setCurrentChatMessages = createEvent<TMessage[]>();
const prependChatMessages = createEvent<TMessage[]>();
const addMessage = createEvent<TMessage>();

export const $currentChatMessages = createStore<TMessage[]>([]);

const $initialLoad = createStore(true);
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
    fn: ({ chatId }) => {
        return { chatId: chatId! };
    },
    target: [initiallyLoadChatMessagesFx],
});

sample({
    clock: initiallyLoadChatMessagesFx.doneData,
    target: [setCurrentChatMessages],
});

sample({
    clock: initiallyLoadChatMessagesFx.done,
    source: $user,
    filter: (user) => {
        return !!user;
    },
    fn: (user, { params }) => ({ userId: user!.uid, ...params }),
    target: subscribeToCurrentChatMessagesFx,
});

// Loading music, users etc ...
sample({
    clock: initiallyLoadChatMessagesFx.doneData,
    fn: getHeavyMediaIdsFromMessages,
    target: loadHeavyMedia,
});

sample({
    clock: addMessage,
    source: {
        messages: $currentChatMessages,
        initial: $initialLoad,
        user: $user,
    },
    filter: ({ initial, user }, message) => {
        return !initial && user?.uid !== message.sender;
    },
    fn: ({ messages }, message) => {
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
    source: { chatId: $currentChatId, pagination: $pagination },
    filter: ({ chatId }) => !!chatId,
    fn: ({ chatId, pagination }) => ({ pagination, chatId: chatId! }),
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
        console.log('prepending', messages);

        return messages.length === 0;
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

initiallyLoadChatMessagesFx.use(async ({ chatId }) => {
    const res = await Database.Chats.getChatMessagesByChatId(
        chatId,
        'desc',
        MAX_MESSAGES_PER_LOAD
    );
    return res;
});

paginationLoadMessagesFx.use(async ({ chatId }) => {
    const res = await Database.Chats.getChatMessagesByChatId(
        chatId,
        'desc',
        MAX_MESSAGES_PER_LOAD,
        true
    );
    return res;
});

subscribeToCurrentChatMessagesFx.use(async ({ chatId, userId }) => {
    unsubscribe?.();

    unsubscribe = await Database.Chats.subscribeToChatMessagesWithChatId(
        chatId,
        userId,
        (messages) => {
            console.log('messages received', messages[0]);

            addMessage(messages[0]);
        }
    );
});
