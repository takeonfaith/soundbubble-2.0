import getUID from '../../../shared/funcs/getUID';
import { TChat } from '../model/types';
import { createMessageObject } from './createMessageObject';
import { SYSTEM_MESSAGE_SENDER } from './getLastMessageSender';

export const createChatObject = (
    props: Partial<TChat> & {
        participants: string[];
    }
): TChat => {
    const isGroup = props.chatName && props.chatName?.length !== 0;
    const { participants } = props;
    const lastMessage =
        props.lastMessage ??
        (isGroup
            ? createMessageObject({
                  id: getUID(),
                  sender: SYSTEM_MESSAGE_SENDER,
                  participants,
                  message: `Group ${props.chatName} was created`,
              })
            : null);

    const admins = props.admins ?? isGroup ? [participants[0]] : [];

    return {
        id: props.id ?? getUID(),
        typing: [],
        wallpaper: props.wallpaper ?? '',
        chatName: props.chatName ?? '',
        chatImage: props.chatImage ?? '',
        admins,
        lastMessage,
        updateTime: Date.now(),
        ...props,
    };
};
