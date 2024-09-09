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
    inputPlaceholder: string;
    renderItem: (
        item: T,
        checked: boolean,
        onClick: (item: T, e: Evt<'a'>) => void
    ) => React.ReactNode;
    renderButton: (addedItems: T[]) => React.ReactNode;
};

export const AddEntitiesUI = <T extends TEntity>({
    entities,
    inputPlaceholder,
    renderItem,
    renderButton,
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
    } = useAddedItemsList(entities);

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
                setVisibleItems={setVisibleItems}
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
            <Flex d="column" width="100%">
                {visibleItems.map((item) => {
                    const id = getEntityId(item);
                    const checked = !!addedItems.find(
                        (i) => getEntityId(i) === id
                    );
                    return renderItem(item, checked, handleClick);
                })}
            </Flex>
            <ButtonWrapper className={addedItems.length > 0 ? 'open' : ''}>
                {renderButton(addedItems)}
            </ButtonWrapper>
        </>
    );
};
