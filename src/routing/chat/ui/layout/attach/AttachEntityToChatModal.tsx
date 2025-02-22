import styled from 'styled-components';
import { createMessageObject } from '../../../../../entities/chat/lib/createMessageObject';
import { chatModel } from '../../../../../entities/chat/model';
import { TEntity } from '../../../../../entities/search/model/types';
import { userModel } from '../../../../../entities/user/model';
import { getEntityId } from '../../../../../features/searchWithHints/lib/getDividedEntity';
import { getEntityType } from '../../../../../features/searchWithHints/lib/getEntityType';
import { modalModel } from '../../../../../layout/modal/model';
import { Flex } from '../../../../../shared/components/flex';
import getUID from '../../../../../shared/funcs/getUID';
import { AttachEntity } from './AttachEntity';
import { translate } from '../../../../../i18n';

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
            console.log(messageId, attachedAuthors, attachedAlbums);

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

    return (
        <AttachEntityToChatModalStyled>
            <Flex width="100%" d="column">
                <AttachEntity
                    library={library}
                    placeholder={translate('search_placeholder')}
                    submitButtonText={translate('send')}
                    onSumbit={handleSave}
                />
            </Flex>
        </AttachEntityToChatModalStyled>
    );
};
