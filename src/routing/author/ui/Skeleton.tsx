
import styled from 'styled-components';
import { PlaylistSkeleton } from '../../../entities/playlist/ui/Skeleton';
import { GridSongListStyled } from '../../../entities/song/ui/gridList/styles';
import { SongSkeleton } from '../../../entities/song/ui/Skeleton';
import { UserSkeleton } from '../../../entities/user/ui/Skeleton';
import { Flex } from '../../../shared/components/flex';
import { SkeletonShape } from '../../../shared/components/skeleton';
import { SongsStyled } from './styles';

const AuthorPageWrapper = styled.div`
    padding: 0 calc(var(--page-padding) + 4px);
    width: 100%;
`;

export const SkeletonLoading = () => {
    return (
        <Flex width="100%" d="column" ai="flex-start" height="100%">
            <SkeletonShape width="100%" height="400px" radius="0">
                <Flex
                    width="100%"
                    d="column"
                    padding="56px 62px 50px 50px"
                    ai="center"
                    jc="center"
                    gap={21}
                >
                    <SkeletonShape width="200px" height="200px" radius="100%" />
                    <Flex d="column" gap={8}>
                        <SkeletonShape width="200px" height="30px" />
                        <SkeletonShape
                            width="100px"
                            height="10px"
                            radius="3px"
                        />
                        <SkeletonShape
                            width="100px"
                            height="20px"
                            radius="3px"
                        />
                    </Flex>
                </Flex>
            </SkeletonShape>
            <AuthorPageWrapper>
                <SongsStyled>
                    <SkeletonShape
                        width="100px"
                        height="25px"
                        radius="6px"
                        style={{ marginBottom: '8px' }}
                    />
                    <GridSongListStyled rows={3} columns={3}>
                        <SongSkeleton />
                        <SongSkeleton />
                        <SongSkeleton />
                        <SongSkeleton />
                        <SongSkeleton />
                        <SongSkeleton />
                        <SongSkeleton />
                        <SongSkeleton />
                        <SongSkeleton />
                    </GridSongListStyled>
                </SongsStyled>
                <Flex d="column" ai="flex-start" gap={8} width="100%">
                    <SkeletonShape width="115px" height="25px" radius="6px" />
                    <Flex gap={14} width="100%">
                        <PlaylistSkeleton />
                        <PlaylistSkeleton />
                        <PlaylistSkeleton />
                        <PlaylistSkeleton />
                        <PlaylistSkeleton />
                        <PlaylistSkeleton />
                    </Flex>
                </Flex>
                <Flex
                    d="column"
                    ai="flex-start"
                    padding="40px 0 0 0"
                    gap={20}
                    width="100%"
                >
                    <SkeletonShape width="145px" height="25px" radius="6px" />
                    <Flex gap={30} width="100%">
                        <UserSkeleton />
                        <UserSkeleton />
                        <UserSkeleton />
                        <UserSkeleton />
                        <UserSkeleton />
                        <UserSkeleton />
                        <UserSkeleton />
                        <UserSkeleton />
                    </Flex>
                </Flex>
            </AuthorPageWrapper>
        </Flex>
    );
};
