import { IconPlayerPlayFilled } from '@tabler/icons-react';
import styled from 'styled-components';
import { songModel } from '../../entities/song/new-model';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { LavaLampBackground } from '../../shared/components/lavaLampBackground';
import { Skeleton } from '../../shared/components/skeleton';

const PlaybuttonStyled = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`;

export const DiscoverPage = () => {
    const isOpen = songModel.useFullScreenPlayer();
    const { currentSong } = songModel.useSong();

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'auto',
            }}
        >
            {!isOpen && (
                <LavaLampBackground colors={currentSong?.imageColors} />
            )}
            <PlaybuttonStyled>
                <Button
                    $width="260px"
                    style={{ fontSize: '2rem', minHeight: '60px' }}
                >
                    <Flex gap={10}>
                        <IconPlayerPlayFilled size={40} />
                        Play Wave
                    </Flex>
                </Button>
            </PlaybuttonStyled>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
    );
};
