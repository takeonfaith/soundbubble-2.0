import React from 'react';
import { songModel } from '../../entities/song/model';
import { SongMoreContextMenu } from '../../entities/song/ui/SongMoreContextMenu';
import { userModel } from '../../entities/user/model';
import { AddSongToPlaylistModal } from '../../features/addSongToPlaylistModal';
import { ShareModal } from '../../features/shareModal';
import { modalModel } from '../modal/model';
import { popupModel } from '../popup/model';
import { CompactLyrics } from './CompactLyrics';
import { usePrivateAction } from '../../shared/hooks/usePrivateAction';
import { SongsQueue } from './SongsQueue';
import { usePlayerMusicControls } from '../fullScreenPlayer/hooks/usePlayerMusicControls';
import { useToggleLike } from '../../entities/song/hooks/useToggleLike';

export const usePlayer = () => {
    const { currentSong } = songModel.useSong();
    const [library] = userModel.useSongLibrary();
    const controls = usePlayerMusicControls();
    const isLiked = !!library.find((s) => s.id === currentSong?.id);
    const { loggedIn } = usePrivateAction();
    const { handleToggleLike, performingAction } = useToggleLike(currentSong);

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

    const handleShare = loggedIn(() => {
        modalModel.events.open({
            title: `Share "${currentSong?.name}" with friends`,
            content: <ShareModal entity={currentSong} />,
            sizeY: 'l',
        });
    });

    const handleAddToPlaylist = loggedIn(() => {
        modalModel.events.open({
            title: `Add "${currentSong?.name}" to playlist`,
            content: <AddSongToPlaylistModal song={currentSong} />,
        });
    });

    const handleLyrics = (e: Evt<'btn'>) => {
        e.stopPropagation();
        popupModel.events.open({
            content: <CompactLyrics />,
            height: 500,
            width: 350,
            e,
        });
    };

    const handleShowQueue = (e: Evt<'btn'>) => {
        popupModel.events.open({
            content: <SongsQueue />,
            height: 500,
            width: 350,
            e,
        });
    };

    return {
        currentSong,
        controls,
        isLiked,
        handleToggleLike,
        performingAction,
        handleLyrics,
        handleAddToPlaylist,
        handleShare,
        handleMore,
        handleShowQueue,
        handleOpenFullScreenPlayer,
    };
};
