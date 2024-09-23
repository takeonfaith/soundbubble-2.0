import { createEffect, createEvent, createStore, sample } from 'effector';
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

const addToHistoryFx = createEffect(
    async ({ userId, song }: { userId: string; song: TSong | null }) => {
        // Срабатывает два раза потому что я гавноед
        // Срабатывает в queue.watch и самом load
        // Надо это все переписать к чертовой бабушке
        if (song) {
            await Database.History.addSongToHistory(userId, song.id);
            return song;
        }
    }
);

export const addToHistory = createEvent<TSong | null>();

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
    filter: ({ history, userId }) => userId !== null && history.length === 0,
    fn: ({ userId }) => userId as string,
    target: loadListenHistoryFx,
});

sample({
    clock: addToHistory,
    source: { userId: $userId, listeningHistory: $listeningHistory },
    filter: ({ userId, listeningHistory }, song) => {
        console.log(listeningHistory);

        return (
            !!song &&
            !!userId &&
            listeningHistory &&
            listeningHistory[0].id !== song.id
        );
    },
    fn: ({ userId }, song) => ({ userId: userId as string, song }),
    target: addToHistoryFx,
});

sample({
    clock: addToHistoryFx.doneData,
    source: $listeningHistory,
    fn: (store, song) => (song ? [song, ...store] : [...store]),
    target: $listeningHistory,
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
    events: {
        addToHistory,
    },
};
