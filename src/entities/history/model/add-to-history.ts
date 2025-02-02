import { createEffect, createEvent, sample } from 'effector';
import { Database } from '../../../database';
import { SongState, TSong } from '../../song/model/types';
import { $currentSong } from '../../song/new-model/queue';
import { $songState } from '../../song/new-model/song-state';
import { $user } from '../../user/model/user';
import { $history, $isInitiallyLoaded } from './history';

const addSongToHistoryFx = createEffect<
    { userId: string; song: TSong },
    TSong
>();

export const addSongToHistory = createEvent<TSong>();

sample({
    clock: $currentSong,
    source: { state: $songState, currentSong: $currentSong },
    filter: ({ state, currentSong }) => {
        console.log(state, SongState.loadingThenPlay, !!currentSong);

        return state === SongState.loadingThenPlay && !!currentSong;
    },
    fn: ({ currentSong }) => currentSong!,
    target: addSongToHistory,
});

// Will add history locally only when page is already loaded
// because otherwise it is unnecessary cause
// last songs will be requested either way
sample({
    clock: addSongToHistory,
    source: { history: $history, isInitiallyLoaded: $isInitiallyLoaded },
    filter: ({ isInitiallyLoaded }) => isInitiallyLoaded,
    fn: ({ history }, song) => [{ time: Date.now(), song }, ...history],
    target: $history,
});

sample({
    clock: addSongToHistory,
    source: $user,
    filter: Boolean,
    fn: (user, song) => {
        console.log('I need to add song to history');

        return { userId: user.uid, song };
    },
    target: addSongToHistoryFx,
});

addSongToHistoryFx.use(async ({ userId, song }) => {
    await Database.History.addSongToHistory(userId, song.id);
    return song;
});
