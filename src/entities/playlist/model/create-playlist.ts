import { createEvent, sample } from 'effector';

import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { TUploadPlaylist, TPlaylist } from './types';
import { Database } from '../../../database';
import { addOwnPlaylistToLibrary } from '../../user/model/library/playlists';
import { translate } from '../../../i18n';

type CreatePlaylistProps = {
    playlist: TUploadPlaylist;
    onSuccess?: (playlist: TPlaylist) => void;
};

export const createPlaylistsFx = createEffectWithToast<CreatePlaylistProps, TPlaylist>(
    translate('playlist_created'),
    'Failed to create playlist'
);

export const createPlaylist = createEvent<CreatePlaylistProps>();

sample({
    clock: createPlaylist,
    target: createPlaylistsFx,
});

sample({
    clock: createPlaylistsFx.doneData,
    fn: (playlist) => playlist,
    target: addOwnPlaylistToLibrary,
});

createPlaylistsFx.use(async ({ playlist, onSuccess }: CreatePlaylistProps) => {
    const res = await Database.Playlists.createPlaylist(playlist);
    onSuccess?.(res);
    return res;
});
