import React from 'react';
import { useToggleLike } from '../../entities/song/hooks/useToggleLike';
import { songModel as songModelNew } from '../../entities/song/new-model';
import { SongMoreContextMenu } from '../../entities/song/ui/SongMoreContextMenu';
import { userModel } from '../../entities/user/model';
import { AddSongToPlaylistModal } from '../../features/addSongToPlaylistModal';
import { usePrivateAction } from '../../shared/hooks/usePrivateAction';
import { usePlayerMusicControls } from '../fullScreenPlayer/hooks/usePlayerMusicControls';
import { modalModel } from '../modal/model';
import { popupModel } from '../popup/model';
import { CompactLyrics } from './CompactLyrics';
import { SongsQueue } from './SongsQueue';
import {
    slowSongsApi,
    useIsSlowVersion,
} from '../../entities/song/new-model/slow-songs';

export const usePlayer = () => {
    const { currentSong } = songModelNew.useSong();
    const [library] = userModel.useSongLibrary();
    const controls = usePlayerMusicControls();
    const isLiked = !!library.find((s) => s.id === currentSong?.id);
    const { loggedIn } = usePrivateAction();
    const { handleToggleLike, performingAction } = useToggleLike(currentSong);
    const isSlowVersion = useIsSlowVersion(currentSong?.id);

    const handleOpen = () => {
        songModelNew.fullscreenPlayer.open();
    };

    const handleMore: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();

        popupModel.events.open({
            content: <SongMoreContextMenu song={currentSong} />,
            height: 345.5,
            e,
        });
    };

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

    const handleSlow = () => {
        if (currentSong) {
            if (isSlowVersion) {
                slowSongsApi.remove(currentSong.id);
                return;
            }
            slowSongsApi.add([currentSong.id]);
        }
    };

    return {
        currentSong,
        controls,
        isLiked,
        handleToggleLike,
        performingAction,
        handleLyrics,
        handleAddToPlaylist,
        handleMore,
        handleShowQueue,
        handleOpen,
        handleSlow,
        isSlowVersion,
    };
};
