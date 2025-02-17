import { useUnit } from 'effector-react';
import './add-listening';
import {
    $currentTime,
    currentTimeApi,
    loadedPercentApi,
    setLastRangeValue,
    slidingApi,
} from './current-time';
import { setPercent } from './duration-current-time';
import { setAnalyzerAndAudioData } from './frequencies';
import { $fullscreenPlayer, fullscreenPlayerApi } from './fullscreen-player';
import {
    calculateCurrentLyric,
    isLyricsVisibleNowApi,
    nextCurrentLyric,
} from './lyrics';
import {
    $currentSong,
    $currentSongIndex,
    $loopMode,
    $queue,
    $shuffleMode,
    addAfterCurrentSongInQueue,
    addToTheEndOfQueue,
    next,
    previous,
    toggleLoopMode,
    toggleShuffleMode,
} from './queue';
import {
    $songState,
    load,
    loadAndPlay,
    loaded,
    loadSongsThenPlay,
    loadSongsThenShuffle,
    pause,
    play,
    playPauseQueue,
    shufflePlayPause,
    togglePlayPause,
} from './song-state';
import { $isMuted, $volume, isMutedApi, volumeApi } from './volume';
import { playWave, toggleSlow } from './wave';
import { waiting } from './song-state/waiting';

export const songModel = {
    useSong: () =>
        useUnit({
            loopMode: $loopMode,
            currentSong: $currentSong,
            queue: $queue,
            state: $songState,
            currentSongIndex: $currentSongIndex,
            shuffleMode: $shuffleMode,
        }),
    useCurrentTime: () => useUnit($currentTime),
    useFullScreenPlayer: () => useUnit($fullscreenPlayer),
    useVolume: () => useUnit([$volume, $isMuted]),
    controls: {
        playPauseQueue,
        togglePlayPause,
        play,
        shufflePlayPause,
        pause,
        stop,
        loadAndPlay,
        loadSongsThenPlay,
        loadSongsThenShuffle,
    },
    state: {
        load,
        loaded,
        waiting,
    },
    queue: {
        next,
        previous,
        toggleLoopMode,
        toggleShuffleMode,
        addAfterCurrentSongInQueue,
        addToTheEndOfQueue,
    },
    lyrics: {
        calculateCurrentLyric,
        nextCurrentLyric,
        isLyricsVisibleNowApi,
    },
    playback: {
        setCurrentTime: currentTimeApi.set,
        addCurrentTime: currentTimeApi.add,
        setPercent: setPercent,
        setIsSliding: slidingApi.setIsSliding,
        setLastRangeValue,
        loadedPercentApi,
    },
    fullscreenPlayer: {
        ...fullscreenPlayerApi,
    },
    volume: {
        ...volumeApi,
        ...isMutedApi,
    },
    frequency: {
        setAnalyzerAndAudioData,
    },
    wave: {
        playWave,
        toggleSlow,
    },
};
