import { combine, sample } from 'effector';
import { SLOW_SONGS_FACTOR } from '../../../shared/constants';
import { $currentSong, $loopSegment, resetLoopSegment } from './queue';
import { $isCurrentSongSlow } from './slow-songs';

export const $currentSongDuration = combine(
    [$currentSong, $isCurrentSongSlow],
    ([currentSong, isCurrentSongSlow]) => {
        if (!currentSong) return 0;

        if (isCurrentSongSlow) {
            return currentSong.duration / SLOW_SONGS_FACTOR;
        }

        return currentSong.duration;
    }
);

sample({
    clock: $isCurrentSongSlow,
    source: $loopSegment,
    filter: Boolean,
    fn: (loopSegment, isCurrentSongSlow) => {
        const [start, end] = loopSegment!;
        if (isCurrentSongSlow) {
            return [start / SLOW_SONGS_FACTOR, end / SLOW_SONGS_FACTOR] as [
                number,
                number
            ];
        }

        return [start * SLOW_SONGS_FACTOR, end * SLOW_SONGS_FACTOR] as [
            number,
            number
        ];
    },
    target: $loopSegment,
});

sample({
    clock: [resetLoopSegment],
    source: $currentSongDuration,
    fn: (currentSongDuration) => {
        return [0, currentSongDuration] as [number, number];
    },
    target: $loopSegment,
});
