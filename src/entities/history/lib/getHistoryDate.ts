import { dateToString } from '../../../shared/funcs/dateToString';

export const getHistoryDate = (time = Date.now()) => {
    return dateToString(new Date(time));
};
