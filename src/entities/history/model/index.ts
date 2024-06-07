import { createEffect, createStore, sample } from 'effector';
import { createGate, useGate, useUnit } from 'effector-react';
import { Database } from '../../../database';
import { getDataFromEffect } from '../../../shared/effector/getDataFromEffect';
import { TSong } from '../../song/model/types';
import { $user, logout } from '../../user/model';

const loadListenHistoryFx = createEffect(async (userId: string) => {
    try {
        const history = await Database.History.getHistoryByUserId(userId);
        return history;
    } catch (error) {
        throw new Error((error as Error).message);
    }
});

const historyGate = createGate();

const $listeningHistory = createStore<TSong[]>([]);
$listeningHistory.reset(logout);

const $userId = $user.map((user) => user.data?.uid ?? null);

sample({
    clock: [historyGate.open, $userId],
    source: {
        gateStatus: historyGate.status,
        userId: $userId,
        history: $listeningHistory,
    },
    filter: ({ history, userId, gateStatus }) =>
        gateStatus && userId !== null && history.length === 0,
    fn: ({ userId }) => userId as string,
    target: loadListenHistoryFx,
});

// sample({
//     clock: getHistory,
//     source: {
//         userId: $userId,
//         history: $listeningHistory,
//         historyGateStatus: historyGate.status,
//     },
//     filter: ({ history, userId, historyGateStatus }) =>
//         historyGateStatus && userId !== null && history.length === 0,
//     fn: ({ userId }) => userId as string,
//     target: loadListenHistoryFx,
// });

getDataFromEffect(loadListenHistoryFx, $listeningHistory);

export const historyModel = {
    useHistory: () => useUnit([$listeningHistory, loadListenHistoryFx.pending]),
    useLoadHistory: () => useGate(historyGate),
};
