import { useUnit } from 'effector-react';
import React, { useEffect, useRef } from 'react';
import { SongState } from './entities/song/model/types';
import {
    songModel,
    songModel as songModelNew,
} from './entities/song/new-model';
import {
    $currentTime,
    $isSliding,
} from './entities/song/new-model/current-time';
import { $songSrc } from './entities/song/new-model/slow-songs';
import { useEffectOnce } from './shared/hooks/useEffectOnce';

const audioCtx = new AudioContext();
const analyserNode = audioCtx.createAnalyser();

console.log(audioCtx.state);

const resumeCtx = () => {
    console.log('resume');

    audioCtx.resume();
};

const useAppAudio = () => {
    const { state } = songModelNew.useSong();
    const [isSliding, songSrc, currentTime] = useUnit([
        $isSliding,
        $songSrc,
        $currentTime,
    ]);
    const [volume, isMuted] = songModelNew.useVolume();
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffectOnce(() => {
        handleAudioUpload();
    }, []);

    useEffect(() => {
        if (audioCtx.state === 'suspended') {
            document.addEventListener('click', resumeCtx);
        } else if (audioCtx.state === 'running') {
            document.removeEventListener('click', resumeCtx);
        }
    }, []);

    const handleAudioUpload = () => {
        if (audioRef.current) {
            // Set up Web Audio API
            audioRef.current.crossOrigin = 'anonymous';
            const source = audioCtx.createMediaElementSource(audioRef.current);

            source.connect(analyserNode);
            analyserNode.connect(audioCtx.destination);

            analyserNode.fftSize = 256; // Lower size for faster analysis
            const dataArray = new Uint8Array(analyserNode.frequencyBinCount);

            songModelNew.frequency.setAnalyzerAndAudioData({
                audioData: dataArray,
                analyser: analyserNode,
            });
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume;
        }
    }, [volume, isMuted]);

    const handleOnCanPlay: React.ReactEventHandler<HTMLAudioElement> = () => {
        songModelNew.state.loaded();
    };

    const handleWaiting = () => {
        songModelNew.state.waiting();
    };

    const handlePlaying: React.ReactEventHandler<HTMLAudioElement> = (e) => {
        const newTime = e.currentTarget.currentTime;
        if (Math.abs(newTime - currentTime) > 0.1) {
            if (!isSliding) {
                songModelNew.playback.setCurrentTime(newTime);
                songModelNew.lyrics.nextCurrentLyric(newTime);
            }
        }
    };

    const handleEnded = () => {
        songModelNew.queue.next('from_end_track');
    };

    const handleLoaded = () => {
        if (audioRef.current && audioRef.current.buffered) {
            const bufferedEnd = audioRef.current.buffered.end(
                audioRef.current.buffered.length - 1
            );
            const duration = audioRef.current.duration;
            const percent = (bufferedEnd / duration) * 100;
            console.log(percent);

            if (duration > 0) {
                songModel.playback.loadedPercentApi.set(percent);
            }
        }
    };

    useEffect(() => {
        if (
            audioRef.current &&
            Math.abs(audioRef.current.currentTime - currentTime) > 0.1 &&
            !isSliding
        ) {
            audioRef.current.currentTime = currentTime;
        }
    }, [currentTime, isSliding]);

    // console.log(audioRef.current.currentTime);

    useEffect(() => {
        if (audioRef.current) {
            if (state === SongState.playing) {
                audioRef.current
                    .play()
                    .then(() => {})
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                audioRef.current?.pause();
            }
        }
    }, [state]);

    return {
        audioRef,
        handleEnded,
        handlePlaying,
        handleOnCanPlay,
        handleLoaded,
        songSrc,
        handleWaiting,
    };
};

export const AppAudio = () => {
    const {
        audioRef,
        handleOnCanPlay,
        handlePlaying,
        handleEnded,
        songSrc,
        handleLoaded,
        handleWaiting,
    } = useAppAudio();

    return (
        <audio
            onEnded={handleEnded}
            src={songSrc}
            ref={audioRef}
            // loop={loopMode === LoopMode.loopone}
            onTimeUpdate={handlePlaying}
            onCanPlay={handleOnCanPlay}
            onWaiting={handleWaiting}
            onProgress={handleLoaded}
        />
    );
};
