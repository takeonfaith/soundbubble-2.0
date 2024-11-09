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
    visibleItems: T[];
    itemImage?: (item: T) => React.ReactNode;
    itemName: (item: T) => string;
    setAdded: (items: T[]) => void;
    onSearchValueChange?: (
        value: string,
        visibleItems: T[],
        setVisibleItems: React.Dispatch<React.SetStateAction<T[]>>
    ) => void;
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
        onSearchValueChange,
    } = props;

    const handleChange = (e: Evt<'input'>) => {
        setSearchValue(e.target.value);
        const vItems = allItems.filter((item) => {
            if (!item) return false;

            return normalizeString(itemName(item)).includes(
                normalizeString(e?.target?.value)
            );
        });
        onSearchValueChange?.(e.target.value, vItems, setVisibleItems);
        if (e.target.value !== undefined && e.target.value.length !== 0) {
            setVisibleItems(vItems);
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
