import { sample } from 'effector';
import { Database } from '../../../database';
import { createPagitation } from '../../../shared/effector/pagination';
import { TSong } from '../../song/model/types';
import { $currentSong, $queue } from '../../song/new-model/queue';
import { MAX_HISTORY_ITEMS_PER_LOAD } from './constants';

export const historyPaginationModel = createPagitation({
    dataPlace: 'end',
    quantity: MAX_HISTORY_ITEMS_PER_LOAD,
    loadMoreButton: false,
    onLoadMore: async (_, __, user) => {
        if (user) {
            const res = await Database.History.getHistoryByUserId(user.uid);
            return res;
        }

        return undefined;
    },
});

export const {
    $data: $history,
    loadMore,
    loadMoreFx,
    $canLoadMore,
    $isInitiallyLoaded,
} = historyPaginationModel;

// If last song of the queue ended,
// load next page
sample({
    clock: $currentSong,
    source: { currentSong: $currentSong, queue: $queue },
    filter: ({ currentSong, queue }) => {
        return (
            !!queue &&
            !!currentSong &&
            currentSong.id === queue.songs[queue.songs.length - 1].id
        );
    },
    target: loadMore,
});

sample({
    clock: loadMoreFx.doneData,
    source: { queue: $queue },
    filter: ({ queue }, { data }) => {
        return !!data && !!queue && queue.url === '/history';
    },
    fn: ({ queue }, { data }) => {
        const newSongs = data!
            .filter((s) => s !== null)
            .map(({ song }) => {
                return song;
            }) as TSong[];

        return { ...queue!, songs: [...(queue?.songs ?? []), ...newSongs] };
    },
    target: $queue,
});
