import { createEffect, createEvent, sample } from 'effector';
import { Database } from '../../../database';
import { TUploadSongForm } from '../../../features/addSongModal/model';
import { toastModel } from '../../../layout/toast/model';
import { useUnit } from 'effector-react';

const uploadSongFx = createEffect(async (form: TUploadSongForm) => {
    await Database.Songs.uploadSong(form);
});

uploadSongFx.doneData.watch(() => {
    toastModel.events.show({
        message: 'Song uploaded',
        type: 'success',
        duration: 5000,
    });
});

uploadSongFx.failData.watch((error) => {
    toastModel.events.show({
        message: 'Failed to upload song',
        type: 'error',
        reason: error.message,
        duration: 5000,
    });
});

export const uploadSong = createEvent<TUploadSongForm>();

sample({
    clock: uploadSong,
    target: uploadSongFx,
});

export const useUploadingSong = () => useUnit(uploadSongFx.pending);
