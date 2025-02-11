import { createEvent, sample } from 'effector';
import { TQueue } from '../../model/types';
import { $queue } from './queue';

export const addToQueue = createEvent<TQueue>();

sample({
    clock: addToQueue,
    source: $queue,
    fn: (queue, newQueue) => {
        const finalQueue = queue ?? newQueue;
        return {
            ...finalQueue,
            songs: [...(queue?.songs ?? []), ...newQueue.songs],
        } as TQueue;
    },
    target: $queue,
});
