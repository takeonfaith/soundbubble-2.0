import { TIME_IN_MS } from '../../../shared/constants/time';
import { DeleteHistoryPeriod } from './types';

export const MAX_HISTORY_ITEMS_PER_LOAD = 15;

export const PERIOD_TIMES = {
    [DeleteHistoryPeriod.hour]: TIME_IN_MS.hour,
    [DeleteHistoryPeriod.day]: TIME_IN_MS.day,
    [DeleteHistoryPeriod.month]: TIME_IN_MS.month,
    [DeleteHistoryPeriod.all]: Infinity,
};
