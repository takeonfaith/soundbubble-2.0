import { IconHistoryOff, IconUserOff } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { $history, historyPaginationModel } from '../../entities/history/model';
import { deleteHistoryFx } from '../../entities/history/model/delete-history';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';
import { TSong } from '../../entities/song/model/types';
import { PlaneSongList } from '../../entities/song/ui/planeList';
import { LoginButton } from '../../features/loginButton';
import { PaginationList } from '../../features/paginationList';
import { Header } from '../../layout/header';
import { Divider } from '../../shared/components/divider';
import { LoadingWrapper } from '../../shared/components/loadingWrapper';
import { PageMessage } from '../../shared/components/pageMessage';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import { convertToMapArray } from '../../shared/funcs/convertToMap';
import { HistoryPageWrapper } from './styles';
import { DeleteHistoryButton } from './DeleteHistoryButton';
import { getHistoryDate } from '../../entities/history/lib/getHistoryDate';

export const HistoryPage = () => {
    const [history, isDeletingHistory] = useUnit([
        $history,
        deleteHistoryFx.pending,
    ]);

    return (
        <HistoryPageWrapper>
            {isDeletingHistory && <LoadingWrapper />}
            <Header right={<DeleteHistoryButton history={history} />} />
            <ContentWrapper>
                <PaginationList
                    noAccountStub={
                        <PageMessage
                            icon={IconUserOff}
                            title={'Need to log in to see history'}
                            description={''}
                        >
                            <LoginButton />
                        </PageMessage>
                    }
                    paginationModel={historyPaginationModel}
                >
                    {(data, isLoading) => {
                        if (!data.length && !isLoading)
                            return (
                                <PageMessage
                                    icon={IconHistoryOff}
                                    title="No history yet"
                                    description="Songs that you listen will be here"
                                >
                                    <LoginButton />
                                </PageMessage>
                            );

                        const converted = convertToMapArray(
                            data,
                            'time',
                            (time) => getHistoryDate(time)
                        );

                        return Object.keys(converted).map((date, index) => {
                            const queue = createQueueObject({
                                songs: converted[date] as TSong[],
                                name: 'History',
                                url: '/history',
                            });
                            return (
                                <div>
                                    {index !== 0 && (
                                        <Divider
                                            style={{
                                                margin: '20px 8px',
                                                width: 'calc(100% - 16px)',
                                            }}
                                        />
                                    )}
                                    <div className="title">
                                        <h3>{date}</h3>
                                    </div>
                                    <PlaneSongList queue={queue} />
                                </div>
                            );
                        });
                    }}
                </PaginationList>
            </ContentWrapper>
        </HistoryPageWrapper>
    );
};
