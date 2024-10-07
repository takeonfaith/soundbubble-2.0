import getUID from '../../../shared/funcs/getUID';
import { TLoadQueue, TQueue } from '../model/types';

export const createQueueObject = (queue: Partial<TQueue>): TQueue => {
    return {
        songs: [],
        name: 'New Queue',
        id: getUID(),
        url: '',
        imageUrl: '',
        ...queue,
    };
};

export const createLoadQueueObject = (
    queue: Partial<TLoadQueue>
): TLoadQueue => {
    return {
        songIds: [],
        name: 'New Queue',
        id: getUID(),
        url: '',
        imageUrl: '',
        ...queue,
    };
};
