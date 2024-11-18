import { createApi, createEvent, createStore, sample } from 'effector';
import { Database } from '../../../database';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { $cache } from './cache';
import { TCache, TChat, TUploadChat } from './types';

type EditChatProps = {
    chat: TChat;
    update: TUploadChat;
    onSuccess?: (chat: TChat) => void;
};

export const editChatFx = createEffectWithToast<
    EditChatProps & {
        cache: TCache;
    },
    void
>('Chat edited successfully', 'Failed to edit chat');

export const editChat = createEvent<EditChatProps>();

export const $isEditingMode = createStore(false);

export const { toggleIsEditing } = createApi($isEditingMode, {
    toggleIsEditing: (val) => !val,
});

sample({
    clock: editChat,
    source: $cache,
    fn: (cache, params) => ({ ...params, cache }),
    target: editChatFx,
});

editChatFx.use(async ({ chat, update, cache, onSuccess }) => {
    const res = await Database.Chats.editChat(chat, update, cache);
    onSuccess?.(res);
});
