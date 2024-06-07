import { TMessage } from '../model/types';

export const getSendStatus = (lastMessage: TMessage | undefined) => {
    if (lastMessage?.status === 'pending') return 'Pending';

    if (lastMessage?.status === 'error') return 'Error';

    if (
        lastMessage &&
        lastMessage?.seenBy?.filter((seen) => seen !== lastMessage.sender)
            .length === 0
    )
        return 'Sent';

    return 'Received';
};
