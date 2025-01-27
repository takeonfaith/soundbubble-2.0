import { createApi, createStore } from 'effector';
import { useUnit } from 'effector-react';

const $slowSongs = createStore<string[]>([]);

export const slowSongsApi = createApi($slowSongs, {
    add: (store, id: string[]) => [...store, ...id],
    remove: (store, id: string) => store.filter((s) => s !== id),
    reset: () => [],
});

export const useIsSlowVersion = (songId: string | undefined) => {
    const slowSong = useUnit($slowSongs);
    return songId ? slowSong.includes(songId) : false;
};
