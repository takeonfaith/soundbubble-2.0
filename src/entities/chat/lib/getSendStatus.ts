import { LocalSendStatus, SendStatus, TMessage } from '../model/types';

export const getSendStatus = (
    lastMessage: TMessage | undefined
): LocalSendStatus => {
    if (lastMessage) {
        if (lastMessage.status === SendStatus.pending)
            return LocalSendStatus.pending;

        if (lastMessage.status === SendStatus.error)
            return LocalSendStatus.error;

        if ('unreadBy' in lastMessage) {
            return lastMessage.isRead
                ? LocalSendStatus.received
                : LocalSendStatus.sent;
        } else return LocalSendStatus.received;
    }

    return LocalSendStatus.sent;
};
