import { PLAYLIST_RADIUS } from '../../entities/playlist/constants';
import { SongSkeleton } from '../../entities/song/ui/Skeleton';
import { Flex } from '../../shared/components/flex';
import { SkeletonShape } from '../../shared/components/skeleton';
import { PlaylistPageSongs, DesktopGridHeaderStyled } from './styles';

export const SkeletonLoading = () => {
    return (
        <Flex width="100%" d="column" ai="flex-start">
            <SkeletonShape width="100%" height="400px" radius="0">
                <Flex
                    width="100%"
                    d="column"
                    padding="56px 50px 50px 50px"
                    ai="center"
                    jc="center"
                    gap={20}
                >
                    <SkeletonShape
                        width="200px"
                        height="200px"
                        radius={PLAYLIST_RADIUS}
                    />
                    <Flex d="column" gap={8}>
                        <SkeletonShape width="200px" height="30px" />
                        <SkeletonShape
                            width="100px"
                            height="20px"
                            radius="3px"
                        />
                    </Flex>
                    {/* <Flex gap={8}>
					<SkeletonShape width='146px' height='40px' radius='6px' />
					<SkeletonShape width='146px' height='40px' radius='6px' />
				</Flex> */}
                </Flex>
            </SkeletonShape>
            <PlaylistPageSongs>
                <DesktopGridHeaderStyled
                    width="100%"
                    gap={20}
                    style={{ marginTop: '4px', marginBottom: '14px' }}
                >
                    <div style={{ width: '40px' }} />
                    <div style={{ width: 'calc(25% - 4px)', height: '18px' }}>
                        <SkeletonShape width="50%" height="18px" radius="6px" />
                    </div>
                    <div style={{ width: 'calc(25% - 2px)', height: '18px' }}>
                        <SkeletonShape width="50%" height="18px" radius="6px" />
                    </div>
                    <div style={{ width: '20%', height: '18px' }}>
                        <SkeletonShape width="50%" height="18px" radius="6px" />
                    </div>
                    <div style={{ width: '18%', height: '18px' }}>
                        <SkeletonShape width="50%" height="18px" radius="6px" />
                    </div>
                </DesktopGridHeaderStyled>
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
            </PlaylistPageSongs>
        </Flex>
    );
};
