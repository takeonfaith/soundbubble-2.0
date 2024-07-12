import { TLyricsStore, TPlaybackStore, TQueueStore, TStore } from './types';

export const DEFAULT_STORE: TStore = {
    currentSong: null,
    loaded: false,
    state: null,
};

export const PLAYBACK_DEFAULT_STORE: TPlaybackStore = {
    currentTime: 0,
    duration: 0,
    isSliding: false,
    lastRangeValue: null,
};

export const QUEUE_DEFAULT_STORE: TQueueStore = {
    currentSongIndex: null,
    songs: [],
    name: null,
    url: null,
    image: null,
    shuffle: false,
    willGoToPrevTrack: true,
};

export const LYRICS_DEFAULT_STORE: TLyricsStore = {
    lyrics: [],
    currentLyricIndex: 0,
};

export const PREVIOUS_TRACK_THRESHOLD = 5;
