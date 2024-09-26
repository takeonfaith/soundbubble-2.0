import { IconDots, IconPlaylist, IconQuote } from '@tabler/icons-react';
import { useTheme } from 'styled-components';
import { chatModel } from '../../entities/chat/model';
import { SongCover } from '../../entities/song/ui/SongCover';
import { LikeButton } from '../../features/likeButton';
import { Authors } from '../../shared/components/authors';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { MusicControls } from '../../shared/components/musicControls';
import { MusicControlsStyled } from '../../shared/components/musicControls/styles';
import { PlayPauseIcon } from '../../shared/components/playPauseIcon';
import useCurrentDevice from '../../shared/hooks/useCurrentDevice';
import { ShareButton } from './ShareButton';
import {
    MobilePlayButton,
    PlayerActionButtons,
    PlayerMusicControls,
    PlayerStyled,
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
        handleOpenFullScreenPlayer,
    } = usePlayer();
    const theme = useTheme();

    const { isMobile } = useCurrentDevice();

    const { currentChatId } = chatModel.useChats();

    if (currentChatId && isMobile) return null;

    return (
        <PlayerStyled
            onClick={handleOpenFullScreenPlayer}
            $background={currentSong?.imageColors[0] ?? theme.colors.player}
        >
            <SongStyled>
                <SongCover
                    colors={currentSong?.imageColors ?? ['grey']}
                    src={currentSong?.cover}
                    size={'40px'}
                />
                <Flex d="column" ai="flex-start">
                    <SongTitle>{currentSong?.name ?? 'Untitled'}</SongTitle>
                    <Authors authors={currentSong?.authors} />
                </Flex>
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
                                loading={controls.state === 'loading'}
                                playling={controls.state === 'playing'}
                            />
                        </Button>
                    </MusicControlsStyled>
                </MobilePlayButton>
                <PlayerActionButtons onClick={(e) => e.stopPropagation()}>
                    <LikeButton
                        disabled={!currentSong}
                        width="42px"
                        isLiked={isLiked}
                        entity={currentSong}
                        onClick={handleToggleLike}
                        loading={performingAction}
                        likeColor={currentSong?.imageColors[0]}
                    />
                    <Button
                        $width="42px"
                        $height="42px"
                        disabled={!currentSong}
                        onClick={handleShowQueue}
                    >
                        <IconPlaylist size={20} />
                    </Button>
                    <ShareButton />
                    <Button
                        $width="42px"
                        $height="42px"
                        disabled={!currentSong?.lyrics.length}
                        onClick={handleLyrics}
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
