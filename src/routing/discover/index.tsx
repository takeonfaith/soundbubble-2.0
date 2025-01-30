import { IconSparkles } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import styled from 'styled-components';
import { SongState } from '../../entities/song/model/types';
import { songModel } from '../../entities/song/new-model';
import {
    $analyser,
    $audioData,
} from '../../entities/song/new-model/frequencies';
import { $isSlowWave, playWaveFx } from '../../entities/song/new-model/wave';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { PlayPauseIcon } from '../../shared/components/playPauseIcon';
import { SwitchToggle } from '../../shared/components/switchToggle';
import { MeshGradientBubblesWithAudio } from './Bubble';

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
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    height: 300px;
    height: 300px;

    .slow-btn {
        background: #2a2a2a4f;
        padding: 10px 14px;
        border-radius: 20px;
        opacity: 0;
        position: absolute;
        width: 205px;
        transition: 0.2s transform, 0.1s opacity;
        transform: translateY(60px);
        gap: 10px;
        display: flex;
        align-items: center;
        color: #fff;

        &:hover {
            background: #2a2a2a33;
        }
    }

    @media (hover: hover) {
        &:hover {
            .slow-btn {
                opacity: 1;
            }
        }
    }

    @media (hover: none) {
        .slow-btn {
            opacity: 1;
        }
    }
`;

export const DiscoverPage = () => {
    const isOpen = songModel.useFullScreenPlayer();
    const { currentSong, state, queue } = songModel.useSong();
    const [analyser, audioData] = useUnit([$analyser, $audioData]);
    const [isLoadingQueue, isSlow] = useUnit([playWaveFx.pending, $isSlowWave]);
    const isWave = queue?.url === '/discover';
    const isLoading =
        isLoadingQueue ||
        state === SongState.loading ||
        state === SongState.loadingThenPlay;

    const handleSlow = (e: Evt<'input' | 'btn'>) => {
        e.preventDefault();
        e.stopPropagation();

        songModel.wave.toggleSlow();
    };
    const isPlaying = isWave && state === SongState.playing;

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
                    onClick={() => {
                        songModel.wave.playWave();
                    }}
                    className="play-wave-btn"
                >
                    <Flex gap={10}>
                        <Flex width="40px" height="40px" jc="center">
                            <PlayPauseIcon
                                loading={isLoading}
                                playling={isPlaying}
                                size={35}
                            />
                        </Flex>
                        {!isWave || !state || state === SongState.pause
                            ? 'Play Wave'
                            : "Wave vibin'"}
                    </Flex>
                </Button>
                <Button className="slow-btn" onClick={handleSlow}>
                    <Flex width="100%" jc="space-between">
                        <Flex gap={10}>
                            <IconSparkles size={22} />
                            Slow version
                        </Flex>
                        <SwitchToggle
                            onChange={handleSlow}
                            size="s"
                            checked={isSlow}
                            primaryColor={currentSong?.imageColors[3]}
                        />
                    </Flex>
                </Button>
            </PlaybuttonStyled>
            {/* <YearPlaylists /> */}
        </DiscoverPageStyled>
    );
};
