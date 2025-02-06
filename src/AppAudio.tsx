import { isDefined } from '@shared/funcs/isDefined';
import { useUnit } from 'effector-react';
import React, { useEffect, useRef } from 'react';
import {
    songModel,
    songModel as songModelNew,
} from './entities/song/new-model';
import { $isSliding } from './entities/song/new-model/current-time';
import { $songSrc } from './entities/song/new-model/slow-songs';
import { useEffectOnce } from './shared/hooks/useEffectOnce';
import { SongState } from './entities/song/model/types';

const audioCtx = new AudioContext();
const analyserNode = audioCtx.createAnalyser();

console.log(audioCtx.state);

const resumeCtx = () => {
    console.log('resume');

    audioCtx.resume();
};

const useAppAudio = () => {
    const { state, lastTime } = songModelNew.useSong();
    const isSliding = useUnit($isSliding);
    const [volume, isMuted] = songModelNew.useVolume();
    const audioRef = useRef<HTMLAudioElement>(null);
    const songSrc = useUnit($songSrc);

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

    const handleWaiting: React.ReactEventHandler<HTMLAudioElement> = () => {
        if (state === SongState.playing) {
            songModelNew.controls.loadAndPlay()
        } else {
            songModelNew.state.load();
        }
    };

    const handlePlaying: React.ReactEventHandler<HTMLAudioElement> = (e) => {
        // console.log({ curr: e.currentTarget.currentTime, isSliding });
        if (!isSliding) {
            songModelNew.playback.setCurrentTime(e.currentTarget.currentTime);
            songModelNew.lyrics.nextCurrentLyric(e.currentTarget.currentTime);
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
        if (audioRef.current && isDefined(lastTime) && !isNaN(lastTime ?? 0)) {
            console.log(lastTime);

            audioRef.current.currentTime = lastTime;
        }
    }, [lastTime]);

    useEffect(() => {
        if (audioRef.current) {
            if (state === 'playing') {
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
