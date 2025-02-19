import { translate } from '../../../i18n';
import { get2DigitNumber } from '../../../shared/funcs/get2DigitNumber';
import { getPluralForm } from '../../../shared/funcs/getPluralForm';

export const getHumanDuration = (
    duration: number | undefined,
    format?: 'clock' | 'text'
) => {
    if (duration === undefined) return '';

    if (duration < 0) return `${get2DigitNumber(0)}:${get2DigitNumber(0)}`;

    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);

    const hoursText =
        hours > 0
            ? `${hours} ${getPluralForm(hours, {
                  one: translate('hour'),
                  toFour: translate('hours_to_four'),
                  fromFive: translate('hours_from_five'),
              })}`
            : '';
    const minutesText = `${minutes} ${getPluralForm(minutes, {
        one: translate('minute'),
        toFour: translate('minutes_to_four'),
        fromFive: translate('minutes_from_five'),
    })}`;
    const secondsText = `${minutes} ${getPluralForm(minutes, {
        one: translate('second'),
        toFour: translate('seconds_to_four'),
        fromFive: translate('seconds_from_five'),
    })}`;

    if (format === 'text') {
        return `${hoursText} ${minutesText} ${secondsText}`;
    }

    return `${hours > 0 ? `${get2DigitNumber(hours)}:` : ''}${get2DigitNumber(
        minutes
    )}:${get2DigitNumber(seconds)}`;
};
