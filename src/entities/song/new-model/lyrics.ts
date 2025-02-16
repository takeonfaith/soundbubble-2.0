import {
    createApi,
    createEffect,
    createEvent,
    createStore,
    sample,
} from 'effector';
import { useUnit } from 'effector-react';
import { Database } from '../../../database';
import { toastModel } from '../../../layout/toast/model';
import { TLyric } from '../model/types';
import { $currentSong } from './queue';
import { $currentTime } from './current-time';
import { $isCurrentSongSlow } from './slow-songs';
import { SLOW_SONGS_FACTOR } from '../../../shared/constants';

const loadLyricsFx = createEffect<string, TLyric[], Error>();
export const loadLyrics = createEvent<undefined | string>();
export const calculateCurrentLyric = createEvent<number>();
export const nextCurrentLyric = createEvent<number>();
const calculateCurrentLyrics = createEvent();

const $lyrics = createStore<TLyric[]>([]);
const $currentLyricIndex = createStore(0);
const $shouldCalculateLyrics = createStore(false);
const $isKaraoke = createStore(false);
const $isLyricsVisibleNow = createStore(false);
const $userEnabledKaraoke = createStore(true);

export const userEnabledKaraokeApi = createApi($userEnabledKaraoke, {
    set: (_, val: boolean) => val,
});

export const isLyricsVisibleNowApi = createApi($isLyricsVisibleNow, {
    set: (_, val: boolean) => val,
});

sample({
    clock: $currentSong,
    source: $isLyricsVisibleNow,
    filter: (isLyricsVisibleNow) => isLyricsVisibleNow,
    fn: () => undefined,
    target: loadLyrics,
});

sample({
    clock: $currentSong,
    source: $isLyricsVisibleNow,
    filter: (isLyricsVisibleNow) => isLyricsVisibleNow,
    fn: () => [],
    target: $lyrics,
});

sample({
    clock: loadLyrics,
    source: $currentSong,
    filter: (song, id) => !!id || !!song,
    fn: (song, id) => id ?? song!.id,
    target: loadLyricsFx,
});

sample({
    clock: loadLyricsFx.doneData,
    target: $lyrics,
});

sample({
    clock: $lyrics,
    fn: (lyrics) => {
        return !isNaN(+lyrics[0].startTime);
    },
    target: $isKaraoke,
});

sample({
    clock: [$isKaraoke, $isLyricsVisibleNow, $lyrics],
    source: {
        isKaraoke: $isKaraoke,
        isLyricsVisibleNow: $isLyricsVisibleNow,
        lyrics: $lyrics,
        userEnabledKaraoke: $userEnabledKaraoke,
    },
    fn: ({ lyrics, isKaraoke, isLyricsVisibleNow, userEnabledKaraoke }) =>
        lyrics.length > 0 &&
        isKaraoke &&
        isLyricsVisibleNow &&
        userEnabledKaraoke,
    target: $shouldCalculateLyrics,
});

sample({
    clock: $currentTime,
    target: calculateCurrentLyrics,
});

sample({
    clock: calculateCurrentLyrics,
    source: {
        time: $currentTime,
        lyrics: $lyrics,
        shouldCalculateLyrics: $shouldCalculateLyrics,
        isCurrentSongSlow: $isCurrentSongSlow,
    },
    filter: ({ shouldCalculateLyrics }) => {
        return shouldCalculateLyrics;
    },
    fn: ({ lyrics, time, isCurrentSongSlow }) => {
        const found = lyrics.findIndex((l) => {
            const lTime = isCurrentSongSlow
                ? +l.startTime / SLOW_SONGS_FACTOR
                : +l.startTime;

            return lTime >= time;
        });

        return found - 1;
    },
    target: $currentLyricIndex,
});

loadLyricsFx.failData.watch((err) => {
    toastModel.events.add({
        type: 'error',
        message: 'Failed to load lyrics',
        duration: 5000,
        reason: err.message,
    });
});

loadLyricsFx.use(async (songId) => await Database.Songs.loadLyrics(songId));

export const lyricsModel = {
    events: {
        loadLyrics,
    },
    useLyrics: () =>
        useUnit([
            $lyrics,
            loadLyricsFx.pending,
            $currentLyricIndex,
            $shouldCalculateLyrics,
            $isKaraoke,
            $userEnabledKaraoke,
        ]),
};
