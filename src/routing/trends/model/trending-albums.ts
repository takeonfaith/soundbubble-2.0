import { Database } from '../../../database';
import { createPagitation } from '../../../shared/effector/pagination';
import {
    TRENDING_ITEMS_QUANTITY,
    TRENDING_ITEMS_PAGINATION_LOAD,
    MAX_TRENDING_ITEMS_QUANTITY,
} from './constants';

export const trendingAlbumsPaginationModel = createPagitation({
    dataPlace: 'end',
    loadMoreButton: false,
    onLoadMore: async (_, quantity) => {
        return await Database.Trends.getTrendingAlbums(quantity);
    },
    initialLoadQuantity: TRENDING_ITEMS_QUANTITY,
    quantity: TRENDING_ITEMS_PAGINATION_LOAD,
    maxElements: MAX_TRENDING_ITEMS_QUANTITY,
});
