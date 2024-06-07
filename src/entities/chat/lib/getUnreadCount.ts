import { TUser } from '../../user/model/types';
import { TMessage } from '../model/types';

export const getUnreadCount = (
    messages: TMessage[],
    currentUser: TUser | null
) => {
    if (!currentUser) return 0;

    return messages.reduce((acc, message) => {
        if (!message.seenBy?.includes(currentUser.uid)) {
            acc += 1;
        }
        return acc;
    }, 0);
};
