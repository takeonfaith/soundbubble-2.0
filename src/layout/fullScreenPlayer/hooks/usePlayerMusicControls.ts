import { useCallback, useEffect } from 'react';
import { songModel } from '../../../entities/song/model';
import { songModel as songModelNew } from '../../../entities/song/new-model';

export const usePlayerMusicControls = () => {
    const { currentSong, state, loopMode, shuffleMode } =
        songModelNew.useSong();
    const currentTime = songModelNew.useCurrentTime();

    const disableNextSongButton = false;

    const handlePlay = useCallback(() => songModelNew.controls.play({}), []);

    const handleChangeTime: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        songModel.playblack.setIsSliding(true);
        songModel.playblack.setCurrentTime(+e.target.value);
    };

    const handleMouseUp: React.MouseEventHandler<HTMLInputElement> = (e) => {
        songModel.playblack.setIsSliding(false);
        songModel.playblack.setLastRangeValue(+e.currentTarget.value);
        songModel.lyrics.calculateCurrentLyric(+e.currentTarget.value);
    };

    const handleLoopMode = () => {
        songModelNew.queue.toggleLoopMode();
    };

    const handleShuffle = () => {
        songModelNew.queue.toggleShuffleMode();
    };

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            // console.log(event.key);

            if (event.key === 'Space') {
                handlePlay();
            }
        },
        [handlePlay]
    );

    useEffect(() => {
        addEventListener('keydown', handleKeyDown);

        return () => removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return {
        currentTime,
        duration: currentSong?.duration ?? 0,
        colors: currentSong?.imageColors,
        state,
        loopMode,
        shuffle: shuffleMode,
        disableNextSongButton,
        handleShuffle,
        handleLoopMode,
        onPlay: handlePlay,
        onPrev: songModelNew.queue.previous,
        onNext: songModelNew.queue.next,
        handleMouseUp,
        handleChangeTime,
    };
};
