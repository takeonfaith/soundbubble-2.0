import { useUnit } from 'effector-react';
import { useCallback } from 'react';
import { songModel as songModelNew } from '../../../entities/song/new-model';
import { $loadedPercent } from '../../../entities/song/new-model/current-time';
import { $currentSongDuration } from '../../../entities/song/new-model/duration';
import {
    $loopSegment,
    loopSegmentApi,
} from '../../../entities/song/new-model/queue';
import { playWaveFx } from '../../../entities/song/new-model/wave';

export const usePlayerMusicControls = () => {
    const { currentSong, state, loopMode, shuffleMode, queue } =
        songModelNew.useSong();
    const [duration, loadedPercent, loopSegment] = useUnit([
        $currentSongDuration,
        $loadedPercent,
        $loopSegment,
        playWaveFx.pending,
    ]);
    const currentTime = songModelNew.useCurrentTime();

    const disableNextSongButton = false;

    const handleChangeLoopSegment = (range: number[]) => {
        loopSegmentApi.set(range);
    };

    const handleAfterChangeLoopSegment = ([start]: number[]) => {
        songModelNew.playback.setCurrentTime(start);
    };

    const handlePlay = useCallback(() => {
        if (!queue) {
            songModelNew.wave.playWave();
        } else {
            songModelNew.controls.togglePlayPause();
        }
    }, [queue]);

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

    const handleNext = () => {
        songModelNew.queue.next('from_next_button');
    };

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
        loopSegment,
        handleChangeLoopSegment,
        handleAfterChangeLoopSegment,
    };
};
