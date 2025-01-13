import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import styled from 'styled-components';
import { songModel } from '../../entities/song/new-model';
import {
    $analyser,
    $audioData,
} from '../../entities/song/new-model/frequencies';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { MeshGradientBubblesWithAudio } from './Bubble';
import { YearPlaylists } from './YearPlaylists';

const DiscoverPageStyled = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;

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
    const [analyser, audioData] = useUnit([$analyser, $audioData]);

    return (
        <DiscoverPageStyled color={currentSong?.imageColors[0]}>
            <div className="noise-layer"></div>

            {/* {!isOpen && <LavaLampBackground />} */}
            {!isOpen && (
                <MeshGradientBubblesWithAudio
                    colors={currentSong?.imageColors}
                    analyser={analyser}
                    audioData={audioData}
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
            <YearPlaylists />
        </DiscoverPageStyled>
    );
};
