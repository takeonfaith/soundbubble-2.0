import { translate } from '../../../i18n';
import { dateToString } from '../../../shared/funcs/dateToString';

export const getLastUpdated = (lastUpdated: number) => {
    if (!lastUpdated) return null;

    const fiveMinutesAgo = new Date().getTime() - 300_000;
    const fourHoursAgo = new Date().getTime() - 1_800_000 * 4;
    const justUpdated = lastUpdated > fiveMinutesAgo;

    if (justUpdated) return translate('now');

    const lastUpdateDate = new Date(lastUpdated);
    const lastUpdate = new Date(
        new Date().getTime() - lastUpdateDate.getTime()
    ).getMinutes();
    const lastSeenWord =
        Math.floor(lastUpdate / 60) > 0
            ? Math.floor(lastUpdate / 60) === 1
                ? 'hour'
                : 'hours'
            : 'minutes';

    if (lastUpdated > fourHoursAgo) return `${lastUpdate} ${lastSeenWord} ago`;

    return dateToString(lastUpdateDate);
};
