import { IconMaximize } from '@tabler/icons-react';
import { useTheme } from 'styled-components';
import { chatModel } from '../../entities/chat/model';
import { SongState } from '../../entities/song/model/types';
import { SongCover } from '../../entities/song/ui/SongCover';
import { LikeButton } from '../../features/likeButton';
import { Authors } from '../../shared/components/authors';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { MusicControls } from '../../shared/components/musicControls';
import { MusicControlsStyled } from '../../shared/components/musicControls/styles';
import { PlayPauseIcon } from '../../shared/components/playPauseIcon';
import useCurrentDevice from '../../shared/hooks/useCurrentDevice';
import { Buttonts } from './Buttonts';
import {
    HoverIcon,
    MobilePlayButton,
    PlayerMusicControls,
    PlayerStyled,
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
                >
                    <HoverIcon>
                        <IconMaximize />
                    </HoverIcon>
                </SongCover>
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
                <Buttonts
                    handleSlow={handleSlow}
                    handleLyrics={handleLyrics}
                    handleMore={handleMore}
                    handleShowQueue={handleShowQueue}
                    currentSong={currentSong}
                    isSlowVersion={isSlowVersion}
                />
            </Flex>
        </PlayerStyled>
    );
};
