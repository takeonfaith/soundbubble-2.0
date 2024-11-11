import { createEffect, createEvent, sample } from 'effector';
import { Database } from '../../../database';
import { toastModel } from '../../../layout/toast/model';
import { TIME_IN_MS } from '../../../shared/constants/time';
import { $chats } from './chats';
import { TChat } from './types';

type CreateChatProps = {
    chat: TChat;
    onSuccess: (chat: TChat) => void;
};

export const createChatFx = createEffect<CreateChatProps, TChat, Error>();

export const createChat = createEvent<CreateChatProps>();

sample({
    clock: createChat,
    target: createChatFx,
});

sample({
    clock: createChatFx.doneData,
    source: $chats,
    filter: (chats, newChat) => !chats.find((c) => c.id === newChat.id),
    fn: (chats, newChat) => [newChat, ...chats],
    target: $chats,
});

createChatFx.failData.watch((err) => {
    toastModel.events.add({
        type: 'error',
        reason: err.message,
        message: 'Failed to create chat',
        duration: 10 * TIME_IN_MS.second,
    });
});

createChatFx.doneData.watch(() => {
    toastModel.events.add({
        type: 'success',
        message: 'Chat created successfully',
        duration: 3 * TIME_IN_MS.second,
    });
});

createChatFx.use(async ({ chat, onSuccess }) => {
    const res = await Database.Chats.createChat(chat);
    onSuccess(res);
    return res;
});
