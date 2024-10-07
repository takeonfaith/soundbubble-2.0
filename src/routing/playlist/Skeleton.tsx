import { IconArrowsShuffle, IconPlayerPlayFilled } from '@tabler/icons-react';
import { PLAYLIST_RADIUS } from '../../entities/playlist/constants';
import { SongSkeleton } from '../../entities/song/ui/Skeleton';
import { Flex } from '../../shared/components/flex';
import { SkeletonShape } from '../../shared/components/skeleton';
import { DesktopGridHeaderStyled, PlaylistPageSongs } from './styles';

export const SkeletonLoading = () => {
    return (
        <Flex width="100%" d="column" ai="flex-start">
            <Flex
                width="100%"
                padding="60px calc(var(--page-padding) + 7px) 36px calc(var(--page-padding) + 7px)"
                ai="center"
                gap={30}
            >
                <SkeletonShape
                    width="200px"
                    height="200px"
                    radius={PLAYLIST_RADIUS}
                />
                <Flex d="column" gap={16} ai="flex-start">
                    <SkeletonShape width="200px" height="30px" />
                    <SkeletonShape width="100px" height="20px" radius="3px" />
                    <SkeletonShape width="200px" height="14px" radius="3px" />
                </Flex>
            </Flex>
            <Flex
                padding="0 calc(var(--page-padding) + 8px) 39px calc(var(--page-padding) + 8px)"
                gap={20}
            >
                <Flex gap={10} ai="flex-start">
                    <SkeletonShape
                        width="45px"
                        height="45px"
                        radius="100%"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <IconPlayerPlayFilled size={20} opacity={0.3} />
                    </SkeletonShape>
                    <SkeletonShape
                        width="45px"
                        height="45px"
                        radius="100%"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <IconArrowsShuffle size={20} opacity={0.3} />
                    </SkeletonShape>
                </Flex>
                <Flex gap={4}>
                    <SkeletonShape width="135px" height="35px" radius="6px" />
                    <SkeletonShape width="100px" height="35px" radius="6px" />
                    <SkeletonShape width="90px" height="35px" radius="6px" />
                    <SkeletonShape width="90px" height="35px" radius="6px" />
                </Flex>
            </Flex>
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
