import { IconSearch } from '@tabler/icons-react';
import React from 'react';
import { normalizeString } from '../../funcs/normalizeString';
import { Input } from '../input';
import { Items } from './Items';
import { AddedItemsListStyled } from './styles';

type Props<T extends { id?: string; uid?: string }> = {
    inputPlaceholder: string;
    allItems: T[];
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    setVisibleItems: React.Dispatch<React.SetStateAction<T[]>>;
    added: T[];
    loading?: boolean;
    itemImage?: (item: T) => React.ReactNode;
    itemName: (item: T) => string;
    setAdded: (items: T[]) => void;
};

export const AddedItemsList = <T extends { id?: string; uid?: string }>(
    props: Props<T>
) => {
    const {
        inputPlaceholder,
        added,
        allItems,
        searchValue,
        setVisibleItems,
        itemName,
        setSearchValue,
    } = props;

    const handleChange = (e: Evt<'input'>) => {
        console.log({ e: e.target.value });
        setSearchValue(e.target.value);

        if (e.target.value !== undefined && e.target.value.length !== 0) {
            setVisibleItems(() =>
                allItems.filter((item) => {
                    if (!item) return false;

                    return normalizeString(itemName(item)).includes(
                        normalizeString(e?.target?.value)
                    );
                })
            );
        } else {
            setVisibleItems(allItems);
        }
    };

    return (
        <AddedItemsListStyled className={added.length > 0 ? 'open' : ''}>
            <Input
                width={100}
                placeholder={inputPlaceholder}
                icon={<IconSearch />}
                onChange={handleChange}
                value={searchValue}
            />
            <Items {...props} />
        </AddedItemsListStyled>
    );
};
