import { useUnit } from 'effector-react';
import { useIsAuthorLiked } from '../../../shared/hooks/useIsAuthorLiked';
import { userModel } from '../model';
import { $isAddingOrRemovingUser } from '../model/library/authors';
import { TUser } from '../model/types';

export const useToggleUserLike = (author: TUser | null | undefined) => {
    const [isAddingOrRemovingPlaylists] = useUnit([$isAddingOrRemovingUser]);
    const isLiked = useIsAuthorLiked(author);

    const performingAction = author
        ? isAddingOrRemovingPlaylists.has(author.uid)
        : false;

    const handleToggleLike = (e: Evt<'btn'>) => {
        if (author) {
            e.preventDefault();
            e.stopPropagation();
            userModel.events.toggleAuthorLiked({
                authors: [author],
                showToast: true,
            });
        }
    };

    return { handleToggleLike, performingAction, isLiked };
};
