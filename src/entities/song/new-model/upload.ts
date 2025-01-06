import { createEvent, sample } from 'effector';
import { useUnit } from 'effector-react';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { Database } from '../../../database';
import { AddSongFormType } from '../../../features/uploadSongModal/model';

const uploadSongFx = createEffectWithToast<AddSongFormType, void>(
    'Uploaded song successfully',
    'Failed to upload song'
);

export const uploadSong = createEvent<AddSongFormType>();

sample({
    clock: uploadSong,
    target: uploadSongFx,
});

uploadSongFx.use(async (form: AddSongFormType) => {
    await Database.Songs.uploadSong(form);
});

export const useUploadingSong = () => useUnit(uploadSongFx.pending);
