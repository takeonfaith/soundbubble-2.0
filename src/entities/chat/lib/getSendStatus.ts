import { LocalSendStatus, SendStatus, TMessage } from '../model/types';

export const getSendStatus = (
    lastMessage: TMessage | undefined,
    isMine: boolean,
    maxSeenAtInCurrentChat: number | null,
    myLastReadAt: number | null
): LocalSendStatus => {
    if (lastMessage) {
        if (lastMessage.status === SendStatus.pending)
            return LocalSendStatus.pending;

        if (lastMessage.status === SendStatus.error)
            return LocalSendStatus.error;

        if (isMine) {
            if (lastMessage.sentTime <= (maxSeenAtInCurrentChat ?? 0))
                return LocalSendStatus.received;
        } else {
            if (lastMessage.sentTime <= (myLastReadAt ?? 0)) {
                return LocalSendStatus.received;
            }
        }

        return LocalSendStatus.sent;
    }

    return LocalSendStatus.sent;
};
