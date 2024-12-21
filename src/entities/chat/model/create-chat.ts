import { createEvent, sample } from 'effector';
import { Database } from '../../../database';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { $chats } from './chats';
import { TChat } from './types';

type CreateChatProps = {
    chat: TChat;
    onSuccess: (chat: TChat) => void;
};

export const createChatFx = createEffectWithToast<CreateChatProps, TChat>(
    'Chat created successfully',
    'Failed to create chat'
);

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

createChatFx.use(async ({ chat, onSuccess }) => {
    const res = await Database.Chats.createChat(chat);
    onSuccess(res);
    return res;
});
