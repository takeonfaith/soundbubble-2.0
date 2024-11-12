import { IconChartBarOff } from '@tabler/icons-react';
import { PlaylistItem } from '../../../entities/playlist/ui';
import { Flex } from '../../../shared/components/flex';
import { PageMessage } from '../../../shared/components/pageMessage';
import { ContentWrapper } from '../../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../../shared/components/skeleton/SkeletonPageAnimation';
import { trendsModel } from '../model';
import { Skeleton } from './Skeleton';
import { TopPlates } from './styles';
import { TopPlate } from './TopPlate';

export const TrendsPageAlbums = () => {
    const [albums, loading] = trendsModel.useAlbums();

    return (
        <ContentWrapper>
            <SkeletonPageAnimation loading={loading} skeleton={<Skeleton />}>
                {!!albums.length && (
                    <TopPlates>
                        <TopPlate index={1} entity={albums[0]} />
                        <TopPlate index={2} entity={albums[1]} />
                        <TopPlate index={3} entity={albums[2]} />
                    </TopPlates>
                )}
                {albums.slice(3).map((album) => {
                    return (
                        <PlaylistItem
                            isAuthor={false}
                            playlist={album}
                            key={album.id}
                            orientation="horizontal"
                        />
                    );
                })}
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
