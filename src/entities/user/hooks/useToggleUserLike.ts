import { useUnit } from 'effector-react';
import { useEffect, useState } from 'react';
import { useIsAuthorLiked } from '../../../shared/hooks/useIsAuthorLiked';
import {
    addAuthorsToLibraryFx,
    removeAuthorsFromLibraryFx,
    userModel,
} from '../../user/model';
import { TUser } from '../model/types';

export const useToggleUserLike = (author: TUser | null | undefined) => {
    const [isAddingAuthor, isRemovingAuthor] = useUnit([
        addAuthorsToLibraryFx.pending,
        removeAuthorsFromLibraryFx.pending,
    ]);
    const isLiked = useIsAuthorLiked(author);

    const [isActing, setIsActing] = useState(false);

    const performingAction = (isAddingAuthor || isRemovingAuthor) && isActing;

    const handleToggleLike = (e: Evt<'btn'>) => {
        e.preventDefault();
        if (author) {
            setIsActing(true);
            userModel.events.toggleAuthorLiked({
                authors: [author],
                isLiked,
                showToast: true,
            });
            e.stopPropagation();
        }
    };

    useEffect(() => {
        if (!isAddingAuthor && !isRemovingAuthor) {
            setIsActing(false);
        }
    }, [isAddingAuthor, isRemovingAuthor]);

    return { handleToggleLike, performingAction, isLiked };
};
