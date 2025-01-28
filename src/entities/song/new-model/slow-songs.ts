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

const $slowSongs = createStore<string[]>([]);

export const $isCurrentSongSlow = combine(
    [$currentSong, $slowSongs],
    ([currentSong, slowSongs]) => {
        if (!currentSong) return false;

        return slowSongs.includes(currentSong.id);
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
    }
);

sample({
    clock: $isCurrentSongSlow,
    target: loadAndPlay,
});

sample({
    clock: [$isCurrentSongSlow],
    source: {
        lastTime: $currentTime,
        songState: $songState,
        isCurrentSongSlow: $isCurrentSongSlow,
    },
    fn: ({ lastTime, isCurrentSongSlow }) => {
        if (isCurrentSongSlow) {
            return lastTime / SLOW_SONGS_FACTOR;
        }

        return lastTime * SLOW_SONGS_FACTOR;
    },
    target: [setLastRangeValue, currentTimeApi.set],
});

export const slowSongsApi = createApi($slowSongs, {
    add: (store, id: string[]) => [...store, ...id],
    remove: (store, id: string) => store.filter((s) => s !== id),
    reset: () => [],
});

export const useIsSlowVersion = (songId: string | undefined) => {
    const slowSong = useUnit($slowSongs);
    return songId ? slowSong.includes(songId) : false;
};
