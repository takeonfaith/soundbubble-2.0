import { createEffect } from 'effector';
import { toastModel } from '../../../layout/toast/model';
import { getTime } from '../../../routing/chat/lib/getTime';
import { globalNavigate } from '../../../routing/navigation';
import { TUser } from '../../user/model/types';
import { TCache, TChat } from './types';

type ShowNotificationProps = {
    chat: TChat;
    cache: TCache;
};

export const showNotificationFx = createEffect<
    ShowNotificationProps,
    void,
    Error
>();

showNotificationFx.use(({ chat, cache }) => {
    const { lastMessage } = chat;
    if (lastMessage) {
        const sender = cache[lastMessage.sender] as TUser;
        toastModel.events.add({
            duration: 10000,
            message: lastMessage.message,
            title: sender.displayName,
            time: getTime(new Date(lastMessage.sentTime).toString()),
            type: 'chatMessage',
            onClick: () => {
                const navigate = globalNavigate();
                navigate(`/chat/${chat.id}`);
            },
            photo: sender.photoURL,
        });
    }
});
