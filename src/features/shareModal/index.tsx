/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUnit } from 'effector-react';
import { useState } from 'react';
import { createMessageObject } from '../../entities/chat/lib/createMessageObject';
import { chatModel } from '../../entities/chat/model';
import { sendMessageFx } from '../../entities/chat/model/send-message';
import { TChat } from '../../entities/chat/model/types';
import { ChatItem } from '../../entities/chat/ui/ChatItem';
import { TEntity } from '../../entities/search/model/types';
import { userModel } from '../../entities/user/model';
import { TUser } from '../../entities/user/model/types';
import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { CheckIcon } from '../../shared/components/checkIcon';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { Loading } from '../../shared/components/loading';
import getUID from '../../shared/funcs/getUID';
import { AddEntitiesUI } from '../addEntitiesUI';
import { getEntityId } from '../searchWithHints/lib/getDividedEntity';
import { getEntityType } from '../searchWithHints/lib/getEntityType';
import { BadgeStyled, ShareModalStyled } from './styles';
import { PageMessage } from '../../shared/components/pageMessage';
import {
    IconFriendsOff,
    IconMessagesOff,
    TablerIconsProps,
} from '@tabler/icons-react';

type Props = {
    entity: TEntity | null | undefined;
};

export const ShareModal = ({ entity }: Props) => {
    const [messageValue, setMessageValue] = useState('');
    const [sending] = useUnit([sendMessageFx.pending]);
    const [chats, loadingChats] = chatModel.useChats();
    const [cache, loadingChatData] = chatModel.useCache();
    const [currentUser] = userModel.useUser();
    const chatsWithNames: TChat[] = chats.map((ch) => {
        const notYou = ch.participants.filter((p) => p !== currentUser?.uid)[0];
        const otherUser = cache[notYou] as TUser;
        return {
            ...ch,
            chatName: (ch.chatName || otherUser?.displayName) ?? '',
            chatImage:
                (ch.chatName.length !== 0
                    ? ch.chatImage
                    : otherUser?.photoURL) ?? '',
        };
    });

    const handleShare = (addedChats: TChat[]) => {
        if (currentUser && entity) {
            const type = getEntityType(entity);
            const attachedAlbums =
                type === 'album' || type === 'playlist'
                    ? [getEntityId(entity)]
                    : [];
            const attachedAuthors =
                type === 'author' || type === 'user'
                    ? [getEntityId(entity)]
                    : [];
            const attachedSongs = type === 'song' ? [getEntityId(entity)] : [];
            const id = getUID();
            chatModel.events.sendMessage({
                chats: addedChats,
                message: (chat) =>
                    createMessageObject({
                        id,
                        sender: currentUser?.uid,
                        participants: chat.participants,
                        message: messageValue,
                        attachedAlbums,
                        attachedAuthors,
                        attachedSongs,
                    }),
                showToast: true,
                onSuccess: () => {
                    modalModel.events.close();
                },
            });
        }
    };

    return (
        <ShareModalStyled>
            <AddEntitiesUI
                initiallyAddedItems={[]}
                inputPlaceholder="Search for friends..."
                entities={chatsWithNames}
                renderItem={(chat, checked, onClick) => {
                    return (
                        <ChatItem
                            hideLastMessage
                            size="xs"
                            chat={chat}
                            key={chat.id}
                            cache={cache}
                            onClick={onClick}
                            unreadCount={0}
                            isSelected={false}
                        >
                            <CheckIcon type="checkbox" checked={checked} />
                        </ChatItem>
                    );
                }}
                renderButton={(addedChats) => (
                    <>
                        <Input
                            placeholder="Your Message"
                            value={messageValue}
                            onChange={(e) =>
                                setMessageValue(e.currentTarget.value)
                            }
                        />
                        <DefaultButton
                            appearance="primary"
                            onClick={() => handleShare(addedChats)}
                            loading={sending}
                        >
                            Send
                            <BadgeStyled className="white">
                                {addedChats.length}
                            </BadgeStyled>
                        </DefaultButton>
                    </>
                )}
            />
            {chatsWithNames.length === 0 && (
                <PageMessage
                    icon={IconMessagesOff}
                    title={'No chats yet'}
                    description={'You have nobody to share with'}
                />
            )}
            {(loadingChats || loadingChatData) && (
                <Flex jc="center" width="100%" height="100%">
                    <Loading />
                </Flex>
            )}
        </ShareModalStyled>
    );
};
