import { createEffect, createEvent, sample } from 'effector';
import { Database } from '../../../database';
import { $chats } from './chats';
import { TChat } from './types';
import { toastModel } from '../../../layout/toast/model';

type CreateChatProps = {
    chat: TChat;
    onSuccess: (chat: TChat) => void;
};

export const createChatFx = createEffect<
    CreateChatProps,
    { data: TChat; isCreated: boolean }
>();

export const createChat = createEvent<CreateChatProps>();

sample({
    clock: createChat,
    target: createChatFx,
});

sample({
    clock: createChatFx.doneData,
    source: $chats,
    filter: (chats, { data: newChat }) =>
        !chats.find((c) => c.id === newChat.id),
    fn: (chats, { data: newChat }) => [newChat, ...chats],
    target: $chats,
});

createChatFx.use(async ({ chat, onSuccess }) => {
    const { data, isCreated } = await Database.Chats.createChat(chat);
    onSuccess(data);
    return { data, isCreated };
});

createChatFx.failData.watch((err) => {
    toastModel.events.add({
        type: 'error',
        message: 'Failed to create chat',
        reason: err.message,
        duration: 5000,
    });
});

createChatFx.doneData.watch(({ isCreated }) => {
    if (isCreated) {
        toastModel.events.add({
            type: 'success',
            message: 'Chat created successfully',
            duration: 5000,
        });
    }
});
