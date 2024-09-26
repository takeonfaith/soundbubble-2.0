import { useCallback, useEffect } from 'react';
import { getAuthorsToString } from '../../entities/song/lib/getAuthorsToString';
import { songModel as songModelNew } from '../../entities/song/new-model';

export const useMediaMetadata = () => {
    const { currentSong, queue } = songModelNew.useSong();
    const currentTime = songModelNew.useCurrentTime();

    const updatePositionState = useCallback(() => {
        if (currentSong) {
            navigator.mediaSession.setPositionState({
                duration: currentSong.duration,
                playbackRate: 30,
                position: currentTime,
            });
        }
    }, [currentSong, currentTime]);

    function playSong() {
        songModelNew.controls.play({});
    }

    function pauseSong() {
        songModelNew.controls.pause();
    }

    const nextSong = () => {
        songModelNew.queue.next('from_end_track');
    };

    const prevSong = () => {
        songModelNew.queue.previous();
    };

    const stopSong = () => {
        songModelNew.controls.stop();
    };

    useEffect(() => {
        if ('mediaSession' in navigator && !!currentSong) {
            navigator.mediaSession.metadata = new window.MediaMetadata({
                title: currentSong.name,
                artist: getAuthorsToString(currentSong.authors),
                album: '-',
                artwork: [
                    {
                        src: currentSong.cover,
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            });

            navigator.mediaSession.setActionHandler('play', playSong);
            navigator.mediaSession.setActionHandler('pause', pauseSong);
            navigator.mediaSession.setActionHandler('stop', stopSong);
            navigator.mediaSession.setActionHandler('nexttrack', () => {
                nextSong();
                updatePositionState();
            });
            navigator.mediaSession.setActionHandler('previoustrack', () => {
                prevSong();
                updatePositionState();
            });
        }
    }, [currentSong, queue, updatePositionState]);
};
