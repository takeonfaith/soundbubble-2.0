import { useState } from 'react';
import { Database } from '../../database';
import { TSuggestion } from '../../entities/search/model/types';
import { Items } from '../../shared/components/addedItemsList/Items';
import { Flex } from '../../shared/components/flex';
import { debounce } from '../../shared/funcs/debounce';
import { SearchWithHints } from '../searchWithHints';
import { TExtendedSuggestion } from '../searchWithHints/types';

type Props = {
    onChange: (value: string) => void;
    value: string;
    required: boolean;
    error: string | undefined;
    addedAuthors: TShortAuthor[];
    loadingItems: boolean;
    onSumbit: (addedAuthors: TShortAuthor[]) => void;
};

export type TShortAuthor = {
    id: string;
    fullName: string;
};

export const AuthorsInput = ({
    onSumbit,
    loadingItems,
    addedAuthors,
    ...props
}: Props) => {
    const { value, onChange } = props;
    const [suggestions, setSuggestions] = useState<TSuggestion[]>([]);
    const [loading, setLoading] = useState(false);

    const requestAuthors = debounce(async () => {
        const res = await Database.SearchSuggestions.getSearchSuggestions(
            value,
            [],
            ['users']
        );
        setSuggestions(res);
        setLoading(false);
    }, 200);

    const handleChange = (value: string) => {
        onChange(value);
        setLoading(true);
        requestAuthors();
    };

    const handleSubmit = (
        _: string,
        suggestion: TExtendedSuggestion | null
    ) => {
        if (suggestion && !addedAuthors.find((a) => a.id === suggestion.uid)) {
            onSumbit([
                ...addedAuthors,
                { fullName: suggestion?.fullName, id: suggestion?.uid },
            ]);
        }
    };

    return (
        <Flex width="100%" d="column" gap={4}>
            <SearchWithHints
                {...props}
                initialValue={value}
                suggestions={suggestions}
                label="Authors"
                historySuggestions={[]}
                areSuggestionsLoading={loading}
                onChange={handleChange}
                onSumbit={handleSubmit}
            />
            <Items
                added={addedAuthors}
                itemName={(item) => item.fullName}
                setAdded={onSumbit}
                loading={loadingItems}
            />
        </Flex>
    );
};
