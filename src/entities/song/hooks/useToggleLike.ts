import { useUnit } from 'effector-react';
import { useEffect, useState } from 'react';
import { useIsSongLiked } from '../../../shared/hooks/useIsSongLiked';
import {
    addSongToLibraryFx,
    removeSongFromLibraryFx,
    userModel,
} from '../../user/model';
import { TSong } from '../model/types';

export const useToggleLike = (song: TSong | null) => {
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
            userModel.events.toggleLikeSong({ song, isLiked });
        }
    };

    useEffect(() => {
        if (!isAddingSong && !isRemovingSong) {
            setIsActing(false);
        }
    }, [isAddingSong, isRemovingSong]);

    return { handleToggleLike, performingAction, isLiked };
};
