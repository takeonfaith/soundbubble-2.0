import { useUnit } from 'effector-react';
import { $lastTime, $currentTime, currentTimeApi } from './current-time';
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
} from './song-state';
import { $volume, $isMuted, volumeApi, isMutedApi } from './volume';
import './add-listening';

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
    },
    playback: {
        setCurrentTime: currentTimeApi.set,
    },
    fullscreenPlayer: {
        ...fullscreenPlayerApi,
    },
    volume: {
        ...volumeApi,
        ...isMutedApi,
    },
};
