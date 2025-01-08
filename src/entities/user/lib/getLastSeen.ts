export const getLastSeen = (
    online: number | undefined,
    onlineStatusStr = 'online'
) => {
    if (!online) return { status: 'offline' };

    const fiveMinutesAgo = new Date().getTime() - 300_000;
    const fourHoursAgo = new Date().getTime() - 1_800_000 * 4;

    console.log(online, fiveMinutesAgo);

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

    if (online > fourHoursAgo)
        return { status: `last seen ${lastOnline} ${lastSeenWord} ago` };

    return {
        status: `last seen ${lastOnlineDate.toLocaleDateString('ru-RU')}`,
    };
};
