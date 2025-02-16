import { useUnit } from 'effector-react';
import { useIsPlaylistLiked } from '../../../shared/hooks/useIsPlaylistLiked';
import { userModel } from '../../user/model';
import { $isAddingOrRemovingPlaylists } from '../../user/model/library/playlists';
import { TPlaylist } from '../model/types';

export type ToggleLike = {
    isLiked: boolean;
    performingAction: boolean;
    handleToggleLike: (e: Evt<'btn'>) => void;
};

export const useTogglePlaylistLike = (playlist: TPlaylist | null) => {
    const isLiked = useIsPlaylistLiked(playlist);
    const [isAddingOrRemovingPlaylists] = useUnit([
        $isAddingOrRemovingPlaylists,
    ]);

    const performingAction = playlist
        ? isAddingOrRemovingPlaylists.has(playlist.id)
        : false;

    const handleToggleLike = (e: Evt<'btn'>) => {
        e.preventDefault();
        e.stopPropagation();

        if (playlist) {
            userModel.events.toggleOtherPlaylistLiked({
                playlist,
                isLiked,
                showToast: true,
            });
            e.stopPropagation();
        }
    };

    return { isLiked, handleToggleLike, performingAction };
};
