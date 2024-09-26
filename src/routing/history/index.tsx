import { IconHistoryOff } from '@tabler/icons-react';
import { historyModel } from '../../entities/history/model';
import { SongListSkeleton } from '../../entities/song/ui/SongListSkeleton';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { Header } from '../../layout/header';
import { PageMessage } from '../../shared/components/pageMessage';
import {
    ContentWrapper,
    PageWrapper,
} from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';

export const HistoryPage = () => {
    const [history, loading] = historyModel.useHistory();

    historyModel.useLoadHistory();

    const queue = createQueueObject({
        name: 'History',
        songs: history,
        url: '/history',
    });

    return (
        <PageWrapper>
            <Header />
            <ContentWrapper>
                <SkeletonPageAnimation
                    color=""
                    loading={loading}
                    skeleton={
                        <SongListSkeleton padding="var(--page-padding)" />
                    }
                >
                    <VerticalSongsList queue={queue} />
                    {history.length === 0 && (
                        <PageMessage
                            icon={IconHistoryOff}
                            title={'No History Found'}
                            description={'But at some point it will appear...'}
                        />
                    )}
                </SkeletonPageAnimation>
            </ContentWrapper>
        </PageWrapper>
    );
};
