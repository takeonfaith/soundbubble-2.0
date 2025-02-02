import { createEvent, sample } from 'effector';
import { Database } from '../../../database';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { $user } from '../../user/model/user';
import { DeleteHistoryPeriod } from './types';
import { $canLoadMore, $history } from './history';
import { PERIOD_TIMES } from './constants';

type DeleteHistoryFxProps = { period: DeleteHistoryPeriod; userId: string };

export const deleteHistoryFx = createEffectWithToast<
    DeleteHistoryFxProps,
    void
>('History successfully deleted', 'Failed to delete history');

export const deleteHistory = createEvent<DeleteHistoryPeriod>();

sample({
    clock: deleteHistory,
    source: $user,
    filter: Boolean,
    fn: (user, period) => ({ userId: user.uid, period }),
    target: deleteHistoryFx,
});

sample({
    clock: deleteHistoryFx.done,
    source: $history,
    fn: (history, { params: { period } }) => {
        return history.filter((h) => {
            const timestamp = Date.now() - PERIOD_TIMES[period];

            return new Date(h.time).getTime() < timestamp;
        });
    },
    target: $history,
});

sample({
    clock: deleteHistoryFx.done,
    filter: ({ params }) => params.period === DeleteHistoryPeriod.all,
    fn: () => false,
    target: $canLoadMore,
});

deleteHistoryFx.use(async ({ period, userId }) => {
    await Database.History.deleteHistory(userId, period);
});
