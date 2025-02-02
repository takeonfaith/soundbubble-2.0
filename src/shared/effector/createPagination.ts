import {
    createEffect,
    createEvent,
    createStore,
    Effect,
    EventCallable,
    sample,
    StoreWritable,
} from 'effector';
import { useUnit } from 'effector-react';
import { TUser } from '../../entities/user/model/types';
import { $user, logout } from '../../entities/user/model/user';
import {
    QueryDocumentSnapshot,
    DocumentData,
    QueryConstraint,
    QuerySnapshot,
    startAfter,
} from 'firebase/firestore';

type TPaginationProps<T extends object> = {
    defaultPage?: number;
    quantity: number;
    dataPlace: 'start' | 'end';
    initialLoadQuantity?: number;
    onLoadMore: (
        page: number,
        quantity: number,
        user: TUser
    ) => Promise<T[] | undefined>;
    loadMoreButton?: boolean;
    maxElements?: number;
};

type LoadMoreFxProps = {
    page: number;
    quantity: number;
    isInitialLoad: boolean;
    user: TUser;
};

type LoadMoreFxResult<T extends object> = {
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
    };
    $data: StoreWritable<T[]>;
    $canLoadMore: StoreWritable<boolean>;
    $isInitiallyLoaded: StoreWritable<boolean>;
    loadMore: EventCallable<void>;
    loadMoreFx: Effect<LoadMoreFxProps, LoadMoreFxResult<T>, Error>;
};

export class Pagination {
    lastVisible: QueryDocumentSnapshot<DocumentData, DocumentData> | null =
        null;
    constraints: QueryConstraint[] = [];

    constructor() {}

    saveLastVisible(docs: QuerySnapshot<DocumentData, DocumentData>) {
        this.lastVisible = docs.docs[docs.docs.length - 1];
    }

    initialize() {
        if (this.lastVisible) {
            this.constraints.push(startAfter(this.lastVisible));
        }
    }
}

export const createPagitation = <T extends object>({
    quantity,
    defaultPage = 0,
    dataPlace,
    onLoadMore,
    initialLoadQuantity = quantity,
    maxElements = Infinity,
    loadMoreButton = false,
}: TPaginationProps<T>): TPaginationModel<T> => {
    const $currentPage = createStore(defaultPage);

    const loadMoreFx = createEffect<LoadMoreFxProps, LoadMoreFxResult<T>>();

    // Load more data when the user reaches the bottom of the list
    const loadMore = createEvent();
    const initialLoad = createEvent();

    const $canLoadMore = createStore(true).reset(logout);
    const $isInitiallyLoaded = createStore(false).reset(logout);
    const $data = createStore<T[]>([]).reset(logout);

    sample({
        clock: loadMoreFx.doneData,
        filter: ({ isInitialLoad }) => isInitialLoad,
        fn: () => true,
        target: $isInitiallyLoaded,
    });

    sample({
        clock: initialLoad,
        source: {
            user: $user,
            isInitiallyLoaded: $isInitiallyLoaded,
            isLoading: loadMoreFx.pending,
        },
        filter: ({ isInitiallyLoaded, user, isLoading }) => {
            return !isInitiallyLoaded && !!user && !isLoading;
        },
        fn: ({ user }) => ({
            page: 0,
            quantity: initialLoadQuantity,
            user: user!,
            isInitialLoad: true,
        }),
        target: loadMoreFx,
    });

    sample({
        clock: loadMore,
        source: {
            page: $currentPage,
            canLoadMore: $canLoadMore,
            isLoading: loadMoreFx.pending,
            isInitiallyLoaded: $isInitiallyLoaded,
            user: $user,
        },
        filter: ({ canLoadMore, isLoading, isInitiallyLoaded, user }) =>
            canLoadMore && !isLoading && isInitiallyLoaded && !!user,
        fn: ({ page, user }) => ({
            page,
            user: user!,
            quantity,
            isInitialLoad: false,
        }),
        target: loadMoreFx,
    });

    sample({
        clock: loadMoreFx.doneData,
        source: $data,
        filter: (_, { data }) => !!data && data.length > 0,
        fn: (list, { data }) => {
            if (dataPlace === 'end') {
                return [...list, ...data!];
            }

            return [...data!, ...list];
        },
        target: $data,
    });

    sample({
        clock: loadMoreFx.doneData,
        source: $currentPage,
        fn: (currentPage) => currentPage + 1,
        target: $currentPage,
    });

    sample({
        clock: $isInitiallyLoaded,
        source: $data,
        filter: (list, initiallyLoaded) => {
            return initiallyLoaded && list.length >= maxElements;
        },
        fn: () => false,
        target: $canLoadMore,
    });

    // Can't load more if data came
    // less than desired quantity
    sample({
        clock: loadMoreFx.doneData,
        source: $data,
        filter: (list, { data }) => {
            console.log(list.length, maxElements ?? Infinity);

            return (
                !data || data.length < quantity || list.length >= maxElements
            );
        },
        fn: () => false,
        target: $canLoadMore,
    });

    loadMoreFx.use(async ({ page, quantity, user, isInitialLoad }) => {
        const data = await onLoadMore(page, quantity, user);

        return { data, isInitialLoad };
    });

    return {
        usePagination: () => {
            const [
                isLoading,
                onLoadMore,
                canLoadMore,
                data,
                onInitialLoad,
                isInitiallyLoaded,
            ] = useUnit([
                loadMoreFx.pending,
                loadMore,
                $canLoadMore,
                $data,
                initialLoad,
                $isInitiallyLoaded,
            ]);

            return {
                isLoading,
                loadMore: onLoadMore,
                canLoadMore,
                loadMoreButton,
                data,
                initialLoad: onInitialLoad,
                isInitiallyLoaded,
            };
        },
        $data,
        $canLoadMore,
        $isInitiallyLoaded,
        loadMore,
        loadMoreFx,
    };
};
