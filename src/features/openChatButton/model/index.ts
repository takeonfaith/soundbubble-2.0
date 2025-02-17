import { createEvent, createStore, sample } from 'effector';
import { Database } from '../../../database';
import { TChat } from '../../../entities/chat/model/types';
import { $user } from '../../../entities/user/model/user';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { globalNavigate } from '../../../routing/navigation';
import { createChatObject } from '../../../entities/chat/lib/createChatObject';

export const openChatFx = createEffectWithToast<
    { senderId: string; receiverId: string },
    TChat | null
>('', 'Failed to find chat');

export const openChat = createEvent<string>();

export const $userOpening = createStore<string | null>(null);

sample({
    clock: openChat,
    source: $user,
    fn: (user, receiverId) => ({ senderId: user!.uid, receiverId }),
    target: openChatFx,
});

sample({
    clock: openChat,
    fn: (receiverId) => receiverId,
    target: $userOpening,
});

sample({
    clock: openChatFx.doneData,
    fn: () => null,
    target: $userOpening,
});

openChatFx.use(async ({ senderId, receiverId }) => {
    const chat = createChatObject({ participants: [senderId, receiverId] });
    const res = await Database.Chats.createChat(chat);
    return res.data;
});

openChatFx.doneData.watch((chat) => {
    if (chat) {
        const navigate = globalNavigate();
        navigate(`/chats/${chat.id}`);
    }
});
