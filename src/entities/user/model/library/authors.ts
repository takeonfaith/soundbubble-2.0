import { createEffect, createEvent, createStore, sample } from 'effector';
import { Database } from '../../../../database';
import { createEffectWithToast } from '../../../../shared/effector/createEffectWithToast';
import { TUser } from '../types';
import { filterOneArrayWithAnother } from '../../../../shared/funcs/filterOneArrayWithAnother';
import { $user } from '../user';
import { getDataFromEffect } from '../../../../shared/effector/getDataFromEffect';
import { createPendingEffectsStore } from '../../../../shared/effector/createPendingEffects';
import { translate } from '../../../../i18n';

type TAuthorEffectProps = {
    userId: string | undefined;
    authors: TUser[];
    showToast?: boolean;
};
export const loadAddedAuthorsFx = createEffect<TUser, TUser[]>();
export const addAuthorsToLibraryFx = createEffectWithToast<
    TAuthorEffectProps,
    void
>(translate('author_added_to_liked'), 'Failed to add author to Liked');
export const removeAuthorsFromLibraryFx = createEffectWithToast<
    TAuthorEffectProps,
    void
>(translate('author_removed_from_liked'), 'Failed to remove author from Liked');

export const addAuthorsToLibrary = createEvent<{
    authors: TUser[];
    showToast: boolean;
}>();
export const removeAuthorsFromLibrary = createEvent<{
    authors: TUser[];
    showToast: boolean;
}>();
export const toggleAuthorLiked = createEvent<{
    authors: TUser[];
    showToast: boolean;
}>();

export const $addedAuthors = createStore<TUser[]>([]);
export const $isAddingOrRemovingUser = createPendingEffectsStore({
    effects: [addAuthorsToLibraryFx, removeAuthorsFromLibraryFx],
    getId: (p) => p.authors.map((a) => a.uid),
});

getDataFromEffect(loadAddedAuthorsFx, $addedAuthors);

sample({
    clock: toggleAuthorLiked,
    source: $addedAuthors,
    filter: (added, { authors }) =>
        !!added.find((u) => u.uid === authors[0].uid),
    fn: (_, props) => props,
    target: removeAuthorsFromLibrary,
});

sample({
    clock: toggleAuthorLiked,
    source: $addedAuthors,
    filter: (added, { authors }) =>
        !added.find((u) => u.uid === authors[0].uid),
    fn: (_, props) => props,
    target: addAuthorsToLibrary,
});

sample({
    clock: addAuthorsToLibrary,
    source: { user: $user, addedAuthors: $addedAuthors },
    fn: ({ user, addedAuthors }, { showToast, authors }) => ({
        userId: user?.uid,
        showToast,
        authors: filterOneArrayWithAnother(
            authors,
            addedAuthors,
            (item) => item.uid,
            (arr) => arr.map((i) => i.uid)
        ),
    }),
    target: addAuthorsToLibraryFx,
});

sample({
    clock: addAuthorsToLibraryFx.done,
    source: $addedAuthors,
    fn: (addedAuthors, { params: { authors } }) => [
        ...filterOneArrayWithAnother(
            authors,
            addedAuthors,
            (a) => a.uid,
            (arr) => arr.map((a) => a.uid)
        ),
        ...addedAuthors,
    ],
    target: $addedAuthors,
});

sample({
    clock: removeAuthorsFromLibrary,
    source: { user: $user },
    fn: ({ user }, props) => ({ userId: user?.uid, ...props }),
    target: removeAuthorsFromLibraryFx,
});

sample({
    clock: removeAuthorsFromLibraryFx.done,
    source: $addedAuthors,
    fn: (addedAuthors, { params: { authors } }) =>
        filterOneArrayWithAnother(
            addedAuthors,
            authors,
            (u) => u.uid,
            (arr) => arr.map((a) => a.uid)
        ),
    target: $addedAuthors,
});

loadAddedAuthorsFx.use(async ({ addedAuthors }) => {
    try {
        const authors = addedAuthors ?? [];

        const users = await Database.Users.getUsersByUids(authors);

        return users;
    } catch (error) {
        throw new Error('Failed to load user added authors');
    }
});

addAuthorsToLibraryFx.use(async ({ userId, authors }) => {
    if (!userId) return;

    await Database.Users.addAuthorToLibrary(
        userId,
        authors.map((a) => a.uid)
    );
});

removeAuthorsFromLibraryFx.use(async ({ userId, authors }) => {
    if (!userId) return;

    await Database.Users.removeAuthorFromLibrary(
        userId,
        authors.map((a) => a.uid)
    );
});
