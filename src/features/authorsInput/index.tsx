import { ReactNode, SetStateAction, useState } from 'react';
import { Database } from '../../database';
import { TSuggestion } from '../../entities/search/model/types';
import { debounce } from '../../shared/funcs/debounce';
import { SearchWithHints } from '../searchWithHints';
import { Items } from '../../shared/components/addedItemsList/Items';
import { UserCover } from '../../entities/user/ui/UserCover';
import { Flex } from '../../shared/components/flex';

type Props = {
    onChange: (value: string) => void;
    value: string;
    required: boolean;
    error: string | undefined;
};

type TShortAuthor = {
    id: string;
    fullName: string;
};

export const AuthorsInput = (props: Props) => {
    const { value, onChange } = props;
    const [suggestions, setSuggestions] = useState<TSuggestion[]>([]);
    const [addedAuthors, setAddedAuthors] = useState<TShortAuthor[]>([]);
    const [loading, setLoading] = useState(false);

    const requestAuthors = debounce(async () => {
        const res = await Database.SearchSuggestions.getSearchSuggestions(
            value,
            [],
            ['users']
        );
        setSuggestions(res);
        setLoading(false);
    }, 100);

    const handleChange = (value: string) => {
        onChange(value);
        setLoading(true);
        requestAuthors();
    };

    const handleSubmit = (_, suggestion: TSuggestion | null) => {
        if (suggestion) {
            setAddedAuthors((prev) => [
                ...prev,
                { fullName: suggestion?.fullName, id: suggestion?.uid },
            ]);
        }
    };

    return (
        <Flex width="100%" d="column" gap={2}>
            <SearchWithHints
                {...props}
                initialValue={value}
                suggestions={suggestions}
                label="Authors"
                historySuggestions={[]}
                areSuggestionsLoading={false}
                onChange={handleChange}
                onSumbit={handleSubmit}
            />
            <Items
                added={addedAuthors.map((added) => added.id)}
                allItems={addedAuthors}
                itemImage={() => (
                    <UserCover
                        src={''}
                        colors={undefined}
                        size={undefined}
                        isAuthor={false}
                    />
                )}
                itemName={(item) => item.fullName}
                setAdded={setAddedAuthors}
            />
        </Flex>
    );
};