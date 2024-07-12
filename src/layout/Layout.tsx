import { LikeButton } from '@features/likeButton';
import { songModel } from '@song/model';
import {
    IconDots,
    IconQuote,
    IconShare3,
    IconSquareRoundedPlus,
} from '@tabler/icons-react';
import { Outlet } from 'react-router';
import { styled } from 'styled-components';
import { SongCover } from '../entities/song/ui/SongCover';
import { SongMoreContextMenu } from '../entities/song/ui/SongMoreContextMenu';
import { AddSongToPlaylistModal } from '../features/addSongToPlaylistModal';
import { ShareModal } from '../features/shareModal';
import { Authors } from '../shared/components/authors';
import { BeautifulBackground } from '../shared/components/beautifulBackground';
import { Button } from '../shared/components/button';
import { Flex } from '../shared/components/flex';
import { MusicControls } from '../shared/components/musicControls';
import { MusicControlsStyled } from '../shared/components/musicControls/styles';
import { PlayPauseIcon } from '../shared/components/playPauseIcon';
import { FullScreenFullScreenPlayer } from './fullScreenPlayer';
import { Lyrics } from './fullScreenPlayer/Lyrics';
import { usePlayerMusicControls } from './fullScreenPlayer/PlayerMusicControls';
import { InitialLoading } from './initialLoading';
import { MobileMenu } from './mobileMenu';
import { Modal } from './modal';
import { modalModel } from './modal/model';
import { Popup } from './popup';
import { popupModel } from './popup/model';
import { Sidebar } from './sidebar';
import { userModel } from '../entities/user/model';

export const LayoutStyled = styled.div`
    height: calc(100dvh - 80px);
    display: flex;

    @media (max-width: 1000px) {
        height: calc(100dvh - 130px);
    }
`;

const PlayerStyled = styled.div<{ $background: string }>`
    width: 100%;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    transition: 0.5s background-color;
    background-color: ${({ $background }) => $background};
    background-image: ${({ theme }) =>
        `linear-gradient(${theme.colors.playerDarkening}, ${theme.colors.playerDarkening})`};
    gap: 50px;
    position: relative;
    z-index: 10;

    .music-controls {
        flex-direction: row-reverse;
    }

    .control-buttons {
        order: 3;
        width: fit-content;
        margin-bottom: 16px;

        .playback-buttons {
            gap: 0;

            .control-button {
                color: ${({ theme }) => theme.colors.textColor};
                transform: scale(0.7);
            }
        }

        .queue-button {
            color: ${({ theme }) => theme.colors.textColor};
            transform: scale(0.9);

            &.selected {
                background: ${({ theme }) => theme.colors.hover};
            }
        }
    }

    .song-slider {
        order: 2;
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        height: 2px;
        width: 35%;

        &::-webkit-slider-thumb {
            width: 10px;
            height: 10px;
        }
    }

    .duration-numbers {
        order: 1;
        position: absolute;
        left: 50%;
        bottom: 26px;
        transform: translateX(-50%);
        opacity: 0.6;
        font-size: 0.7rem;
        min-width: 70px;
        width: 35%;
        color: ${({ theme }) => theme.colors.textColor};

        & > * {
            font-size: 0.7rem;
            min-width: 36px;
            display: block;
        }
    }

    @media (max-width: 1000px) {
        padding: 6px;
        min-height: auto;
        border-radius: 14px;
        margin: 0 12px;
        width: calc(100% - 24px);
        box-shadow: 0px -10px 10px 0px ${({ theme }) => theme.colors.pageBackground};
        gap: 0;

        .music-controls {
            display: none;
        }
    }
`;

const SongTitle = styled.h1`
    font-size: 1.1rem;
    font-weight: 200;

    @media (max-width: 1000px) {
        font-size: 0.95rem;
    }
`;

const SongStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 300px;
    max-width: 300px;
    overflow: hidden;

    @media (max-width: 1000px) {
        min-width: calc(100% - 40px);
        width: calc(100% - 40px);
    }
`;

const LyricsWrapper = styled(BeautifulBackground)`
    overflow-y: auto;
    height: 100%;
    padding: 50px 20px;
    animation: none;
    scroll-padding-bottom: 300px;

    & > * {
        gap: 10px;
        font-size: 1.4rem;
    }
`;

const MobilePlayButton = styled.div`
    display: none;

    @media (max-width: 1000px) {
        display: block;
        width: fit-content;
    }
`;

const PlayerActionButtons = styled.div`
    min-width: 300px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    @media (max-width: 1000px) {
        display: none;
    }
`;

const CompactLyrics = () => {
    const { currentSong } = songModel.useSong();

    return (
        <LyricsWrapper $colors={currentSong?.imageColors}>
            <Lyrics />
        </LyricsWrapper>
    );
};

const Player = () => {
    const { currentSong } = songModel.useSong();
    const [library] = userModel.useSongLibrary();
    const controls = usePlayerMusicControls();
    const isLiked = !!library.find((s) => s.id === currentSong?.id);

    const handleOpenFullScreenPlayer = () => {
        songModel.fullscreen.open();
    };

    const handleMore: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();

        popupModel.events.open({
            content: <SongMoreContextMenu song={currentSong} />,
            height: 329,
            e,
        });
    };

    const handleShare = () => {
        modalModel.events.open({
            title: `Share "${currentSong?.name}" with friends`,
            content: <ShareModal entity={currentSong} />,
        });
    };

    const handleAddToPlaylist = () => {
        modalModel.events.open({
            title: `Add "${currentSong?.name}" to playlist`,
            content: <AddSongToPlaylistModal song={currentSong} />,
        });
    };

    const handleLyrics = (e: Evt<'btn'>) => {
        e.stopPropagation();
        popupModel.events.open({
            content: <CompactLyrics />,
            height: 500,
            width: 350,
            e,
        });
    };

    return (
        <PlayerStyled
            onClick={handleOpenFullScreenPlayer}
            $background={currentSong?.imageColors[0] ?? 'darkgrey'}
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
                <PlayerActionButtons>
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

const RightSide = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const Layout = () => {
    const fullScreen = songModel.fullscreen.useFullScreen();
    return (
        <>
            <InitialLoading />
            <FullScreenFullScreenPlayer open={fullScreen} />
            <Modal />
            <Popup />
            <LayoutStyled>
                <Sidebar />
                <RightSide>
                    <Outlet />
                </RightSide>
            </LayoutStyled>
            <Player />
            <MobileMenu />
        </>
    );
};
