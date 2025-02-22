import { useEffect, useRef } from 'react';
import { userModel } from '../../entities/user/model';
import { TUser } from '../../entities/user/model/types';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Loading } from '../../shared/components/loading';
import { TPaginationModel } from '../../shared/effector/pagination';
import { useIsOnScreen } from '../../shared/hooks/useIsOnScreen';

type Props<T extends object> = {
    paginationModel: TPaginationModel<T>;
    children: (data: T[], isLoading: boolean) => React.ReactNode;
    getStub?: (
        currentUser: TUser | null,
        data: T[],
        isLoading: boolean
    ) => React.ReactNode;
};

export const PaginationList = <T extends object>({
    paginationModel,
    children,
    getStub,
}: Props<T>) => {
    const {
        isLoading,
        loadMore,
        initialLoad,
        canLoadMore,
        loadMoreButton,
        data,
    } = paginationModel.usePagination();

    const loadMoreRef = useRef<HTMLDivElement | null>(null);
    const isOnScreen = useIsOnScreen(loadMoreRef);
    const [currentUser] = userModel.useUser();

    useEffect(() => {
        console.log('initialLoad');

        initialLoad();
    }, [currentUser, initialLoad]);

    useEffect(() => {
        if (isOnScreen && !loadMoreButton) {
            loadMore();
        }
    }, [isOnScreen, loadMore, loadMoreButton]);

    if (!isLoading && !data.length) {
        return getStub?.(currentUser, data, isLoading);
    }

    return (
        <>
            {children(data, isLoading)}

            <Flex ref={loadMoreRef} jc="center" width="100%" padding="20px">
                {loadMoreButton && canLoadMore && (
                    <DefaultButton
                        onClick={loadMore}
                        width="120px"
                        loading={isLoading}
                        className="outline"
                    >
                        Load more
                    </DefaultButton>
                )}
                {canLoadMore && !loadMoreButton && <Loading />}
            </Flex>
        </>
    );
};
