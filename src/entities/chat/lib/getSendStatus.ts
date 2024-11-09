import { LocalSendStatus, SendStatus, TMessage } from '../model/types';

export const getSendStatus = (lastMessage: TMessage | undefined) => {
    if (lastMessage?.status === SendStatus.pending)
        return LocalSendStatus.pending;

    if (lastMessage?.status === SendStatus.error) return LocalSendStatus.error;

    if (
        lastMessage &&
        lastMessage?.seenBy?.filter((seen) => seen !== lastMessage.sender)
            .length === 0
    )
        return LocalSendStatus.sent;

    return LocalSendStatus.received;
};
