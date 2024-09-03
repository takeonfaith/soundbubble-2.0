/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck IDGAF

import { useState } from 'react';
import { TSuggestion } from '../../entities/search/model/types';
import { Items } from '../../shared/components/addedItemsList/Items';
import { normalizeString } from '../../shared/funcs/normalizeString';
import { SearchWithHints } from '../searchWithHints';

const GENRES = [
    { uid: 'rap', fullName: 'Rap' },
    { uid: 'instrumental', fullName: 'Instrumental' },
    { uid: 'pop', fullName: 'Pop' },
    { uid: 'rnb', fullName: 'R&B' },
];

const getSuggestions = (value: string) => {
    if (value.length === 0) return GENRES;

    return GENRES.filter((g) =>
        normalizeString(g.fullName).includes(normalizeString(value))
    );
};

export const GenreInput = () => {
    const [value, setValue] = useState('');
    const suggestions = getSuggestions(value);
    const [genres, setGenres] = useState<string[]>([]);

    const handleChange = (value: string) => {
        setValue(value);
    };

    const handleSubmit = (value: string, genre: TSuggestion | null) => {
        if (genre) {
            setGenres((prev) => [...prev, genre.uid]);
        }
    };

    return (
        <>
            <SearchWithHints
                initialValue={value}
                suggestions={suggestions}
                placeholder="Find genres"
                label="Genres"
                historySuggestions={[]}
                areSuggestionsLoading={false}
                onChange={handleChange}
                onSumbit={handleSubmit}
                disableCopyButton
            />
            <Items
                added={genres}
                allItems={GENRES}
                itemImage={() => null}
                itemName={(item) => item.fullName}
                setAdded={setGenres}
            />
        </>
    );
};
