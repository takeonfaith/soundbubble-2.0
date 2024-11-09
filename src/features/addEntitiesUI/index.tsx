import { TEntity } from '../../entities/search/model/types';
import { AddedItemsList } from '../../shared/components/addedItemsList';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { useAddedItemsList } from '../../shared/hooks/useAddedItemsList';
import {
    getEntityId,
    getEntityName,
} from '../searchWithHints/lib/getDividedEntity';
import { ButtonWrapper } from '../shareModal/styles';

type Props<T extends TEntity> = {
    entities: T[];
    initiallyAddedItems: T[];
    inputPlaceholder: string;
    children?: React.ReactNode;
    renderItem: (
        item: T,
        checked: boolean,
        onClick: (item: T, e: Evt<'a'> | Evt<'div'>) => void,
        initiallyChecked: boolean,
        index: number,
        value: string
    ) => React.ReactNode;
    renderButton: (addedItems: T[]) => React.ReactNode;
    onSearchValueChange?: (
        value: string,
        visibleItems: T[],
        setVisibleItems: React.Dispatch<React.SetStateAction<T[]>>
    ) => void;
};

export const AddEntitiesUI = <T extends TEntity>({
    entities,
    initiallyAddedItems,
    inputPlaceholder,
    renderItem,
    renderButton,
    onSearchValueChange,
    children,
}: Props<T>) => {
    const {
        visibleItems,
        addedItems,
        searchValue,
        setSearchValue,
        setVisibleItems,
        handleClick,
        handleDeselectAll,
        setAddedItems,
        getItemImage,
    } = useAddedItemsList(entities, initiallyAddedItems);

    return (
        <>
            <AddedItemsList
                inputPlaceholder={inputPlaceholder}
                added={addedItems}
                allItems={entities}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                itemImage={getItemImage}
                itemName={(item) => getEntityName(item)}
                setAdded={(added) => setAddedItems(added)}
                visibleItems={visibleItems}
                setVisibleItems={setVisibleItems}
                onSearchValueChange={onSearchValueChange}
            />
            <Flex jc="flex-end" width="100%">
                {addedItems.length > 0 && (
                    <Button
                        onClick={handleDeselectAll}
                        $height="25px"
                        $width="90px"
                        style={{ fontSize: '0.8rem', opacity: '0.7' }}
                    >
                        Deselect all
                    </Button>
                )}
            </Flex>
            {children}
            <Flex
                d="column"
                width="100%"
                height="calc(100% - 230px)"
                padding="0 0 150px 0"
            >
                {visibleItems.map((item, index) => {
                    const id = getEntityId(item);
                    const checked = !!addedItems.find(
                        (i) => getEntityId(i) === id
                    );
                    const initiallyChecked = !!initiallyAddedItems.find(
                        (i) => getEntityId(i) === id
                    );
                    return renderItem(
                        item,
                        checked,
                        handleClick,
                        initiallyChecked,
                        index,
                        searchValue
                    );
                })}
            </Flex>
            <ButtonWrapper className={addedItems.length > 0 ? 'open' : ''}>
                {renderButton(addedItems)}
            </ButtonWrapper>
        </>
    );
};
