import { createEvent, sample } from 'effector';
import { Database } from '../../../database';
import { TChat } from '../../../entities/chat/model/types';
import { $user } from '../../../entities/user/model/user';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { globalNavigate } from '../../../routing/navigation';

export const openChatFx = createEffectWithToast<
    { senderId: string; receiverId: string },
    TChat | null
>('', 'Failed to find chat');

export const openChat = createEvent<string>();

sample({
    clock: openChat,
    source: $user,
    fn: (user, receiverId) => ({ senderId: user!.uid, receiverId }),
    target: openChatFx,
});

openChatFx.use(async ({ senderId, receiverId }) => {
    return await Database.Chats.getChatByUserIds(senderId, receiverId, true);
});

openChatFx.doneData.watch((chat) => {
    if (chat) {
        const navigate = globalNavigate();
        navigate(`/chats/${chat.id}`);
    }
});
