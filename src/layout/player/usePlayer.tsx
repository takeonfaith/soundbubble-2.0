import React from 'react';
import { songModel } from '../../entities/song/model';
import { SongMoreContextMenu } from '../../entities/song/ui/SongMoreContextMenu';
import { userModel } from '../../entities/user/model';
import { AddSongToPlaylistModal } from '../../features/addSongToPlaylistModal';
import { ShareModal } from '../../features/shareModal';
import { usePlayerMusicControls } from '../fullScreenPlayer/PlayerMusicControls';
import { modalModel } from '../modal/model';
import { popupModel } from '../popup/model';
import { CompactLyrics } from './CompactLyrics';
import { usePrivateAction } from '../../shared/hooks/usePrivateAction';

export const usePlayer = () => {
    const { currentSong } = songModel.useSong();
    const [library] = userModel.useSongLibrary();
    const controls = usePlayerMusicControls();
    const isLiked = !!library.find((s) => s.id === currentSong?.id);
    const { loggedIn } = usePrivateAction();

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

    return {
        currentSong,
        controls,
        isLiked,
        handleLyrics,
        handleAddToPlaylist,
        handleShare,
        handleMore,
        handleOpenFullScreenPlayer,
    };
};
