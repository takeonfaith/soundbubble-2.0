import { isDefined } from '@shared/funcs/isDefined';
import { useUnit } from 'effector-react';
import React, { useEffect, useRef } from 'react';
import { LoopMode } from './entities/song/model/types';
import { songModel as songModelNew } from './entities/song/new-model';
import { $isSliding } from './entities/song/new-model/current-time';

const useAppAudio = () => {
    const { state, lastTime } = songModelNew.useSong();
    const isSliding = useUnit($isSliding);
    const [volume, isMuted] = songModelNew.useVolume();
    const audioRef = useRef<HTMLAudioElement>(null);
    console.log({ lastTime });

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
    const { currentSong, loopMode } = songModelNew.useSong();

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
