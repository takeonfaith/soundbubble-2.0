import { TUser } from '../../user/model/types';
import { TChatData, TMessage } from '../model/types';

export const SYSTEM_MESSAGE_SENDER = 'soundbubble';

export const getLastMessageSender = (
    lastMessage: TMessage | undefined,
    isGroupChat: boolean,
    chatData: TChatData,
    currentUser: TUser | null
) => {
    if (!lastMessage)
        return {
            sender: '',
        };

    if (lastMessage?.sender === SYSTEM_MESSAGE_SENDER)
        return {
            sender: '',
        };

    const sender = chatData[lastMessage?.sender ?? ''] as TUser;
    const s =
        sender?.uid === currentUser?.uid
            ? 'You'
            : isGroupChat
            ? sender?.displayName
            : '';

    return {
        sender: s,
    };
};
