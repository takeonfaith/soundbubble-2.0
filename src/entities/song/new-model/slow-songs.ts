import { combine, createApi, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { SLOW_SONGS_FACTOR } from '../../../shared/constants';
import {
    $currentTime,
    currentTimeApi,
    setLastRangeValue,
} from './current-time';
import { $currentSong } from './queue';
import { $songState, loadAndPlay } from './song-state';
import { filterOneArrayWithAnother } from '../../../shared/funcs/filterOneArrayWithAnother';

const $slowSongs = createStore<string[]>([]);

export const slowSongsApi = createApi($slowSongs, {
    add: (store, id: string[]) => {
        return [...store, ...id];
    },
    remove: (store, id: string) => store.filter((s) => s !== id),
    reset: (store, ids?: string[]) => {
        if (ids)
            return filterOneArrayWithAnother(
                store,
                ids,
                (id) => id,
                (s) => s
            );

        return [];
    },
});

export const $isCurrentSongSlow = combine(
    [$currentSong, $slowSongs],
    ([currentSong, slowSongs]) => {
        if (!currentSong) return false;

        return slowSongs.includes(currentSong.id) && !!currentSong.slowSrc;
    }
);

export const $songSrc = combine(
    [$currentSong, $isCurrentSongSlow],
    ([currentSong, isCurrentSongSlow]) => {
        if (!currentSong) return undefined;

        if (isCurrentSongSlow) {
            return currentSong.slowSrc;
        }

        return currentSong.songSrc;
    },
    { skipVoid: false }
);

sample({
    clock: $isCurrentSongSlow,
    target: loadAndPlay,
});

// Recalculate current time based on if song is slow
// so that is when switching between slow and current
// it continues from the same spot
sample({
    clock: [slowSongsApi.add, slowSongsApi.remove, slowSongsApi.reset],
    source: {
        lastTime: $currentTime,
        songState: $songState,
        isCurrentSongSlow: $isCurrentSongSlow,
        currentSong: $currentSong,
    },
    filter: ({ currentSong }, id) => {
        if (!(typeof id === 'string' || Array.isArray(id))) {
            return false;
        }

        return (
            !!currentSong &&
            (typeof id === 'string'
                ? currentSong.id === id
                : id.includes(currentSong.id))
        );
    },
    fn: ({ lastTime, isCurrentSongSlow }) => {
        if (isCurrentSongSlow) {
            return lastTime / SLOW_SONGS_FACTOR;
        }

        return lastTime * SLOW_SONGS_FACTOR;
    },
    target: [setLastRangeValue, currentTimeApi.set],
});

export const useIsSlowVersion = (songId: string | undefined) => {
    const slowSong = useUnit($slowSongs);
    return songId ? slowSong.includes(songId) : false;
};
