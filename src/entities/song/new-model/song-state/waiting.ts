import { combine, createEvent, sample } from 'effector';
import { SongState } from '../../model/types';
import { $songState, load, loadAndPlay } from '../song-state';
import { $currentTime, $loadedPercent } from '../current-time';
import { $currentSongDuration } from '../duration';

export const waiting = createEvent();

const $shouldLoad = combine(
    $loadedPercent,
    $currentTime,
    $currentSongDuration,
    (loaded, currentTime, currentSongDuration) => {
        return loaded < (currentTime / currentSongDuration) * 100;
    }
);

sample({
    clock: waiting,
    source: { state: $songState, shouldLoad: $shouldLoad },
    filter: ({ state, shouldLoad }) =>
        shouldLoad && state === SongState.playing,
    target: loadAndPlay,
});

sample({
    clock: waiting,
    source: { state: $songState, shouldLoad: $shouldLoad },
    filter: ({ state, shouldLoad }) => shouldLoad && state === SongState.pause,
    target: load,
});
