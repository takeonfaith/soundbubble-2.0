import { TSong } from '../../entities/song/model/types';
import { userModel } from '../../entities/user/model';

export const useIsSongLiked = (song: TSong | null | undefined) => {
    const [library] = userModel.useSongLibrary();

    return !!song && !!library.find((s) => s.id === song.id);
};
