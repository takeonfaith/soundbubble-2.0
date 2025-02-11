import { createEffect, createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { throttle } from 'patronum';
import { DEFAULT_STORE } from './constants';
import { useControls } from './controls';
import { close, open, useFullScreen } from './fullscreen';
import {
    calculateCurrentLyric,
    nextCurrentLyric,
    setLyrics,
    setShouldCalculateLyrics,
    useLyrics,
} from './lyrics';
import {
    setCurrentTime,
    setDuration,
    setIsSliding,
    setLastRangeValue,
    usePlayback,
} from './playback';
import { changeLoopMode, next, previous, setQueue, useQueue } from './queue';
import { SongState, TQueueStore, TSong, TStore } from './types';

const addListeningFx = createEffect<TSong, Promise<void>>();

export const play = createEvent();
export const pause = createEvent();
export const load = createEvent<{
    song: TSong | null;
    queue: TQueueStore | undefined;
}>();
const loaded = createEvent();
const addListening = createEvent<TSong>();

// const $currentSongStore = createStore(null);

export const $songStore = createStore<TStore>(DEFAULT_STORE);
const $currentSongDuration = $songStore.map(
    (song) => ((song.currentSong?.duration ?? 0) / 4) * 1000
);

// TODO: Заменить на play
const { unsubscribe } = throttle(load, $currentSongDuration).watch(
    ({ song }) => {
        console.log('listening added');
        if (song) {
            addListening(song);
        }
    }
);

sample({
    clock: play,
    source: $songStore,
    fn: (old): TStore => ({ ...old, state: SongState.playing }),
    target: $songStore,
});

sample({
    clock: pause,
    source: $songStore,
    fn: (old): TStore => {
        unsubscribe();
        return { ...old, state: SongState.pause };
    },
    target: $songStore,
});

sample({
    clock: loaded,
    source: $songStore,
    fn: (old): TStore => ({
        ...old,
        loaded: true,
    }),
    target: [$songStore, play],
});

sample({
    clock: load,
    target: [setQueue],
});

sample({
    clock: addListening,
    fn: (songId) => songId,
    target: addListeningFx,
});

sample({
    clock: load,
    source: $songStore,
    fn: (old, { song }): TStore => ({
        ...old,
        state: SongState.loading,
        loaded: false,
        currentSong: song,
    }),
    target: $songStore,
});

export const songModel = {
    useSong: () => {
        return useUnit($songStore);
    },
    useControls,
    queue: {
        useQueue,
        next,
        previous,
        changeLoopMode,
    },
    playblack: {
        usePlayback,
        setCurrentTime,
        setDuration,
        setLastRangeValue,
        setIsSliding,
    },
    fullscreen: {
        useFullScreen,
        open,
        close,
    },
    lyrics: {
        useLyrics,
        calculateCurrentLyric,
        nextCurrentLyric,
        setLyrics,
        setShouldCalculateLyrics,
    },
    events: {
        loaded,
        play,
        pause,
    },
};
