import { StoreWritable, EventCallable, Effect } from 'effector';
import { TUser } from '../../../entities/user/model/types';

export type TPaginationProps<T extends object> = {
    defaultPage?: number;
    quantity: number;
    dataPlace: 'start' | 'end';
    initialLoadQuantity?: number;
    onLoadMore: (
        page: number,
        quantity: number,
        user: TUser | null
    ) => Promise<T[] | undefined>;
    loadMoreButton?: boolean;
    maxElements?: number;
};

export type LoadMoreFxProps = {
    page: number;
    quantity: number;
    isInitialLoad: boolean;
    user: TUser | null;
};

export type LoadMoreFxResult<T extends object> = {
    data: T[] | undefined;
    isInitialLoad: boolean;
};

export type TPaginationModel<T extends object> = {
    usePagination: () => {
        loadMore: () => void;
        initialLoad: () => void;
        canLoadMore: boolean;
        isLoading: boolean;
        loadMoreButton?: boolean;
        data: T[];
        isInitiallyLoaded: boolean;
        isInitiallyLoading: boolean;
    };
    $data: StoreWritable<T[]>;
    $canLoadMore: StoreWritable<boolean>;
    $isInitiallyLoaded: StoreWritable<boolean>;
    loadMore: EventCallable<void>;
    loadMoreFx: Effect<LoadMoreFxProps, LoadMoreFxResult<T>, Error>;
};
