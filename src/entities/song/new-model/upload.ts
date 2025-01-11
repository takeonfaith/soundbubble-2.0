import { createEvent, sample } from 'effector';
import { useUnit } from 'effector-react';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { Database } from '../../../database';
import { AddSongFormType } from '../../../features/uploadSongModal/model';

type TUploadSongProps = {
    form: AddSongFormType;
    onSuccess?: () => void;
};

const uploadSongFx = createEffectWithToast<TUploadSongProps, void>(
    'Uploaded song successfully',
    'Failed to upload song'
);

export const uploadSong = createEvent<TUploadSongProps>();

sample({
    clock: uploadSong,
    target: uploadSongFx,
});

uploadSongFx.use(async ({ form, onSuccess }) => {
    await Database.Songs.uploadSong(form);
    onSuccess?.();
});

export const useUploadingSong = () => useUnit(uploadSongFx.pending);
