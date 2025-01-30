import { TUser } from '../../user/model/types';
import { TChat } from '../model/types';

export const notOnlyTyping = (
    {
        user,
        currentChat,
        chats,
    }: { chats: TChat[]; currentChat: TChat | undefined; user: TUser | null },
    insertingChats: TChat[]
) => {
    if (insertingChats.length === 0) return false;

    const first = insertingChats[0];

    const chatIndex = chats.findIndex((c) => c.id === first.id);

    return (
        !!user &&
        chats[chatIndex]?.lastMessage?.sender !== user.uid &&
        (!currentChat || first.id !== currentChat.id) &&
        chats[chatIndex]?.lastMessage?.id !== first.lastMessage?.id
    );
};
