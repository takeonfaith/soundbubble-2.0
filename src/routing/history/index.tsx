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

export const HistoryPage = () => {
    const [history, loading] = historyModel.useHistory();

    historyModel.useLoadHistory();

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
                    <VerticalSongsList
                        songs={history}
                        listName={'History'}
                        listIcon={''}
                        listUrl={'/history'}
                    />
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
