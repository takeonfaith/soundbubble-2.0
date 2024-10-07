import { TPlaylist } from '../../entities/playlist/model/types';
import { userModel } from '../../entities/user/model';

export const useIsPlaylistLiked = (playlist: TPlaylist | undefined | null) => {
    const [playlists] = userModel.useAddedPlaylists();
    console.log(playlists);

    return !!playlist && !!playlists.find((s) => s.id === playlist.id);
};
