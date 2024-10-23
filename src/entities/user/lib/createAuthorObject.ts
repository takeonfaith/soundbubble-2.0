import { TAuthor } from '../../song/model/types';

export const createAuthorObject = (props: Partial<TAuthor> | null): TAuthor => {
    return {
        uid: props?.uid ?? '',
        displayName: props?.displayName ?? '',
        photoURL: props?.photoURL ?? '',
    };
};
