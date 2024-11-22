import styled from 'styled-components';
import { userModel } from '../../../../../entities/user/model';
import { AttachEntity } from './AttachEntity';
import { Tabs } from '../../../../../shared/components/tabs';
import { Flex } from '../../../../../shared/components/flex';
import { TEntity } from '../../../../../entities/search/model/types';
import { chatModel } from '../../../../../entities/chat/model';
import { createMessageObject } from '../../../../../entities/chat/lib/createMessageObject';
import { getEntityId } from '../../../../../features/searchWithHints/lib/getDividedEntity';
import { getEntityType } from '../../../../../features/searchWithHints/lib/getEntityType';
import { modalModel } from '../../../../../layout/modal/model';
import getUID from '../../../../../shared/funcs/getUID';

const AttachEntityToChatModalStyled = styled.div`
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .list-title {
        font-weight: 300;
        width: 100%;
        padding: 6px;
        margin-top: 10px;
    }
`;

export const AttachEntityToChatModal = () => {
    const [library] = userModel.useSongLibrary();
    const [currentChat] = chatModel.useCurrentChat();
    const [currentUser] = userModel.useUser();

    const handleSave = (entities: TEntity[]) => {
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

    return (
        <AttachEntityToChatModalStyled>
            <Tabs
                tabs={[
                    { title: 'Songs', url: '' },
                    { title: 'Albums', url: '' },
                    { title: 'Authors', url: '' },
                ]}
            />
            <Flex width="100%" d="column">
                <AttachEntity
                    library={library}
                    submitButtonText="Send"
                    onSumbit={handleSave}
                />
            </Flex>
        </AttachEntityToChatModalStyled>
    );
};
