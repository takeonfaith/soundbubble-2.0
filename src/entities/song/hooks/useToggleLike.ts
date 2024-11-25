import { useUnit } from 'effector-react';
import { useEffect, useState } from 'react';
import { useIsSongLiked } from '../../../shared/hooks/useIsSongLiked';
import {
    addSongToLibraryFx,
    removeSongFromLibraryFx,
} from '../../user/model/user';
import { TSong } from '../model/types';
import { ToggleLike } from '../../playlist/hooks/useTogglePlaylistLike';
import { userModel } from '../../user/model';

export const useToggleLike = (song: TSong | null | undefined): ToggleLike => {
    const [isAddingSong, isRemovingSong] = useUnit([
        addSongToLibraryFx.pending,
        removeSongFromLibraryFx.pending,
    ]);
    const isLiked = useIsSongLiked(song);

    const [isActing, setIsActing] = useState(false);

    const performingAction = (isAddingSong || isRemovingSong) && isActing;

    const handleToggleLike = () => {
        if (song) {
            setIsActing(true);
            userModel.events.toggleSongLiked({ song, isLiked });
        }
    };

    useEffect(() => {
        if (!isAddingSong && !isRemovingSong) {
            setIsActing(false);
        }
    }, [isAddingSong, isRemovingSong]);

    return { handleToggleLike, performingAction, isLiked };
};
