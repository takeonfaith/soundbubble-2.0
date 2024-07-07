import { IconHistory } from '@tabler/icons-react';
import { historyModel } from '../../entities/history/model';
import { SongListSkeleton } from '../../entities/song/ui/SongListSkeleton';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { Header } from '../../layout/header';
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
                    skeleton={<SongListSkeleton />}
                >
                    <VerticalSongsList
                        songs={history}
                        listName={'History'}
                        listIcon={<IconHistory />}
                        listUrl={'/history'}
                    />
                </SkeletonPageAnimation>
            </ContentWrapper>
        </PageWrapper>
    );
};
