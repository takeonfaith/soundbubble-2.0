import { useUnit } from 'effector-react';
import { useCallback, useEffect } from 'react';
import { songModel as songModelNew } from '../../../entities/song/new-model';
import { $currentSongDuration } from '../../../entities/song/new-model/duration';
import { $loadedPercent } from '../../../entities/song/new-model/current-time';

export const usePlayerMusicControls = () => {
    const { currentSong, state, loopMode, shuffleMode } =
        songModelNew.useSong();
    const [duration, loadedPercent] = useUnit([
        $currentSongDuration,
        $loadedPercent,
    ]);
    const currentTime = songModelNew.useCurrentTime();

    const disableNextSongButton = false;

    const handlePlay = useCallback(
        () => songModelNew.controls.togglePlayPause(),
        []
    );

    const handleChangeTime = (time: number) => {
        songModelNew.playback.setIsSliding(true);
        songModelNew.playback.setCurrentTime(time);
    };

    const handleMouseUp = (time: number) => {
        songModelNew.playback.setIsSliding(false);
        songModelNew.playback.setLastRangeValue(time);
        songModelNew.lyrics.calculateCurrentLyric(time);
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

    const handleNext = () => {
        songModelNew.queue.next('from_next_button');
    };

    useEffect(() => {
        addEventListener('keydown', handleKeyDown);

        return () => removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return {
        currentTime,
        duration,
        colors: currentSong?.imageColors,
        state,
        loopMode,
        shuffle: shuffleMode,
        disableNextSongButton,
        handleShuffle,
        handleLoopMode,
        onPlay: handlePlay,
        onPrev: songModelNew.queue.previous,
        onNext: handleNext,
        handleMouseUp,
        handleChangeTime,
        loadedPercent,
    };
};
