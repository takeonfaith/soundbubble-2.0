import { createEvent, sample } from 'effector';
import { useUnit } from 'effector-react';
import { TUploadSongForm } from '../../../features/addSongModal/model';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { Database } from '../../../database';

const uploadSongFx = createEffectWithToast<TUploadSongForm, void>(
    'Uploaded song successfully',
    'Failed to upload song'
);

export const uploadSong = createEvent<TUploadSongForm>();

sample({
    clock: uploadSong,
    target: uploadSongFx,
});

uploadSongFx.use(async (form: TUploadSongForm) => {
    await Database.Songs.uploadSong(form);
});

export const useUploadingSong = () => useUnit(uploadSongFx.pending);
