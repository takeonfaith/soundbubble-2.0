import { useUnit } from 'effector-react';
import { useIsPlaylistLiked } from '../../../shared/hooks/useIsPlaylistLiked';
import { addPlaylistFx, removePlaylistFx } from '../../user/model/user';
import { TPlaylist } from '../model/types';
import { useEffect, useState } from 'react';
import { userModel } from '../../user/model';

export type ToggleLike = {
    isLiked: boolean;
    performingAction: boolean;
    handleToggleLike: (e: Evt<'btn'>) => void;
};

export const useTogglePlaylistLike = (playlist: TPlaylist | null) => {
    const isLiked = useIsPlaylistLiked(playlist);
    const [isAddingPlaylisst, isRemovingPlaylist] = useUnit([
        addPlaylistFx.pending,
        removePlaylistFx.pending,
    ]);

    const [isActing, setIsActing] = useState(false);

    const performingAction =
        (isAddingPlaylisst || isRemovingPlaylist) && isActing;

    const handleToggleLike = (e: Evt<'btn'>) => {
        e.preventDefault();
        e.stopPropagation();

        if (playlist) {
            setIsActing(true);
            userModel.events.toggleOtherPlaylistLiked({
                playlist,
                isLiked,
                showToast: true,
            });
            e.stopPropagation();
        }
    };

    useEffect(() => {
        if (!isAddingPlaylisst && !isRemovingPlaylist) {
            setIsActing(false);
        }
    }, [isAddingPlaylisst, isRemovingPlaylist]);

    return { isLiked, handleToggleLike, performingAction };
};
