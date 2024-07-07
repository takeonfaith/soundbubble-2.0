import { IconMusic } from '@tabler/icons-react';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { userModel } from '../../entities/user/model';
import { Flex } from '../../shared/components/flex';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { Subtext } from '../../shared/components/subtext';
import { SongListSkeleton } from '../../entities/song/ui/SongListSkeleton';

export const LikedSongs = () => {
    const [library, loading] = userModel.useSongLibrary();
    const [{ data }] = userModel.useUser();

    return (
        <ContentWrapper>
            <SkeletonPageAnimation
                loading={loading}
                skeleton={<SongListSkeleton quantity={20}/>}
            >
                <VerticalSongsList
                    listName="Library"
                    listIcon={<IconMusic />}
                    listUrl="/library"
                    songs={library}
                />
                {!data && (
                    <Flex
                        d="column"
                        gap={10}
                        width="100%"
                        height="100%"
                        jc="center"
                    >
                        <IconMusic opacity={0.5} size={100} />
                        <Subtext style={{ fontSize: '1.1rem' }}>
                            Need to log in into account to see your library
                        </Subtext>
                    </Flex>
                )}
                {data && !library.length && (
                    <Flex d="column" gap={10} width="100%">
                        <IconMusic opacity={0.5} size={100} />
                        <Subtext style={{ fontSize: '1.1rem' }}>
                            No songs added to library
                        </Subtext>
                    </Flex>
                )}
            </SkeletonPageAnimation>
        </ContentWrapper>
    );
};
