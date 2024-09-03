import { useCallback, useEffect } from 'react';
import { getAuthorsToString } from '../../entities/song/lib/getAuthorsToString';
import { songModel } from '../../entities/song/model';

export const useMediaMetadata = () => {
    const { currentSong } = songModel.useSong();
    const { queue } = songModel.queue.useQueue();
    const { currentTime } = songModel.playblack.usePlayback();

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
        console.log('play');

        songModel.events.play();
    }

    function pauseSong() {
        console.log('pause');

        songModel.events.pause();
    }

    const nextSong = () => {
        songModel.queue.next();
    };

    const prevSong = () => {
        songModel.queue.previous();
    };

    useEffect(() => {
        if ('mediaSession' in navigator && currentSong !== null) {
            navigator.mediaSession.metadata = new window.MediaMetadata({
                title: currentSong.name,
                artist: getAuthorsToString(currentSong.authors),
                album: queue.name ?? '-',
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
            navigator.mediaSession.setActionHandler('stop', pauseSong);
            navigator.mediaSession.setActionHandler('nexttrack', () => {
                nextSong();
                updatePositionState();
            });
            navigator.mediaSession.setActionHandler('previoustrack', () => {
                prevSong();
                updatePositionState();
            });
        }
    }, [currentSong, queue.name, updatePositionState]);
};
