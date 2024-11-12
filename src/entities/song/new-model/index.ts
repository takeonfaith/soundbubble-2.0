import {
    combine,
    createApi,
    createEffect,
    createEvent,
    createStore,
    sample,
} from 'effector';
import { useUnit } from 'effector-react';
import { debounce } from 'patronum';
import { Database } from '../../../database';
import { $ownPlaylists, $user } from '../../user/model';
import { createQueueObject } from '../lib/createQueueObject';
import { shuffleArray } from '../lib/shuffleArray';
import { LoopMode, SongState, TLoadQueue, TQueue, TSong } from '../model/types';
import { $fullscreenPlayer, fullscreenPlayerApi } from './fullscreen-player';
import { $isMuted, $volume, isMutedApi, volumeApi } from './volume';

type TNextFrom = 'from_next_button' | 'from_end_track';

const addListeningFx = createEffect<
    { queue: TQueue | null; currentSongIndex: number },
    Promise<void>
>();
const loadSongsFx = createEffect<
    { queue: TLoadQueue; currentSongIndex: number },
    { queue: TQueue; currentSongIndex: number }
>();

const updateLastQueueFx = createEffect<
    { userId: string; queue: TQueue; currentSongIndex: number },
    void,
    Error
>();

const updateOwnPlaylistsOrderFx = createEffect<
    {
        userId: string;
        playlistIds: string[];
    },
    void,
    Error
>();

const play = createEvent<{ queue?: TQueue; currentSongIndex?: number }>();
const pause = createEvent();
const stop = createEvent();

const shufflePlay = createEvent<{ queue?: TQueue }>();

const loadAndPlay = createEvent<{
    queue: TLoadQueue;
    currentSongIndex: number;
}>();
const loadAndShuffle = createEvent<{
    queue: TLoadQueue;
}>();

// const addListening = createEvent<TSong>();

const initalize = createEvent<{ queue: TQueue; currentSongIndex: number }>();

const load = createEvent<TSong>();
const loaded = createEvent();

const next = createEvent<TNextFrom>();
const previous = createEvent();

export const $queue = createStore<TQueue | null>(null);
export const $currentSongIndex = createStore<number>(0);
const $shuffleMode = createStore<boolean>(false);
const $loopMode = createStore<LoopMode>(
    (localStorage.getItem('loopMode') as LoopMode | null) ?? LoopMode.noloop
);

const $songState = createStore<SongState | null>(null);
const $currentTime = createStore<number>(0);
// Is needed for changing the audio currentTime in AppAudio
const $lastTime = createStore<number>(-1);

export const $currentSong = combine(
    $queue,
    $currentSongIndex,
    (queue, currentSongIndex) => queue?.songs[currentSongIndex]
);

const $currentSongDuration = $currentSong.map((song) => {
    if (!song) return 0;

    return (song.duration / 2) * 1000;
});

// Add listeting

const triggerAddListeting = createEvent();

const addListening = debounce(triggerAddListeting, $currentSongDuration);

addListening.watch(() => {
    console.log('listening added');
});

const currentTimeApi = createApi($currentTime, {
    reset: () => 0,
    set: (_, value: number) => value,
});

const { toggleLoopMode } = createApi($loopMode, {
    toggleLoopMode: (loopMode) => {
        if (loopMode === LoopMode.noloop) return LoopMode.loopall;

        if (loopMode === LoopMode.loopall) return LoopMode.loopone;

        return LoopMode.noloop;
    },
});

const { toggleShuffleMode } = createApi($shuffleMode, {
    toggleShuffleMode: (shuffleMode) => {
        return !shuffleMode;
    },
});

sample({
    clock: addListening,
    source: {
        state: $songState,
        currentSong: $currentSong,
        queue: $queue,
        currentSongIndex: $currentSongIndex,
    },
    filter: ({ state, currentSong }) =>
        !!currentSong && state === SongState.playing,
    fn: ({ currentSongIndex, queue }) => ({ queue, currentSongIndex }),
    target: addListeningFx,
});

sample({
    clock: currentTimeApi.reset,
    fn: () => 0,
    target: $lastTime,
});

sample({
    clock: currentTimeApi.set,
    fn: () => -1,
    target: $lastTime,
});

const queueApi = createApi($currentSongIndex, {
    // primitives
    pNext: (index) => index + 1,
    pPrevious: (index) => index - 1,
    pToStart: () => 0,
});

const pToEnd = createEvent();

sample({
    clock: pToEnd,
    source: $queue,
    fn: (queue) => (queue?.songs.length ?? 1) - 1,
    target: $currentSongIndex,
});

// Trigger add listeting on this events
sample({
    clock: [play, shufflePlay, previous, next],
    target: triggerAddListeting,
});

// #region Play

sample({
    clock: initalize,
    fn: ({ currentSongIndex }) => currentSongIndex,
    target: $currentSongIndex,
});

sample({
    clock: initalize,
    fn: ({ queue }) => queue,
    target: $queue,
});

// If song chaged, load
sample({
    clock: play,
    source: { user: $user, currentSong: $currentSong },
    filter: ({ currentSong }, { queue, currentSongIndex }) => {
        return (
            !currentSong ||
            (!!queue &&
                currentSongIndex !== undefined &&
                currentSong.id !== queue.songs[currentSongIndex].id)
        );
    },
    fn: ({ user }, { queue, currentSongIndex }) => {
        return {
            currentSongIndex: currentSongIndex as number,
            queue: queue as TQueue,
            userId: user?.uid,
        };
    },
    target: initalize,
});

sample({
    clock: shufflePlay,
    source: $queue,
    filter: (q, { queue }) => !!(queue ?? q),
    fn: (q, { queue }) => {
        const finalQueue = queue ?? q;
        return {
            currentSongIndex: 0,
            queue: {
                ...finalQueue,
                songs: shuffleArray(finalQueue?.songs as TSong[]),
            } as TQueue,
        };
    },
    target: initalize,
});

sample({
    clock: shufflePlay,
    source: $shuffleMode,
    filter: (shuffleMode) => !shuffleMode,
    target: toggleShuffleMode,
});

sample({
    clock: play,
    source: $songState,
    filter: (state) => state === SongState.playing,
    target: pause,
});

sample({
    clock: play,
    source: $songState,
    filter: (state) => state === SongState.pause,
    fn: () => SongState.playing,
    target: $songState,
});

// #region Pause

sample({
    clock: pause,
    fn: () => {
        return SongState.pause;
    },
    target: $songState,
});

// #endregion

// #region Load

sample({
    clock: $currentSong,
    filter: Boolean,
    fn: (song) => song,
    target: load,
});

sample({
    clock: load,
    fn: () => SongState.loading,
    target: $songState,
});

sample({
    clock: loaded,
    fn: () => SongState.playing,
    target: $songState,
});

//#endregion

// #region Next

// End of queue, stop at the last track
sample({
    clock: next,
    source: {
        loopMode: $loopMode,
        queue: $queue,
        currentSongIndex: $currentSongIndex,
    },
    filter: ({ loopMode, queue, currentSongIndex }) =>
        loopMode === LoopMode.noloop &&
        (queue?.songs.length ?? 1) - 1 === currentSongIndex,
    fn: () => {
        console.log('i was here');
    },
    target: stop,
});

// // End of queue, loopall mode, go to start
sample({
    clock: next,
    source: {
        loopMode: $loopMode,
        queue: $queue,
        currentSongIndex: $currentSongIndex,
    },
    filter: ({ loopMode, queue, currentSongIndex }) =>
        loopMode === LoopMode.loopall &&
        (queue?.songs.length ?? 1) - 1 === currentSongIndex,
    target: queueApi.pToStart,
});

// Next track if from button
sample({
    clock: next,
    source: {
        loopMode: $loopMode,
        queue: $queue,
        currentSongIndex: $currentSongIndex,
    },
    filter: ({ loopMode, queue, currentSongIndex }, nextFrom) =>
        loopMode === LoopMode.loopone &&
        nextFrom === 'from_next_button' &&
        (queue?.songs.length ?? 1) - 1 > currentSongIndex,
    target: queueApi.pNext,
});

// Next track
sample({
    clock: next,
    source: {
        loopMode: $loopMode,
        queue: $queue,
        currentSongIndex: $currentSongIndex,
    },
    filter: ({ loopMode, queue, currentSongIndex }) =>
        loopMode !== LoopMode.loopone &&
        (queue?.songs.length ?? 1) - 1 > currentSongIndex,
    target: queueApi.pNext,
});

// Start track from beginning if loopMode === LoopMode.loopone
sample({
    clock: next,
    source: {
        loopMode: $loopMode,
    },
    filter: ({ loopMode }, nextFrom) =>
        loopMode === LoopMode.loopone && nextFrom === 'from_end_track',
    fn: () => {
        console.log(
            'Start track from beginning if loopMode === LoopMode.loopone'
        );
    },
    target: previous,
});

// #endregion

// #region Previous

// Start of queue, go to the end of queue
sample({
    clock: previous,
    source: {
        loopMode: $loopMode,
        currentSongIndex: $currentSongIndex,
        currentTime: $currentTime,
    },
    filter: ({ loopMode, currentSongIndex, currentTime }) =>
        currentTime <= 5 &&
        currentSongIndex === 0 &&
        loopMode === LoopMode.loopall,
    target: pToEnd,
});

// Previous track
sample({
    clock: previous,
    source: {
        currentTime: $currentTime,
        currentSongIndex: $currentSongIndex,
        loopMode: $loopMode,
    },
    filter: ({ currentTime, currentSongIndex, loopMode }) => {
        return (
            currentTime <= 5 &&
            currentSongIndex !== 0 &&
            loopMode !== LoopMode.loopone
        );
    },
    target: queueApi.pPrevious,
});

// Start track from the beginning if currentTime is more than 5 sec
sample({
    clock: previous,
    source: {
        currentTime: $currentTime,
    },
    filter: ({ currentTime }) => {
        console.log('reset song');

        return currentTime > 5;
    },
    target: currentTimeApi.reset,
});

// #endregion

// #region Stop track

sample({
    clock: stop,
    fn: () => 0,
    target: $lastTime,
});

sample({
    clock: stop,
    target: pause,
});

sample({
    clock: stop,
    target: queueApi.pToStart,
});

// #endregion

// #region Load songs and play them

sample({
    clock: loadAndPlay,
    source: $queue,
    filter: (currentQueue, { queue }) =>
        !currentQueue || currentQueue.id !== queue.id,
    fn: (_, props) => props,
    target: loadSongsFx,
});

// sorting own playlists when play clicked

sample({
    clock: [loadAndPlay, initalize],
    source: $ownPlaylists,
    filter: (ownPlaylists, { queue }) =>
        !!ownPlaylists.find((playlist) => playlist.id === queue.id),
    fn: (ownPlaylists, { queue }) => {
        const playlistIndex = ownPlaylists.findIndex(
            (playlist) => playlist.id === queue.id
        );
        const newOwnPlaylists = [...ownPlaylists];
        newOwnPlaylists.splice(playlistIndex, 1);
        return [ownPlaylists[playlistIndex], ...newOwnPlaylists];
    },
    target: $ownPlaylists,
});

sample({
    clock: [loadAndPlay, initalize],
    source: { ownPlaylists: $ownPlaylists, user: $user },
    filter: ({ ownPlaylists, user }, { queue }) =>
        !!user && !!ownPlaylists.find((playlist) => playlist.id === queue.id),
    fn: ({ ownPlaylists, user }, { queue }) => {
        const playlistIndex = ownPlaylists.findIndex(
            (playlist) => playlist.id === queue.id
        );
        const newOwnPlaylists = [...ownPlaylists];
        newOwnPlaylists.splice(playlistIndex, 1);
        const res = [ownPlaylists[playlistIndex], ...newOwnPlaylists];
        return {
            userId: user!.uid,
            playlistIds: res.map((playlist) => playlist.id).reverse(),
        };
    },
    target: updateOwnPlaylistsOrderFx,
});

updateOwnPlaylistsOrderFx.use(
    async ({ userId, playlistIds }) =>
        await Database.Users.updateOwnPlaylistsOrder(userId, playlistIds)
);

sample({
    clock: loadAndPlay,
    source: { queue: $queue, state: $songState },
    filter: ({ queue: currentQueue }, { queue }) => {
        return !!currentQueue && currentQueue.id === queue.id;
    },
    fn: ({ queue: currentQueue }, { currentSongIndex }) => ({
        queue: currentQueue as TQueue,
        currentSongIndex,
    }),
    target: play,
});

sample({
    clock: loadSongsFx.doneData,
    target: initalize,
});

loadSongsFx.use(async ({ queue, currentSongIndex }) => {
    const songs = await Database.Songs.getSongsByUids(queue.songIds);
    const result = createQueueObject({
        name: queue.name,
        id: queue.id,
        imageUrl: queue.imageUrl,
        url: queue.url,
        songs,
    });

    return { queue: result, currentSongIndex };
});

// #endregion

// #region Load songs and shuffle them

sample({
    clock: loadAndShuffle,
    source: $queue,
    filter: (currentQueue, { queue }) =>
        !currentQueue || currentQueue.id !== queue.id,
    fn: (_, { queue }) => ({ queue, currentSongIndex: 0 }),
    target: loadSongsFx,
});

// If queue loaded, just shuffle it
sample({
    clock: loadAndShuffle,
    source: $queue,
    filter: (currentQueue, { queue }) =>
        !!currentQueue && currentQueue.id === queue.id,
    fn: (currentQueue) => ({ queue: currentQueue as TQueue }),
    target: shufflePlay,
});

sample({
    clock: loadSongsFx.doneData,
    source: $queue,
    fn: (q, { queue }) => {
        const finalQueue = queue ?? q;
        return {
            currentSongIndex: 0,
            queue: {
                ...finalQueue,
                songs: shuffleArray(finalQueue?.songs as TSong[]),
            } as TQueue,
        };
    },
    target: initalize,
});

loadSongsFx.use(async ({ queue, currentSongIndex }) => {
    const songs = await Database.Songs.getSongsByUids(queue.songIds);
    const result = createQueueObject({
        name: queue.name,
        id: queue.id,
        imageUrl: queue.imageUrl,
        url: queue.url,
        songs,
    });

    return { queue: result, currentSongIndex };
});

// #endregion

addListeningFx.use(async ({ queue, currentSongIndex }) => {
    console.log('addListeningFx');

    Database.Songs.addListening(queue, currentSongIndex);
});

// #region Last queue

// const loadLastQueueFx = createEffect<
//     string,
//     { queue: TLastQueue | null; songs: TSong[] } | null,
//     Error
// >();

// const loadLastQueue = createEvent<string>();

// sample({
//     clock: $user,
//     filter: userIsLoggedIn,
//     fn: (user) => user!.uid,
//     target: loadLastQueue,
// });

// sample({
//     clock: loadLastQueue,
//     target: loadLastQueueFx,
// });

// sample({
//     clock: loadLastQueueFx.doneData,
//     filter: (res) => res !== null,
//     fn: (res) => {
//         const { queue, songs } = res!;
//         return {
//             queue: createQueueObject({ ...queue, songs }),
//             currentSongIndex: res!.queue?.currentSongIndex ?? 0,
//         };
//     },
//     target: initalize,
// });

// loadLastQueueFx.use(async (userId) => {
//     console.log({ userId });

//     return await Database.Songs.loadLastQueue(userId);
// });

// updateLastQueueFx.use(async ({ userId, queue, currentSongIndex }) => {
//     await Database.Songs.updateLastQueue(userId, {
//         ...queue,
//         songIds: queue.songs.map((s) => s.id),
//         currentSongIndex,
//         userId,
//     });
// });

// #endregion

// TODO: Разбить на разные unit'ы, а то триггерит ненужный ререндер
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
        play,
        shufflePlay,
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
