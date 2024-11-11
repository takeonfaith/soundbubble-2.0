import { getLastSeen } from '../../user/lib/getLastSeen';
import { TUser } from '../../user/model/types';
import { TChat, TCache } from '../model/types';

export const useChatInfo = (
    chat: TChat | undefined,
    cache: TCache,
    currentUser: TUser | null
) => {
    const notYou =
        chat?.participants.filter((p) => p !== currentUser?.uid) ?? [];
    const statuses =
        notYou.map((u) => getLastSeen((cache[u] as TUser)?.online).status) ??
        [];
    const typing =
        chat?.typing
            .filter((u) => u !== currentUser?.uid)
            .map((id) => cache[id] as TUser) ?? [];
    const chatPartner = cache[notYou[0]] as TUser;
    const isGroupChat = chat?.chatName !== '';
    const chatImage = isGroupChat ? chat?.chatImage : chatPartner?.photoURL;
    const chatTitle = isGroupChat
        ? chat?.chatName ?? ''
        : chatPartner?.displayName ?? 'Unknown';
    const membersOnline = statuses.filter((el) => el === 'online').length;

    return {
        chatTitle,
        chatImage,
        isGroupChat,
        chatPartner,
        notYou,
        typing,
        membersOnline,
        statuses,
    };
};
