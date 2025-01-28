import { useUnit } from 'effector-react';
import {
    $lastTime,
    $currentTime,
    currentTimeApi,
    slidingApi,
    setLastRangeValue,
} from './current-time';
import { $fullscreenPlayer, fullscreenPlayerApi } from './fullscreen-player';
import {
    $loopMode,
    $currentSong,
    $queue,
    $currentSongIndex,
    $shuffleMode,
    next,
    toggleLoopMode,
    toggleShuffleMode,
    previous,
    addToQueue,
} from './queue';
import {
    $songState,
    shufflePlayPause,
    loadAndPlay,
    loadAndShuffle,
    load,
    loaded,
    pause,
    play,
    playPauseQueue,
    togglePlayPause,
    loadSongsThenPlay,
} from './song-state';
import { $volume, $isMuted, volumeApi, isMutedApi } from './volume';
import './add-listening';
import { calculateCurrentLyric, nextCurrentLyric } from './lyrics';
import { setAnalyzerAndAudioData } from './frequencies';
import { playWave, toggleSlow } from './wave';
import { setPercent } from './duration-current-time';

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
