import { TIME_IN_MS } from '../../../shared/constants/time';

export const getLastSeen = (
    online: number | undefined,
    onlineStatusStr = 'online'
) => {
    if (!online) return { status: 'offline' };

    const fiveMinutesAgo = new Date().getTime() - TIME_IN_MS.minute * 5;
    const tooLongAgo = new Date().getTime() - TIME_IN_MS.hour * 12;

    const isOnline = online > fiveMinutesAgo;

    if (isOnline) return { status: onlineStatusStr };

    const lastOnlineDate = new Date(online);
    const lastOnline = new Date(
        new Date().getTime() - lastOnlineDate.getTime()
    ).getMinutes();
    const lastSeenWord =
        Math.floor(lastOnline / 60) > 0
            ? Math.floor(lastOnline / 60) === 1
                ? 'hour'
                : 'hours'
            : 'minutes';

    if (online > tooLongAgo)
        return { status: `last seen ${lastOnline} ${lastSeenWord} ago` };

    return {
        status: `last seen ${lastOnlineDate.toLocaleDateString('ru-RU')}`,
    };
};
