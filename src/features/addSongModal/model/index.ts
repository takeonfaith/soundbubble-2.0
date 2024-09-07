import { createEvent, createStore, sample } from 'effector';
import { TShortAuthor } from '../../authorsInput';
import { TExtendedSuggestion } from '../../searchWithHints/types';

const DEFAULT_FORM_STORE = {
    songFile: null as File | null,
    name: '',
    author: '',
    authors: [] as TShortAuthor[],
    duration: 0,
    coverFile: null as File | null,
    imageColors: [] as string[],
    lyrics: '',
    langs: [] as TExtendedSuggestion[],
    moods: [] as TExtendedSuggestion[],
    genres: [] as TExtendedSuggestion[],
    releaseDate: undefined as string | undefined,
};

export type TUploadSongForm = typeof DEFAULT_FORM_STORE;

type TForm = {
    id: keyof typeof DEFAULT_FORM_STORE;
    value: (typeof DEFAULT_FORM_STORE)[keyof typeof DEFAULT_FORM_STORE];
};

export const updateField = createEvent<TForm>();

export const $addSongForm = createStore(DEFAULT_FORM_STORE);

sample({
    clock: updateField,
    source: $addSongForm,
    fn: (store, { id, value }) => ({
        ...store,
        [id]: value,
    }),
    target: $addSongForm,
});
