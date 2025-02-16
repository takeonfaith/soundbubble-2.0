import { createEvent, sample } from 'effector';
import { Database } from '../../../database';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { $user } from '../../user/model/user';
import { TPlaylist } from './types';
import { $currentPlaylist, $currentPlaylistSongs } from './playlist';
import { removeOwnPlaylistFromLibrary } from '../../user/model/library/playlists';

export const deletePlaylistFx = createEffectWithToast<
    { playlist: TPlaylist; onSuccess?: (playlist: TPlaylist) => void },
    TPlaylist
>('Playlist Deleted', 'Failed to delete playlist');

export const deletePlaylist = createEvent<{
    playlist: TPlaylist;
    onSuccess?: (playlist: TPlaylist) => void;
}>();

sample({
    clock: deletePlaylist,
    source: $user,
    filter: (currentUser, { playlist }) =>
        !!playlist.authors.find((author) => author.uid === currentUser?.uid),
    fn: (_, props) => props,
    target: deletePlaylistFx,
});

sample({
    clock: deletePlaylistFx.doneData,
    fn: () => null,
    target: $currentPlaylist,
});

sample({
    clock: deletePlaylistFx.doneData,
    fn: () => [],
    target: $currentPlaylistSongs,
});

sample({
    clock: deletePlaylistFx.doneData,
    target: removeOwnPlaylistFromLibrary,
});

deletePlaylistFx.use(async ({ playlist, onSuccess }) => {
    await Database.Playlists.deletePlaylist(playlist);
    onSuccess?.(playlist);
    return playlist;
});
