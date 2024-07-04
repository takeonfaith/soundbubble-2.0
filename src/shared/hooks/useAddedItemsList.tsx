import { useState } from 'react';
import { getEntityId, getEntityImage } from '../../features/searchWithHints/lib/getDividedEntity';
import { getEntityType } from '../../features/searchWithHints/lib/getEntityType';
import { GeneralCover } from '../components/cover/GeneralCover';
import { ENTITIES_ICONS } from '../constants/icons';
import { TEntity } from '../../entities/search/model/types';

export const useAddedItemsList = <T extends TEntity>(list: T[]) => {
    const [visibleItems, setVisibleItems] = useState(list);
    const [searchValue, setSearchValue] = useState('');
    const [addedItems, setAddedItems] = useState<string[]>([]);

    const handleClick = (item: T, e: Evt<'a'>) => {
        e.preventDefault();
        const id = getEntityId(item);
        const isChosen = addedItems.find((item) => item === id);
        if (isChosen) {
            setAddedItems((prev) => prev.filter((itemId) => itemId !== id));
        } else {
            setAddedItems((prev) => [...prev, id]);
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
        const image = getEntityImage(item)
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
