import getUID from '../../../shared/funcs/getUID';
import { TChat } from '../model/types';

export const createChatObject = (
    participants: string[],
    props: Partial<TChat>
): TChat => ({
    participants,
    id: props.id ?? getUID(),
    typing: [],
    wallpaper: props.wallpaper ?? '',
    chatName: props.chatName ?? '',
    chatImage: props.chatImage ?? '',
    admins: props.admins ?? [],
    lastMessage: props.lastMessage ?? undefined,
    ...props,
});
