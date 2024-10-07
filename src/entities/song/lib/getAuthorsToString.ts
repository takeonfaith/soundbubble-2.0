import { TAuthor } from '../model/types';

export const getAuthorsToString = (authors: TAuthor[]) => {
    return authors
        .map((author) => `\xa0${author.displayName.replace(' ', '\xa0')}`)
        .join(', ').trim();
};
