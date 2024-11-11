import { TIME_IN_MS } from '../../../shared/constants/time';
import { TMessage } from '../model/types';

export const getLastMessageDate = (lastMessage: TMessage | undefined) => {
    const timeDiff =
        new Date().getTime() - new Date(lastMessage?.sentTime ?? '').getTime();
    const isBiggerThanDay = timeDiff > TIME_IN_MS.hour * 24;

    const isBiggerThanWeek = timeDiff > TIME_IN_MS.hour * 24 * 7;

    const isLastYear =
        new Date(lastMessage?.sentTime ?? '').getFullYear() !==
        new Date().getFullYear();

    if (!isBiggerThanDay) {
        return new Date(lastMessage?.sentTime ?? '').toLocaleTimeString(
            'en-US',
            {
                hour: '2-digit',
                minute: '2-digit',
            }
        );
    }

    if (!isBiggerThanWeek) {
        return new Date(lastMessage?.sentTime ?? '').toLocaleDateString(
            'en-US',
            {
                weekday: 'short',
            }
        );
    }

    if (!isLastYear) {
        return new Date(lastMessage?.sentTime ?? '').toLocaleDateString(
            'en-US',
            {
                day: '2-digit',
                month: 'short',
            }
        );
    }

    return new Date(lastMessage?.sentTime ?? '').toLocaleDateString('en-US');
};
