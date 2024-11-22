import { createEffect, createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { Database } from '../../../database';
import { toastModel } from '../../../layout/toast/model';
import { TLyric } from '../model/types';
import { $currentSong } from './queue';

const loadLyricsFx = createEffect<string, TLyric[], Error>();
const loadLyrics = createEvent();

const $lyrics = createStore<TLyric[]>([]);
const $currentLyricIndex = createStore(0);
const $shouldCalculateLyrics = createStore(0);

sample({
    clock: loadLyrics,
    source: $currentSong,
    filter: (song) => !!song,
    fn: (song) => song!.id,
    target: loadLyricsFx,
});

sample({
    clock: loadLyricsFx.doneData,
    target: $lyrics,
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
            $currentLyricIndex,
            $shouldCalculateLyrics,
            loadLyricsFx.pending,
        ]),
};
