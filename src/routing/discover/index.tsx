import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { useState } from 'react';
import styled from 'styled-components';
import { songModel } from '../../entities/song/new-model';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { MeshGradientBubblesWithAudio } from './Bubble';

const DiscoverPageStyled = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: linear-gradient(
        180deg,
        ${({ theme, color }) =>
            `${color ?? '#4f35b66d'}, ${theme.colors.pageBackground}`}
    );

    .noise-layer {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(var(--color-bg1, 0.2));
        background-image: url('./noise-light.png');
        opacity: 0.3;
        filter: invert(${({ theme }) => theme.colors.invert});
        z-index: 1;
        transform: translateZ(0);
    }
`;

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
    const currentTime = songModel.useCurrentTime();
    const [frequencies, setFrequencies] = useState<
        {
            frequencies: [number, number, number];
            time: number;
        }[]
    >([]);

    return (
        <DiscoverPageStyled color={currentSong?.imageColors[0]}>
            <div className="noise-layer"></div>

            {/* {!isOpen && <LavaLampBackground />} */}
            {!isOpen && (
                <MeshGradientBubblesWithAudio
                    colors={currentSong?.imageColors}
                    analyser={null}
                    audioData={new Uint8Array()}
                />
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
        </DiscoverPageStyled>
    );
};
