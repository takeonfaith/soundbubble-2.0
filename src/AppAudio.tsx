import { isDefined } from '@shared/funcs/isDefined';
import { useUnit } from 'effector-react';
import React, { useEffect, useRef } from 'react';
import { songModel as songModelNew } from './entities/song/new-model';
import { $isSliding } from './entities/song/new-model/current-time';
import { useEffectOnce } from './shared/hooks/useEffectOnce';

const useAppAudio = () => {
    const { state, lastTime } = songModelNew.useSong();
    const isSliding = useUnit($isSliding);
    const [volume, isMuted] = songModelNew.useVolume();
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffectOnce(() => {
        handleAudioUpload();
    }, []);

    const handleAudioUpload = () => {
        if (audioRef.current) {
            // Set up Web Audio API
            audioRef.current.crossOrigin = 'anonymous';
            const audioCtx = new AudioContext();
            const analyserNode = audioCtx.createAnalyser();
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

    const handlePlaying: React.ReactEventHandler<HTMLAudioElement> = (e) => {
        if (!isSliding) {
            songModelNew.playback.setCurrentTime(e.currentTarget.currentTime);
            songModelNew.lyrics.nextCurrentLyric(e.currentTarget.currentTime);
        }
    };

    const handleEnded = () => {
        songModelNew.queue.next('from_end_track');
    };

    useEffect(() => {
        if (audioRef.current && isDefined(lastTime) && !isNaN(lastTime ?? 0)) {
            audioRef.current.currentTime = lastTime;
        }
    }, [lastTime]);

    useEffect(() => {
        if (audioRef.current) {
            if (state === 'playing') {
                audioRef.current.play();
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
    };
};

export const AppAudio = () => {
    const { audioRef, handleOnCanPlay, handlePlaying, handleEnded } =
        useAppAudio();
    const { currentSong } = songModelNew.useSong();

    return (
        <audio
            onEnded={handleEnded}
            src={currentSong?.songSrc}
            ref={audioRef}
            // loop={loopMode === LoopMode.loopone}
            onTimeUpdate={handlePlaying}
            onCanPlay={handleOnCanPlay}
        />
    );
};
