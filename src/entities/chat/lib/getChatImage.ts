import { TUser } from '../../user/model/types';
import { TChat, TCache } from '../model/types';

export const getChatImage = (
    chat: TChat,
    cache: TCache,
    currentUser: TUser | null
) => {
    const isGroupChat = chat.chatName !== '';
    const notYou = chat.participants.filter((p) => p !== currentUser?.uid);
    const chatPartner = cache[notYou[0]] as TUser;
    const chatImage = isGroupChat ? chat.chatImage : chatPartner?.photoURL;

    return chatImage;
};
