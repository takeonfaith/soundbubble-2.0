import { TPlaylist } from '../../entities/playlist/model/types';
import { userModel } from '../../entities/user/model';

export const useIsPlaylistLiked = (playlist: TPlaylist | undefined | null) => {
    const [playlists] = userModel.useAddedPlaylists();

    return !!playlist && !!playlists.find((s) => s.id === playlist.id);
};
