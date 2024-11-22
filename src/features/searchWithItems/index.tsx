import { useState } from 'react';
import { Items } from '../../shared/components/addedItemsList/Items';
import { Flex } from '../../shared/components/flex';
import { normalizeString } from '../../shared/funcs/normalizeString';
import { SearchWithHints } from '../searchWithHints';
import { TExtendedSuggestion } from '../searchWithHints/types';

const getSuggestions = <T extends TExtendedSuggestion>(
    value: string,
    allItems: T[]
) => {
    if (value.length === 0) return allItems;

    return allItems.filter((g) =>
        normalizeString(g.fullName).includes(normalizeString(value))
    );
};

type Props<T extends TExtendedSuggestion> = {
    items: T[];
    placeholder: string;
    label: string;
    error?: string;
    required?: boolean;
    onSubmit: (addedItems: T[]) => void;
};

export const SearchWithItems = <T extends TExtendedSuggestion>({
    items,
    label,
    placeholder,
    error,
    required,
    onSubmit,
}: Props<T>) => {
    const [value, setValue] = useState('');
    const suggestions = getSuggestions(value, items);
    const [addedItems, setAddedItems] = useState<TExtendedSuggestion[]>([]);

    const handleChange = (value: string) => {
        setValue(value);
    };

    const handleSubmit = (value: string, item: TExtendedSuggestion | null) => {
        if (item) {
            setAddedItems((prev) =>
                !prev.includes(item) ? [...prev, item] : prev
            );

            setValue(value);
            onSubmit([...addedItems, item]);
        }
    };

    return (
        <Flex d="column" width="100%" gap={4}>
            <SearchWithHints
                initialValue={value}
                suggestions={suggestions}
                placeholder={placeholder}
                label={label}
                historySuggestions={[]}
                areSuggestionsLoading={false}
                onChange={handleChange}
                onSumbit={handleSubmit}
                disableCopyButton
                error={error}
                required={required}
            />
            <Items
                added={addedItems}
                itemImage={(item) => item.icon}
                itemName={(item) => item.fullName}
                setAdded={setAddedItems}
            />
        </Flex>
    );
};
