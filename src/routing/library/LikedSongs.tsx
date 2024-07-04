import { IconMusic } from '@tabler/icons-react';
import { styled } from 'styled-components';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { userModel } from '../../entities/user/model';
import { Flex } from '../../shared/components/flex';
import { Subtext } from '../../shared/components/subtext';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { SongSkeleton } from '../../entities/song/ui/Skeleton';

const SkeletonLoading = () => {
    return (
        <Flex d="column" gap={4} width="100%">
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
        </Flex>
    );
};

const ContentStyled = styled.div`
    padding: 20px 40px;
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;

    @media (max-width: 1000px) {
        padding: 0 20px;
        padding-bottom: 40px;
        gap: 4px;
    }
`;

export const LikedSongs = () => {
    const [library, loading] = userModel.useSongLibrary();
    const [{ data }] = userModel.useUser();

    return (
        <ContentStyled>
            <SkeletonPageAnimation
                loading={loading}
                skeleton={<SkeletonLoading />}
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
        </ContentStyled>
    );
};
