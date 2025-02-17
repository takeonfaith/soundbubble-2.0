import { createEvent, sample } from 'effector';
import { shuffleArray } from '../../lib/shuffleArray';
import { PlayProps } from '../../model/types';
import { $queue, $currentSongIndex } from './queue';
import { $shuffleMode, $queueCorrectSongs } from './shuffle';

export const initialize = createEvent<PlayProps>();

sample({
    clock: initialize,
    source: $shuffleMode,
    filter: (shuffleMode) => shuffleMode,
    fn: (_, { queue }) => queue.songs,
    target: $queueCorrectSongs,
});

sample({
    clock: initialize,
    source: $shuffleMode,
    fn: (shuffleMode, { queue, currentSongIndex }) => {
        const currentSong = queue.songs[currentSongIndex];
        console.log(queue.songs, currentSongIndex);

        const songs = shuffleMode
            ? currentSongIndex === 0
                ? shuffleArray(queue.songs)
                : [
                      currentSong!,
                      ...shuffleArray(queue!.songs).filter(
                          (s) => s.id !== currentSong!.id
                      ),
                  ]
            : queue.songs;

        return { ...queue, songs };
    },
    target: $queue,
});

sample({
    clock: initialize,
    source: $shuffleMode,
    fn: (shuffleMode, { currentSongIndex }) =>
        shuffleMode ? 0 : currentSongIndex,
    target: $currentSongIndex,
});
