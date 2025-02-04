import { IconHistoryOff, IconUserOff } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { getHistoryDate } from '../../entities/history/lib/getHistoryDate';
import { $history, historyPaginationModel } from '../../entities/history/model';
import { deleteHistoryFx } from '../../entities/history/model/delete-history';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';
import { PlaneSongList } from '../../entities/song/ui/planeList';
import { LoginButton } from '../../features/loginButton';
import { PaginationList } from '../../features/paginationList';
import { Header } from '../../layout/header';
import { Divider } from '../../shared/components/divider';
import { Flex } from '../../shared/components/flex';
import { LoadingWrapper } from '../../shared/components/loadingWrapper';
import { PageMessage } from '../../shared/components/pageMessage';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import { convertToMapArray } from '../../shared/funcs/convertToMap';
import { DeleteHistoryButton } from './DeleteHistoryButton';
import { HistoryPageWrapper } from './styles';

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
                    getStub={(user) => (
                        <Flex
                            width="100%"
                            height="calc(100vh - 340px)"
                            jc="center"
                        >
                            <PageMessage
                                icon={user ? IconHistoryOff : IconUserOff}
                                title={
                                    user
                                        ? 'No history yet'
                                        : 'Need to log in to see history'
                                }
                                description={
                                    user
                                        ? 'Songs that you listen end up here'
                                        : ''
                                }
                            >
                                <LoginButton />
                            </PageMessage>
                        </Flex>
                    )}
                    paginationModel={historyPaginationModel}
                >
                    {(data) => {
                        const converted = convertToMapArray(
                            data,
                            'time',
                            (time) => getHistoryDate(time)
                        );

                        return Object.keys(converted).map((date, index) => {
                            const queue = createQueueObject({
                                songs: converted[date],
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
