import { get2DigitNumber } from '../../../shared/funcs/get2DigitNumber';

export const getHumanDuration = (
    duration: number | undefined,
    format?: 'clock' | 'text'
) => {
    if (duration === undefined) return '';

    if (duration < 0) return `${get2DigitNumber(0)}:${get2DigitNumber(0)}`;

    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);

    if (format === 'text') {
        return `${
            hours > 0 ? `${hours} ${hours === 1 ? 'hour' : 'hours'}` : ''
        } ${minutes > 0 ? `${minutes} min.` : ''} ${seconds} sec.`;
    }

    return `${hours > 0 ? `${get2DigitNumber(hours)}:` : ''}${get2DigitNumber(
        minutes
    )}:${get2DigitNumber(seconds)}`;
};
