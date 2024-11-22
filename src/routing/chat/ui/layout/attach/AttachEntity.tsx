import { IconSearch } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import React, { useState } from 'react';
import { Database } from '../../../../../database';
import { sendMessageFx } from '../../../../../entities/chat/model/send-message';
import { TEntity } from '../../../../../entities/search/model/types';
import { createQueueObject } from '../../../../../entities/song/lib/createQueueObject';
import { TSong } from '../../../../../entities/song/model/types';
import { SongListSkeleton } from '../../../../../entities/song/ui/SongListSkeleton';
import { TOrientation } from '../../../../../entities/user/types';
import { AddEntitiesUI } from '../../../../../features/addEntitiesUI';
import { getEntityPlace } from '../../../../../features/searchWithHints/lib/getEntityPlace';
import { getEntityType } from '../../../../../features/searchWithHints/lib/getEntityType';
import { Button } from '../../../../../shared/components/button';
import { DefaultButton } from '../../../../../shared/components/button/DefaultButton';
import { CheckIcon } from '../../../../../shared/components/checkIcon';
import { getEntityItem } from '../../../../../shared/components/entityList/entityMap';
import { Flex } from '../../../../../shared/components/flex';
import { PageMessage } from '../../../../../shared/components/pageMessage';

type Props<T extends TEntity> = {
    library: T[];
    submitButtonText: string;
    orientation: TOrientation;
    onSubmit: (items: T[]) => void;
    customCheckButton?: (checked: boolean, entity: TEntity) => React.ReactNode;
};

export const AttachEntity = <T extends TEntity>({
    library,
    submitButtonText,
    onSubmit,
    orientation,
    customCheckButton,
}: Props<T>) => {
    const [isSending] = useUnit([sendMessageFx.pending]);
    const [loading, setLoading] = useState(false);
    const [listTitle, setListTitle] = useState('Library');
    const [notFound, setNotFound] = useState(false);

    const checkButton = (checked: boolean) => {
        return (
            <Button $width="40px" className="check-button">
                <CheckIcon checked={checked} type={'plus'} />
            </Button>
        );
    };

    const onSearchValueChange = (
        value: string,
        visibleItems: TEntity[],
        setVisibleItems: React.Dispatch<React.SetStateAction<TEntity[]>>
    ) => {
        setNotFound(false);
        if (visibleItems.length === 0 && value.length !== 0) {
            setLoading(true);
            setListTitle('Global Search');

            console.log(getEntityPlace(library[0]));

            Database.SearchSuggestions.getSearchResult(
                value,
                getEntityPlace(library[0])
            )
                .then((results: TEntity[]) => {
                    setVisibleItems(results as TSong[]);
                    if (results.length === 0) {
                        setNotFound(true);
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setListTitle('Library');
        }
    };

    return (
        <AddEntitiesUI
            entities={library}
            initiallyAddedItems={[]}
            onSearchValueChange={onSearchValueChange}
            inputPlaceholder={`Search for ${getEntityType(library[0])}s`}
            renderItem={(entity, checked, onClick, _, index) => {
                const showTitle = index === 0;
                const item = getEntityItem(
                    entity,
                    createQueueObject({}),
                    onClick,
                    customCheckButton?.(checked, entity) ??
                        checkButton(checked),
                    orientation
                );

                return (
                    <div className={checked ? 'checked' : ''}>
                        {showTitle && (
                            <h4 className="list-title">{listTitle}</h4>
                        )}
                        {item}
                    </div>
                );
            }}
            renderButton={(addedEntites) => {
                return (
                    <DefaultButton
                        appearance="primary"
                        loading={isSending}
                        onClick={() => onSubmit(addedEntites as T[])}
                    >
                        {submitButtonText}
                    </DefaultButton>
                );
            }}
        >
            {loading && (
                <Flex width="100%" jc="center" padding="6px">
                    <SongListSkeleton quantity={9} />
                </Flex>
            )}
            {!loading && notFound && (
                <PageMessage
                    icon={IconSearch}
                    title="Nothing found"
                    description={'Try to change search query'}
                />
            )}
        </AddEntitiesUI>
    );
};
