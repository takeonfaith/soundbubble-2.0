import { createEffect, createEvent, createStore, sample } from 'effector';
import { TSong } from '../../../entities/song/model/types';
import { Database } from '../../../database';
import { TPlaylist } from '../../../entities/playlist/model/types';
import { TUser } from '../../../entities/user/model/types';
import { TRENDING_ITEMS_QUANTITY } from './constants';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';

const $topSongs = createStore<TSong[]>([]);
const $topAuthors = createStore<TUser[]>([]);
const $topAlbums = createStore<TPlaylist[]>([]);

const getTopSongsFx = createEffect<void, TSong[], Error>();
const getTopAlbumsFx = createEffect<void, TPlaylist[], Error>();
const getTopAuthorsFx = createEffect<void, TUser[], Error>();

const getTopSongs = createEvent();
const getTopAuthors = createEvent();
const getTopAlbums = createEvent();

sample({
    clock: getTopSongs,
    source: $topSongs,
    filter: (songs) => !songs.length,
    target: getTopSongsFx,
});

sample({
    clock: getTopAuthors,
    source: $topAuthors,
    filter: (authors) => !authors.length,
    target: getTopAuthorsFx,
});

sample({
    clock: getTopAlbums,
    source: $topAlbums,
    filter: (albums) => !albums.length,
    target: getTopAlbumsFx,
});

sample({
    clock: getTopSongsFx.doneData,
    fn: (result) => result,
    target: $topSongs,
});

sample({
    clock: getTopAuthorsFx.doneData,
    fn: (result) => result,
    target: $topAuthors,
});

sample({
    clock: getTopAlbumsFx.doneData,
    fn: (result) => result,
    target: $topAlbums,
});

getTopSongsFx.use(async () => {
    return await Database.Songs.getTopSongs(TRENDING_ITEMS_QUANTITY);
});

getTopAlbumsFx.use(async () => {
    return await Database.Playlists.getTopAlbums(TRENDING_ITEMS_QUANTITY);
});

getTopAuthorsFx.use(async () => {
    return await Database.Users.getTopAuthors(
        TRENDING_ITEMS_QUANTITY,
        'subscribers'
    );
});

export const trendsModel = {
    useSongs: () => {
        useEffect(() => {
            trendsModel.events.getTopSongs();
        }, []);

        return useUnit([$topSongs, getTopSongsFx.pending]);
    },
    useAlbums: () => {
        useEffect(() => {
            trendsModel.events.getTopAlbums();
        }, []);

        return useUnit([$topAlbums, getTopAlbumsFx.pending]);
    },
    useAuthors: () => {
        useEffect(() => {
            trendsModel.events.getTopAuthors();
        }, []);

        return useUnit([$topAuthors, getTopAuthorsFx.pending]);
    },
    events: {
        getTopAlbums,
        getTopSongs,
        getTopAuthors,
    },
};
