import { IconChartBarOff } from '@tabler/icons-react';
import { PlaylistItem } from '../../../entities/playlist/ui';
import { PaginationList } from '../../../features/paginationList';
import { Flex } from '../../../shared/components/flex';
import { PageMessage } from '../../../shared/components/pageMessage';
import { ContentWrapper } from '../../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../../shared/components/skeleton/SkeletonPageAnimation';
import { trendingPlaylistsPaginationModel } from '../model';
import { Skeleton } from './Skeleton';
import { TopPlates } from './styles';
import { TopPlate } from './TopPlate';

export const TrendsPagePlaylists = () => {
    const { data: playlists, isInitiallyLoading } =
        trendingPlaylistsPaginationModel.usePagination();

    return (
        <ContentWrapper>
            <SkeletonPageAnimation
                loading={isInitiallyLoading}
                skeleton={<Skeleton />}
            >
                {!!playlists.length && (
                    <TopPlates>
                        <TopPlate index={1} entity={playlists[0]} />
                        <TopPlate index={2} entity={playlists[1]} />
                        <TopPlate index={3} entity={playlists[2]} />
                    </TopPlates>
                )}
                <PaginationList
                    paginationModel={trendingPlaylistsPaginationModel}
                >
                    {(playlists) =>
                        playlists.slice(3).map((album) => {
                            return (
                                <PlaylistItem
                                    isAuthor={false}
                                    playlist={album}
                                    key={album.id}
                                    orientation="horizontal"
                                />
                            );
                        })
                    }
                </PaginationList>
                {!playlists.length && (
                    <Flex
                        height="100%"
                        width="100%"
                        jc="center"
                        padding="20vh 0"
                    >
                        <PageMessage
                            icon={IconChartBarOff}
                            title={'Failed to load trends'}
                            description={
                                'This means something went really wrong...'
                            }
                        />
                    </Flex>
                )}
            </SkeletonPageAnimation>
        </ContentWrapper>
    );
};
