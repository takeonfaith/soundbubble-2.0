import getUID from '../../../shared/funcs/getUID';
import { TChat } from '../model/types';
import { createMessageObject } from './createMessageObject';
import { SYSTEM_MESSAGE_SENDER } from './getLastMessageSender';

export const createChatObject = (
    participants: string[],
    props: Partial<TChat>
): TChat => {
    const isGroup = props.chatName?.length !== 0;
    const lastMessage =
        props.lastMessage ??
        (isGroup
            ? createMessageObject(SYSTEM_MESSAGE_SENDER, {
                  message: `Group ${props.chatName} was created`,
              })
            : undefined);

    const admins = props.admins ?? isGroup ? [participants[0]] : [];

    return {
        participants,
        id: props.id ?? getUID(),
        typing: [],
        wallpaper: props.wallpaper ?? '',
        chatName: props.chatName ?? '',
        chatImage: props.chatImage ?? '',
        admins,
        lastMessage,
        ...props,
    };
};
