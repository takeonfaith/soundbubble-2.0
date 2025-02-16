import { useUnit } from 'effector-react';
import { useIsSongLiked } from '../../../shared/hooks/useIsSongLiked';
import { ToggleLike } from '../../playlist/hooks/useTogglePlaylistLike';
import { userModel } from '../../user/model';
import { $isAddingOrRemovingSong } from '../../user/model/library/songs';
import { TSong } from '../model/types';

export const useToggleLike = (song: TSong | null | undefined): ToggleLike => {
    const isLiked = useIsSongLiked(song);
    const [isAddingOrRemovingSong] = useUnit([$isAddingOrRemovingSong]);

    const performingAction = song ? isAddingOrRemovingSong.has(song.id) : false;

    const handleToggleLike = () => {
        if (song) {
            userModel.events.toggleSongLiked({ song, isLiked });
        }
    };

    return { handleToggleLike, performingAction, isLiked };
};
