import { combine } from 'effector';
import { SLOW_SONGS_FACTOR } from '../../../shared/constants';
import { $currentSong } from './queue';
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
