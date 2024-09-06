import { createEvent, createStore, createWatch, sample } from 'effector';
import { useUnit } from 'effector-react';
import { load } from '.';
import { QUEUE_DEFAULT_STORE } from './constants';
import { LoopMode, TQueueStore } from './types';
import { $playback } from './playback';

const handleNext = ({
    queue,
    loop,
}: {
    queue: TQueueStore;
    loop: LoopMode;
}): TQueueStore => {
    const { currentSongIndex, songs } = queue;

    const newIndex = currentSongIndex !== null ? currentSongIndex + 1 : null;

    if (loop === LoopMode.loopone) return queue;

    if (typeof newIndex === 'number' && newIndex > songs.length - 1) {
        if (loop === LoopMode.noloop) return queue;

        if (loop === LoopMode.loopall) return { ...queue, currentSongIndex: 0 };

        return queue;
    }

    return {
        ...queue,
        currentSongIndex: newIndex,
    };
};

const handleChangeLoopMode = (oldLoop: LoopMode) => {
    let loop = LoopMode.noloop;

    if (oldLoop === LoopMode.noloop) loop = LoopMode.loopall;
    if (oldLoop === LoopMode.loopall) loop = LoopMode.loopone;

    return loop;
};

export const next = createEvent();
export const previous = createEvent();
export const changeLoopMode = createEvent();

export const setQueue = createEvent<{
    queue?: TQueueStore;
}>();

const $queue = createStore<TQueueStore>(QUEUE_DEFAULT_STORE);
const $loopMode = createStore<LoopMode>(LoopMode.noloop);

sample({
    clock: setQueue,
    source: $queue,
    fn: (old, { queue }): TQueueStore => queue ?? old,
    target: $queue,
});

sample({
    clock: next,
    source: { queue: $queue, loop: $loopMode },
    fn: handleNext,
    target: $queue,
});

sample({
    clock: next,
    source: $loopMode,
    filter: (loop) => loop === LoopMode.loopone,
    target: previous,
});

sample({
    clock: changeLoopMode,
    source: $loopMode,
    fn: handleChangeLoopMode,
    target: $loopMode,
});

// Отслеживаем очередь, чтобы при изменении текущего трека его загружать
// переписать на семпл
createWatch({
    unit: $queue,
    fn: (queue) => {
        const { currentSongIndex, songs } = queue;

        if (currentSongIndex !== null) {
            const song = songs[currentSongIndex];
            load({ song, queue: undefined });
        }
    },
});

export const useQueue = () => {
    return useUnit({ ...{ queue: $queue }, loop: $loopMode });
};

const $needToPreviousSong = $playback.map(
    ({ currentTime }) => currentTime < 5_000
);

const $needToStartSong = $needToPreviousSong.map((flag) => !flag);

const toPreviousSong = createEvent();
const toStartSong = createEvent();

// #region prev
sample({
    clock: previous,
    source: $needToPreviousSong,
    filter: Boolean,
    target: toPreviousSong,
});

sample({
    clock: previous,
    source: $needToStartSong,
    filter: Boolean,
    target: toStartSong,
});

sample({
    clock: toPreviousSong,
    source: $queue,
    filter: (queue) => !!queue.currentSongIndex,
    fn: (queue) => ({
        ...queue,
        currentSongIndex: queue.currentSongIndex! - 1,
    }),
    target: $queue,
});

sample({
    clock: toStartSong,
    source: $playback,
    filter: Boolean,
    fn: (playback) => ({ ...playback, currentTime: 0 }),
    target: $playback,
});
// #endregion
