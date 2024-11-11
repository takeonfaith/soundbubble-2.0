import { useEffect, useState } from 'react';
import {
    getEntityId,
    getEntityImage,
} from '../../features/searchWithHints/lib/getDividedEntity';
import { getEntityType } from '../../features/searchWithHints/lib/getEntityType';
import { GeneralCover } from '../components/cover/GeneralCover';
import { ENTITIES_ICONS } from '../constants/icons';
import { TEntity } from '../../entities/search/model/types';

export const useAddedItemsList = <T extends TEntity>(
    list: T[],
    initiallyAddedItems: T[] = []
) => {
    const [visibleItems, setVisibleItems] = useState(list);
    const [searchValue, setSearchValue] = useState('');
    const [addedItems, setAddedItems] = useState<T[]>(initiallyAddedItems);

    const handleClick = (item: T, e: Evt<'a'> | Evt<'div'>) => {
        e.preventDefault();

        const isChosen = addedItems.find(
            (i) => getEntityId(i) === getEntityId(item)
        );
        if (isChosen) {
            setAddedItems((prev) =>
                prev.filter((i) => getEntityId(i) !== getEntityId(item))
            );
        } else {
            setAddedItems((prev) => [...prev, item]);
            if (searchValue.length !== 0) {
                setSearchValue('');
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
        console.log(type);
        
        return (
            <GeneralCover
                fallbackIcon={ENTITIES_ICONS[type]}
                borderRadius={'100%'}
                src={image}
                colors={['grey']}
                size={'18px'}
            />
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
    };
};
