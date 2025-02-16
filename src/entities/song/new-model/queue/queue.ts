import { combine, createApi, createEvent, createStore, sample } from 'effector';
import { TQueue } from '../../model/types';

export const $queue = createStore<TQueue | null>(null);
export const $currentSongIndex = createStore<number>(0);
export const $isLastSongInQueue = combine(
    $queue,
    $currentSongIndex,
    (queue, currentSongIndex) => {
        if (!queue?.songs.length) return false;

        return queue.songs.length - 1 === currentSongIndex;
    },
    { skipVoid: false }
);
export const $isOnlySongInQueue = $queue.map(
    (queue) => queue?.songs.length === 1
);
export const $currentSong = combine(
    $queue,
    $currentSongIndex,
    (queue, currentSongIndex) => queue?.songs[currentSongIndex],
    { skipVoid: false }
);

export const pToEnd = createEvent();
export const queueApi = createApi($currentSongIndex, {
    // primitives
    pNext: (index) => index + 1,
    pPrevious: (index) => index - 1,
    pToStart: () => 0,
});

sample({
    clock: pToEnd,
    source: $queue,
    filter: (queue) => !!queue && queue.songs.length > 0,
    fn: (queue) => queue!.songs.length - 1,
    target: $currentSongIndex,
});
