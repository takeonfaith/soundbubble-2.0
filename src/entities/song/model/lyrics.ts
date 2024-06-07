import { createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { LYRICS_DEFAULT_STORE } from './constants';
import { TLyric, TLyricsStore } from './types';

const handleCalculateLyric = (
    { lyrics: store }: { lyrics: TLyricsStore },
    currentTime: number
): TLyricsStore => {
    console.log(store, currentTime);

    const { lyrics } = store;

    const found = lyrics.findIndex((_, index, arr) => {
        return (arr[index + 1]?.startTime ?? -Infinity) > currentTime;
    });

    if (found === store.currentLyricIndex) return store;

    return { ...store, currentLyricIndex: found };
};

const handleNextCurrentLyric = (
    { lyrics: store }: { lyrics: TLyricsStore },
    currentTime: number
) => {
    console.log('test', store, currentTime);

    const { lyrics, currentLyricIndex } = store;

    if (!lyrics.length || isNaN(lyrics[0].startTime)) return store;

    if (lyrics[currentLyricIndex + 1].startTime < currentTime) {
        return { ...store, currentLyricIndex: currentLyricIndex + 1 };
    }

    return store;
};

export const calculateCurrentLyric = createEvent<number>();
export const nextCurrentLyric = createEvent<number>();
export const setLyrics = createEvent<TLyric[]>();
export const setCurrentLyricIndex = createEvent<number>();
export const setShouldCalculateLyrics = createEvent<boolean>();

const $lyrics = createStore<TLyricsStore>(LYRICS_DEFAULT_STORE);
const $shouldCalculateLyrics = createStore(false);

sample({
    clock: calculateCurrentLyric,
    source: { shouldCalculateLyrics: $shouldCalculateLyrics, lyrics: $lyrics },
    filter: ({ shouldCalculateLyrics }) => shouldCalculateLyrics,
    fn: handleCalculateLyric,
    target: $lyrics,
});

sample({
    clock: nextCurrentLyric,
    source: { shouldCalculateLyrics: $shouldCalculateLyrics, lyrics: $lyrics },
    filter: ({ shouldCalculateLyrics }) => shouldCalculateLyrics,
    fn: handleNextCurrentLyric,
    target: $lyrics,
});

sample({
    clock: setLyrics,
    source: $lyrics,
    fn: (store, lyrics) => ({ ...store, lyrics }),
    target: $lyrics,
});

sample({
    clock: setCurrentLyricIndex,
    source: $lyrics,
    fn: (store, currentLyricIndex) => ({ ...store, currentLyricIndex }),
    target: $lyrics,
});

sample({
    clock: setShouldCalculateLyrics,
    fn: (should) => should,
    target: $shouldCalculateLyrics,
});

export const useLyrics = () => {
    return useUnit([$lyrics, $shouldCalculateLyrics]);
};
