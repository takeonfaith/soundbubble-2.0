import { PlaylistSkeleton } from '../../entities/playlist/ui/Skeleton';
import { GridSongListStyled } from '../../entities/song/ui/gridList/styles';
import { SongSkeleton } from '../../entities/song/ui/Skeleton';
import { Flex } from '../../shared/components/flex';
import { SkeletonShape } from '../../shared/components/skeleton';
import { AuthorPageWrapper } from '../author/styles';
import {
    SectionStyled,
    UserButtons,
    UserInfo,
    UserInfoName,
    UserTopStyled,
} from './styles';

export const SkeletonLoading = () => {
    return (
        <AuthorPageWrapper>
            <UserTopStyled>
                <SkeletonShape width="150px" height="150px" radius="100%" />
                <UserInfo>
                    <UserInfoName>
                        <SkeletonShape
                            width="150px"
                            height="30px"
                            radius="10px"
                        />

                        <SkeletonShape
                            width="150px"
                            height="15px"
                            radius="10px"
                        />
                    </UserInfoName>
                    <UserButtons>
                        <SkeletonShape
                            width="160px"
                            height="40px"
                            radius="10px"
                        />
                        <SkeletonShape
                            width="160px"
                            height="40px"
                            radius="10px"
                        />
                    </UserButtons>
                </UserInfo>
            </UserTopStyled>
            <SectionStyled>
                <SkeletonShape
                    className="title"
                    width="160px"
                    height="22px"
                    radius="10px"
                />
                <GridSongListStyled
                    rows={1}
                    columns={3}
                    style={{ padding: '0 var(--page-padding)' }}
                >
                    <SongSkeleton />
                </GridSongListStyled>
            </SectionStyled>
            <SectionStyled>
                <SkeletonShape
                    className="title"
                    width="160px"
                    height="22px"
                    radius="10px"
                />
                <GridSongListStyled
                    rows={3}
                    columns={3}
                    style={{ padding: '0 var(--page-padding)' }}
                >
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
            </SectionStyled>
            <SectionStyled>
                <SkeletonShape
                    className="title"
                    width="160px"
                    height="22px"
                    radius="10px"
                />
                <Flex
                    gap={14}
                    width="100%"
                    style={{ padding: '0 var(--page-padding)' }}
                >
                    <PlaylistSkeleton />
                    <PlaylistSkeleton />
                    <PlaylistSkeleton />
                    <PlaylistSkeleton />
                    <PlaylistSkeleton />
                    <PlaylistSkeleton />
                </Flex>
            </SectionStyled>
        </AuthorPageWrapper>
    );
};
