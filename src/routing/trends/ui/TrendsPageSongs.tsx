import { IconChartBarOff } from '@tabler/icons-react';
import { createQueueObject } from '../../../entities/song/lib/createQueueObject';
import { VerticalSongsList } from '../../../entities/song/ui/verticalList';
import { Flex } from '../../../shared/components/flex';
import { PageMessage } from '../../../shared/components/pageMessage';
import { ContentWrapper } from '../../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../../shared/components/skeleton/SkeletonPageAnimation';
import { trendsModel } from '../model';
import { Skeleton } from './Skeleton';
import { TopPlates } from './styles';
import { TopPlate } from './TopPlate';

export const TrendsPageSongs = () => {
    const [songs, loading] = trendsModel.useSongs();

    const queue = createQueueObject({
        name: 'Trends',
        url: '/trends',
        songs: songs.slice(3),
    });

    return (
        <ContentWrapper>
            <SkeletonPageAnimation loading={loading} skeleton={<Skeleton />}>
                {!!songs.length && (
                    <TopPlates>
                        <TopPlate index={1} entity={songs[0]} />
                        <TopPlate index={2} entity={songs[1]} />
                        <TopPlate index={3} entity={songs[2]} />
                    </TopPlates>
                )}
                <VerticalSongsList queue={queue} showSerialNumber={3} />
                {!songs.length && (
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
