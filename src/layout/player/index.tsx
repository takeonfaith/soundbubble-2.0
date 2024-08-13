import {
    IconDots,
    IconQuote,
    IconShare3,
    IconSquareRoundedPlus,
} from '@tabler/icons-react';
import { SongCover } from '../../entities/song/ui/SongCover';
import { LikeButton } from '../../features/likeButton';
import { Authors } from '../../shared/components/authors';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { MusicControls } from '../../shared/components/musicControls';
import { MusicControlsStyled } from '../../shared/components/musicControls/styles';
import { PlayPauseIcon } from '../../shared/components/playPauseIcon';
import {
    MobilePlayButton,
    PlayerActionButtons,
    PlayerStyled,
    SongStyled,
    SongTitle,
} from './styles';
import { usePlayer } from './usePlayer';
import { useTheme } from 'styled-components';

export const Player = () => {
    const {
        controls,
        isLiked,
        currentSong,
        handleLyrics,
        handleAddToPlaylist,
        handleShare,
        handleMore,
        handleOpenFullScreenPlayer,
    } = usePlayer();
    const theme = useTheme();

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
            <Flex gap={30} width="100%" jc="flex-end">
                <MusicControls {...controls} />
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
                        song={currentSong}
                        likeColor={currentSong?.imageColors[0]}
                    />
                    <Button
                        $width="42px"
                        disabled={!currentSong}
                        onClick={handleAddToPlaylist}
                    >
                        <IconSquareRoundedPlus size={20} />
                    </Button>
                    <Button
                        $width="42px"
                        disabled={!currentSong}
                        onClick={handleShare}
                    >
                        <IconShare3 size={20} />
                    </Button>
                    <Button
                        $width="42px"
                        disabled={!currentSong?.lyrics.length}
                        onClick={handleLyrics}
                    >
                        <IconQuote size={20} />
                    </Button>
                    <Button
                        $width="42px"
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
