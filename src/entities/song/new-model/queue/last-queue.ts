import { createEffect, sample } from 'effector';
import { createQueueObject } from '../../lib/createQueueObject';
import { TLastQueue, TSong } from '../../model/types';
import { $queue } from './queue';
import { Database } from '../../../../database';

const loadLastQueueFx = createEffect<
    string,
    { queue: TLastQueue | null; songs: TSong[] } | null
>();

sample({
    clock: loadLastQueueFx.doneData,
    filter: (props) => !!props && !!props.queue,
    fn: (props) => ({
        ...createQueueObject(props!.queue!),
        songs: props!.songs,
    }),
    target: $queue,
});

loadLastQueueFx.use(async (userId) => {
    return await Database.Songs.loadLastQueue(userId);
});
