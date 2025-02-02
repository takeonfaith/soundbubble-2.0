import {
    IconDots,
    IconPlaylist,
    IconQuote,
    IconSparkles,
} from '@tabler/icons-react';
import { useTheme } from 'styled-components';
import { chatModel } from '../../entities/chat/model';
import { SongState } from '../../entities/song/model/types';
import { SongCover } from '../../entities/song/ui/SongCover';
import { LikeButton } from '../../features/likeButton';
import { VolumeButton } from '../../features/volumeButton';
import { Authors } from '../../shared/components/authors';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { MusicControls } from '../../shared/components/musicControls';
import { MusicControlsStyled } from '../../shared/components/musicControls/styles';
import { PlayPauseIcon } from '../../shared/components/playPauseIcon';
import useCurrentDevice from '../../shared/hooks/useCurrentDevice';
import {
    MobilePlayButton,
    PlayerActionButtons,
    PlayerMusicControls,
    PlayerStyled,
    SlowVersionButton,
    SongInfoStyled,
    SongStyled,
    SongTitle,
} from './styles';
import { usePlayer } from './usePlayer';

export const Player = () => {
    const {
        controls,
        isLiked,
        currentSong,
        handleLyrics,
        handleToggleLike,
        performingAction,
        handleShowQueue,
        handleMore,
        handleOpen,
        isSlowVersion,
        handleSlow,
    } = usePlayer();
    const theme = useTheme();

    const { isMobile } = useCurrentDevice();

    const [currentChat] = chatModel.useCurrentChat();

    if (isMobile && currentChat) return null;

    return (
        <PlayerStyled
            onClick={handleOpen}
            $background={currentSong?.imageColors[0] ?? theme.colors.player}
        >
            <SongStyled>
                <SongCover
                    colors={currentSong?.imageColors ?? ['grey']}
                    src={currentSong?.cover}
                    size={'50px'}
                />
                <SongInfoStyled>
                    <SongTitle>{currentSong?.name ?? 'Untitled'}</SongTitle>
                    <Authors authors={currentSong?.authors} />
                </SongInfoStyled>
                <LikeButton
                    width="40px"
                    disabled={!currentSong}
                    isLiked={isLiked}
                    entity={currentSong}
                    onClick={handleToggleLike}
                    loading={performingAction}
                    likeColor={currentSong?.imageColors[0]}
                />
            </SongStyled>
            <PlayerMusicControls onClick={(e) => e.stopPropagation()}>
                <MusicControls {...controls} />
            </PlayerMusicControls>
            <Flex jc="flex-end" onClick={(e) => e.stopPropagation()}>
                <MobilePlayButton>
                    <MusicControlsStyled>
                        <Button
                            $width="40px"
                            onClick={(e) => {
                                e.stopPropagation();
                                controls.onPlay();
                            }}
                        >
                            <PlayPauseIcon
                                loading={
                                    controls.state === SongState.loading ||
                                    controls.state === SongState.loadingThenPlay
                                }
                                playling={controls.state === 'playing'}
                            />
                        </Button>
                    </MusicControlsStyled>
                </MobilePlayButton>
                <PlayerActionButtons onClick={(e) => e.stopPropagation()}>
                    <VolumeButton />
                    <SlowVersionButton
                        $width="42px"
                        $height="42px"
                        disabled={!currentSong || !currentSong.slowSrc}
                        $color={currentSong?.imageColors[0]}
                        onClick={handleSlow}
                        className={`${isSlowVersion ? 'slow' : ''} order3`}
                    >
                        <IconSparkles size={20} />
                    </SlowVersionButton>
                    <Button
                        $width="42px"
                        $height="42px"
                        disabled={!currentSong}
                        onClick={handleShowQueue}
                        className="order2"
                    >
                        <IconPlaylist size={20} />
                    </Button>
                    <Button
                        $width="42px"
                        $height="42px"
                        disabled={!currentSong?.hasLyrics}
                        onClick={handleLyrics}
                        className="order1"
                    >
                        <IconQuote size={20} />
                    </Button>
                    <Button
                        $width="42px"
                        $height="42px"
                        onClick={handleMore}
                        disabled={!currentSong}
                    >
                        <IconDots size={20} />
                    </Button>
                </PlayerActionButtons>
            </Flex>
        </PlayerStyled>
    );
};
