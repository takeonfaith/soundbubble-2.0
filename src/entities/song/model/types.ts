export type TAuthor = {
    uid: string;
    displayName: string;
    photoURL: string;
};

export type TLyric = { text: string; startTime: number | 'undefined' };

export type TSong = {
    name: string;
    id: string;
    releaseDate: string;
    songSrc: string;
    listens: number;
    cover: string;
    authors: TAuthor[];
    imageColors: string[];
    duration: number;
    hasLyrics: boolean;
    genres?: string[];
    langs?: string[];
    moods?: string[];
};

export enum SongState {
    playing = 'playing',
    pause = 'pause',
    loading = 'loading',
    loadingThenPlay = 'loading-then-play',
    loaded = 'loaded',
}

export type TStore = {
    currentSong: TSong | null;
    state: SongState | null;
    loaded: boolean;
};

export type TPlaybackStore = {
    currentTime: number;
    duration: number;
    isSliding: boolean;
    lastRangeValue: number | null;
};

export enum LoopMode {
    noloop,
    loopall,
    loopone,
}

export type TQueueStore = {
    songs: TSong[];
    currentSongIndex: number | null;
    name: string | null;
    url: string | null;
    image: string | null | undefined;
    willGoToPrevTrack?: boolean;
    shuffle: boolean;
};

export type TLyricsStore = {
    lyrics: TLyric[];
    currentLyricIndex: number;
};

export type TQueue = {
    songs: TSong[];
    name: string;
    id: string;
    url: string;
    imageUrl: string;
};

export type TLoadQueue = Omit<TQueue, 'songs'> & { songIds: string[] };

export type TLastQueue = TLoadQueue & {
    currentSongIndex: number;
    userId: string;
};

export type TNextFrom = 'from_next_button' | 'from_end_track';
