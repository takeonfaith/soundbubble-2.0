import { useEffect, useRef } from 'react';
import { userModel } from '../../entities/user/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Loading } from '../../shared/components/loading';
import { TPaginationModel } from '../../shared/effector/createPagination';
import { useIsOnScreen } from '../../shared/hooks/useIsOnScreen';

type Props<T extends object> = {
    paginationModel: TPaginationModel<T>;
    children: (data: T[], isLoading: boolean) => React.ReactNode;
    noAccountStub?: React.ReactNode;
};

export const PaginationList = <T extends object>({
    paginationModel,
    children,
    noAccountStub,
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
        if (currentUser) {
            initialLoad();
        }
    }, [currentUser, initialLoad]);

    useEffect(() => {
        if (isOnScreen && !loadMoreButton) {
            loadMore();
        }
    }, [isOnScreen, loadMore, loadMoreButton]);

    if (!currentUser) return noAccountStub;

    return (
        <div className="pagination">
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
        </div>
    );
};
