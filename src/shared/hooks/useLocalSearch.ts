import { useState } from 'react';
import { TEntity } from '../../entities/search/model/types';
import { getEntityName } from '../../features/searchWithHints/lib/getDividedEntity';
import { normalizeString } from '../funcs/normalizeString';

export const useLocalSearch = <T extends TEntity>(items: T[]) => {
    const [found, setFound] = useState<T[]>([]);
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e: Evt<'input'>) => {
        setSearchValue(e.currentTarget.value);
        setFound(
            items.filter((item) => {
                const name = getEntityName(item);
                return normalizeString(name).includes(
                    normalizeString(e.currentTarget.value)
                );
            })
        );
    };

    return {
        visible: searchValue.length !== 0 ? found : items,
        handleChange,
        searchValue,
    };
};
