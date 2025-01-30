import { createApi, createEvent, createStore, sample } from 'effector';
import { Database } from '../../../database';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { $cache } from './cache';
import { TCache, TChat, TUploadChat } from './types';
import { $user } from '../../user/model/user';
import { $chats } from './chats';

type EditChatProps = {
    chat: TChat;
    update: TUploadChat;
    onSuccess?: (chat: TChat) => void;
};

export const editChatFx = createEffectWithToast<
    EditChatProps & {
        cache: TCache;
    },
    { update: TUploadChat; chat: TChat }
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

// If you left the chat - remove it from the list
sample({
    clock: editChatFx.doneData,
    source: { user: $user, chats: $chats },
    filter: ({ user }, { update }) =>
        !!user &&
        'participants' in update &&
        !update?.participants?.includes(user.uid),
    fn: ({ chats }, { chat }) => chats.filter((c) => c.id !== chat.id),
    target: $chats,
});

editChatFx.use(async ({ chat, update, cache, onSuccess }) => {
    const res = await Database.Chats.editChat(chat, update, cache);
    onSuccess?.(res);
    return { chat, update };
});
