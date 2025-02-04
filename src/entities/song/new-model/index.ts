import { useUnit } from 'effector-react';
import './add-listening';
import {
    $currentTime,
    $lastTime,
    currentTimeApi,
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
    addToQueue,
    next,
    previous,
    toggleLoopMode,
    toggleShuffleMode,
} from './queue';
import {
    $songState,
    load,
    loadAndPlay,
    loadAndShuffle,
    loaded,
    loadSongsThenPlay,
    pause,
    play,
    playPauseQueue,
    shufflePlayPause,
    togglePlayPause,
} from './song-state';
import { $isMuted, $volume, isMutedApi, volumeApi } from './volume';
import { playWave, toggleSlow } from './wave';

export const songModel = {
    useSong: () =>
        useUnit({
            loopMode: $loopMode,
            currentSong: $currentSong,
            queue: $queue,
            state: $songState,
            lastTime: $lastTime,
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
        loadAndShuffle,
        loadSongsThenPlay,
    },
    state: {
        load,
        loaded,
    },
    queue: {
        next,
        previous,
        toggleLoopMode,
        toggleShuffleMode,
        addToQueue,
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
