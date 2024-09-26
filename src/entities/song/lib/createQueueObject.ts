import getUID from '../../../shared/funcs/getUID';
import { TQueue } from '../model/types';

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
