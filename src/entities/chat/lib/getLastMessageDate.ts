import { TIME_IN_MS } from '../../../shared/constants/time';
import { TMessage } from '../model/types';

export const getLastMessageDate = (lastMessage: TMessage | undefined) => {
    const timeDiff =
        new Date().getTime() - new Date(lastMessage?.sentTime ?? '').getTime();
    const isBiggerThanDay = timeDiff > TIME_IN_MS.hour * 24;

    const isBiggerThanWeek = timeDiff > TIME_IN_MS.hour * 24 * 7;

    if (!isBiggerThanDay) {
        return new Date(lastMessage?.sentTime ?? '').toLocaleTimeString(
            'ru-RU',
            {
                hour: '2-digit',
                minute: '2-digit',
            }
        );
    }

    if (!isBiggerThanWeek) {
        return new Date(lastMessage?.sentTime ?? '').toLocaleDateString(
            'ru-RU',
            {
                weekday: 'short',
            }
        );
    }

    return new Date(lastMessage?.sentTime ?? '').toLocaleDateString('ru-RU');
};
