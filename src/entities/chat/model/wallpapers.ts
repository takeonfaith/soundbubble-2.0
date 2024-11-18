import { createEffect, createEvent, createStore, sample } from 'effector';
import { Database } from '../../../database';
import { TWallpaper } from './types';
import { toastModel } from '../../../layout/toast/model';

export const loadWallpapersFx = createEffect<void, TWallpaper[], Error>();

export const loadWallpapers = createEvent();

export const $wallpapers = createStore<TWallpaper[]>([]);

sample({
    clock: loadWallpapers,
    source: $wallpapers,
    filter: (wallpapers) => wallpapers.length === 0,
    target: loadWallpapersFx,
});

sample({
    clock: loadWallpapersFx.doneData,
    fn: (res) => res,
    target: $wallpapers,
});

loadWallpapersFx.failData.watch((err) => {
    toastModel.events.add({
        type: 'error',
        message: 'Error loading wallpapers',
        reason: err.message,
    });
});

loadWallpapersFx.use(async () => {
    const res = await Database.Chats.loadWallpapers();
    return res;
});
