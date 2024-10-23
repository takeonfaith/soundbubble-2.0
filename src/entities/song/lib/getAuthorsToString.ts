import { TAuthor } from '../model/types';

export const getAuthorsToString = (authors: TAuthor[]) => {
    return authors
        .map((author) => {
            if (author.displayName === undefined) {
                console.log(author, authors);
            }

            return `\xa0${author.displayName.replace(' ', '\xa0')}`;
        })
        .join(', ')
        .trim();
};
