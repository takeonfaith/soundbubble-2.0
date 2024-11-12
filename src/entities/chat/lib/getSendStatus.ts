import { LocalSendStatus, SendStatus, TMessage } from '../model/types';

export const getSendStatus = (
    lastMessage: TMessage | undefined,
    participants: string[]
) => {
    if (lastMessage?.status === SendStatus.pending)
        return LocalSendStatus.pending;

    if (lastMessage?.status === SendStatus.error) return LocalSendStatus.error;

    if (lastMessage) {
        if (
            'unreadBy' in lastMessage &&
            lastMessage.unreadBy.length < participants.length
        ) {
            return LocalSendStatus.sent;
        }

        if (
            lastMessage?.seenBy?.filter((seen) => seen !== lastMessage.sender)
                .length === 0
        ) {
            return LocalSendStatus.sent;
        }
    }

    return LocalSendStatus.received;
};
