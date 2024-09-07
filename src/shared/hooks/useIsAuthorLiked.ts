import { userModel } from '../../entities/user/model';
import { TUser } from '../../entities/user/model/types';

export const useIsAuthorLiked = (author: TUser | null | undefined) => {
    const [authors] = userModel.useAddedAuthors();

    return !!author && !!authors.find((s) => s.uid === author.uid);
};
