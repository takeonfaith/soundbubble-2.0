import { useEffect, useRef, useState } from 'react';
import {
    getEntityId,
    getEntityImage,
    getEntityName,
} from '../../features/searchWithHints/lib/getDividedEntity';
import { getEntityType } from '../../features/searchWithHints/lib/getEntityType';
import { GeneralCover } from '../components/cover/GeneralCover';
import { ENTITIES_ICONS } from '../constants/icons';
import { TEntity } from '../../entities/search/model/types';
import { UserCoverBackground } from '../../entities/user/ui/UserCoverBackground';

export const useAddedItemsList = <T extends TEntity>(
    list: T[],
    initiallyAddedItems: T[] = [],
    onAddItem?: (added: T[]) => void
) => {
    const [visibleItems, setVisibleItems] = useState(list);
    const [searchValue, setSearchValue] = useState('');
    const [addedItems, setAddedItems] = useState<T[]>(initiallyAddedItems);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = (item: T, e: Evt<'a'> | Evt<'div'>) => {
        e.preventDefault();

        const isChosen = addedItems.find(
            (i) => getEntityId(i) === getEntityId(item)
        );
        if (isChosen) {
            const newList = addedItems.filter(
                (i) => getEntityId(i) !== getEntityId(item)
            );
            setAddedItems(newList);
            onAddItem?.(newList);
        } else {
            const newList = [...addedItems, item];
            setAddedItems(newList);
            onAddItem?.(newList);
            if (searchValue.length !== 0) {
                setSearchValue('');

                inputRef.current?.focus();
                setVisibleItems(list);
            }
        }
    };

    const handleDeselectAll = () => {
        setVisibleItems(list);
        setAddedItems([]);
        setSearchValue('');
    };

    const getItemImage = (item: TEntity) => {
        const type = getEntityType(item);
        const image = getEntityImage(item);
        const name = getEntityName(item);

        const children =
            type === 'chat' ? (
                <UserCoverBackground name={name} width="18px" />
            ) : undefined;

        return (
            <GeneralCover
                fallbackIcon={
                    type === 'chat' ? undefined : ENTITIES_ICONS[type]
                }
                borderRadius={'100%'}
                src={image}
                colors={['grey']}
                size={'18px'}
            >
                {children}
            </GeneralCover>
        );
    };

    useEffect(() => {
        setVisibleItems(list);
    }, [list]);

    return {
        visibleItems,
        addedItems,
        searchValue,
        setSearchValue,
        handleClick,
        setVisibleItems,
        handleDeselectAll,
        setAddedItems,
        getItemImage,
        inputRef,
    };
};
