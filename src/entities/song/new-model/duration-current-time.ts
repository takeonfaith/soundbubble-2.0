import { createEvent, sample } from 'effector';
import { $lastTime } from './current-time';
import { $currentSongDuration } from './duration';

export const setPercent = createEvent<number>();

sample({
    clock: setPercent,
    source: $currentSongDuration,
    fn: (time, percent) => time * percent,
    target: $lastTime,
});
