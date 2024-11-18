import { IconSearch } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import React, { useState } from 'react';
import { Database } from '../../../../../database';
import { createMessageObject } from '../../../../../entities/chat/lib/createMessageObject';
import { chatModel } from '../../../../../entities/chat/model';
import { sendMessageFx } from '../../../../../entities/chat/model/send-message';
import { TPlaylist } from '../../../../../entities/playlist/model/types';
import { TEntity } from '../../../../../entities/search/model/types';
import { TSong } from '../../../../../entities/song/model/types';
import { SongListSkeleton } from '../../../../../entities/song/ui/SongListSkeleton';
import { userModel } from '../../../../../entities/user/model';
import { TUser } from '../../../../../entities/user/model/types';
import { AddEntitiesUI } from '../../../../../features/addEntitiesUI';
import { getEntityId } from '../../../../../features/searchWithHints/lib/getDividedEntity';
import { getEntityPlace } from '../../../../../features/searchWithHints/lib/getEntityPlace';
import { getEntityType } from '../../../../../features/searchWithHints/lib/getEntityType';
import { modalModel } from '../../../../../layout/modal/model';
import { Button } from '../../../../../shared/components/button';
import { DefaultButton } from '../../../../../shared/components/button/DefaultButton';
import { CheckIcon } from '../../../../../shared/components/checkIcon';
import { Flex } from '../../../../../shared/components/flex';
import { PageMessage } from '../../../../../shared/components/pageMessage';
import { EntityTypeMap } from '../../../../search/SearchResult';
import getUID from '../../../../../shared/funcs/getUID';

type Props<T extends TEntity> = {
    library: T[];
    submitButtonText: string;
};

export const AttachEntity = <T extends TEntity>({
    library,
    submitButtonText,
}: Props<T>) => {
    const [currentChat] = chatModel.useCurrentChat();
    const [currentUser] = userModel.useUser();
    const [isSending] = useUnit([sendMessageFx.pending]);
    const [loading, setLoading] = useState(false);
    const [listTitle, setListTitle] = useState('Library');
    const [notFound, setNotFound] = useState(false);

    const handleSave = (entities: T[]) => {
        return () => {
            if (currentChat && currentUser) {
                const type = getEntityType(library[0]);
                const attachedSongs: string[] = [];
                const attachedAlbums: string[] = [];
                const attachedAuthors: string[] = [];
                const ids = entities.map((e) => getEntityId(e));

                if (type === 'song') {
                    attachedSongs.push(...ids);
                }

                if (type === 'author' || type === 'user') {
                    attachedAuthors.push(...ids);
                }

                if (type === 'album' || type === 'playlist') {
                    attachedAlbums.push(...ids);
                }

                const messageId = getUID();
                chatModel.events.sendMessage({
                    chats: [currentChat],
                    message: () => {
                        return createMessageObject({
                            id: messageId,
                            sender: currentUser.uid,
                            participants: currentChat.participants,
                            attachedAlbums,
                            attachedAuthors,
                            attachedSongs,
                        });
                    },
                    onSuccess: () => {
                        modalModel.events.close();
                    },
                });
            }
        };
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
            ).then((results: TEntity[]) => {
                setVisibleItems(results as TSong[]);
                setLoading(false);
                if (results.length === 0) {
                    setNotFound(true);
                }
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
                const type = getEntityType(entity);
                const Component = EntityTypeMap[type];

                return (
                    <>
                        {showTitle && (
                            <h4 className="list-title">{listTitle}</h4>
                        )}
                        <Component
                            onClick={onClick}
                            song={entity as TSong}
                            playing={false}
                            loading={false}
                            index={0}
                            user={entity as TUser}
                            playlist={entity as TPlaylist}
                            isAuthor={false}
                            orientation="horizontal"
                        >
                            <Button $width="50px">
                                <CheckIcon checked={checked} type={'plus'} />
                            </Button>
                        </Component>
                    </>
                );
            }}
            renderButton={(addedEntites) => {
                return (
                    <DefaultButton
                        appearance="primary"
                        loading={isSending}
                        onClick={handleSave(addedEntites as T[])}
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
