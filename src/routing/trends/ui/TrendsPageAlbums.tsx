import { IconChartBarOff } from '@tabler/icons-react';
import { PlaylistItem } from '../../../entities/playlist/ui';
import { Flex } from '../../../shared/components/flex';
import { PageMessage } from '../../../shared/components/pageMessage';
import { ContentWrapper } from '../../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../../shared/components/skeleton/SkeletonPageAnimation';
import { trendingAlbumsPaginationModel } from '../model';
import { Skeleton } from './Skeleton';
import { TopPlates } from './styles';
import { TopPlate } from './TopPlate';
import { PaginationList } from '../../../features/paginationList';

export const TrendsPageAlbums = () => {
    const { data: albums, isInitiallyLoaded } =
        trendingAlbumsPaginationModel.usePagination();

    return (
        <ContentWrapper>
            <SkeletonPageAnimation loading={!isInitiallyLoaded} skeleton={<Skeleton />}>
                {!!albums.length && (
                    <TopPlates>
                        <TopPlate index={1} entity={albums[0]} />
                        <TopPlate index={2} entity={albums[1]} />
                        <TopPlate index={3} entity={albums[2]} />
                    </TopPlates>
                )}
                <PaginationList paginationModel={trendingAlbumsPaginationModel}>
                    {(albums) =>
                        albums.slice(3).map((album) => {
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
                {!albums.length && (
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
