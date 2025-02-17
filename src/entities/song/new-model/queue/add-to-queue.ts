import { createEvent, sample } from 'effector';
import { createQueueObject } from '../../lib/createQueueObject';
import { PlayProps, TSong } from '../../model/types';
import { $currentSongIndex, $queue } from './queue';
import { toastModel } from '../../../../layout/toast/model';

export const addToTheEndOfQueue = createEvent<TSong>();
export const addAfterCurrentSongInQueue = createEvent<TSong>();
const initialize = createEvent<PlayProps>();

sample({
    clock: initialize,
    fn: ({ queue }) => queue,
    target: $queue,
});

sample({
    clock: initialize,
    fn: ({ currentSongIndex }) => currentSongIndex,
    target: $currentSongIndex,
});

sample({
    clock: addToTheEndOfQueue,
    source: { queue: $queue, currentSongIndex: $currentSongIndex },
    fn: ({ queue, currentSongIndex }, song) => {
        const newQueue = queue
            ? { ...queue, songs: [...queue.songs, song] }
            : createQueueObject({ songs: [song] });

        return { queue: newQueue, currentSongIndex };
    },
    target: initialize,
});

sample({
    clock: addAfterCurrentSongInQueue,
    source: { queue: $queue, currentSongIndex: $currentSongIndex },
    fn: ({ queue, currentSongIndex }, song) => {
        const newQueue = queue
            ? {
                  ...queue,
                  songs: [
                      ...queue.songs.slice(0, currentSongIndex + 1),
                      song,
                      ...queue.songs.slice(
                          currentSongIndex + 1,
                          queue.songs.length
                      ),
                  ],
              }
            : createQueueObject({
                  songs: [song],
                  name: song.name,
                  url: `/track/${song.id}`,
                  id: song.id,
                  imageUrl: song.cover,
              });

        return { queue: newQueue, currentSongIndex };
    },
    target: initialize,
});

addAfterCurrentSongInQueue.watch(() => {
    toastModel.events.add({
        type: 'hint',
        message: 'Song added next',
        duration: 5000,
    });
});

addToTheEndOfQueue.watch(() => {
    toastModel.events.add({
        type: 'hint',
        message: 'Song added to the end of queue',
        duration: 5000,
    });
});
