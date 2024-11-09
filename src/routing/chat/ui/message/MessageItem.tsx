import { IconExclamationCircle } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import { getSendStatus } from '../../../../entities/chat/lib/getSendStatus';
import {
    LocalSendStatus,
    TChatData,
    TMessage,
} from '../../../../entities/chat/model/types';
import { TEntity, TPlace } from '../../../../entities/search/model/types';
import { createQueueObject } from '../../../../entities/song/lib/createQueueObject';
import { TSong } from '../../../../entities/song/model/types';
import { PlaneSongList } from '../../../../entities/song/ui/planeList';
import { TUser } from '../../../../entities/user/model/types';
import { UserItem } from '../../../../entities/user/ui';
import { getEntityType } from '../../../../features/searchWithHints/lib/getEntityType';
import { popupModel } from '../../../../layout/popup/model';
import { Flex } from '../../../../shared/components/flex';
import { MessageContextMenu } from './MessageContextMenu';
import { MessageSentStatus } from './MessageSentStatus';
import { MessageText } from './MessageText';
import {
    AttachmentStyled,
    DateAndSeenIcon,
    MessageBubble,
    MessageSender,
    MessageStyled,
    MessageWrapper,
} from '../layout/styles';
import { PlaylistInvitation } from './PlaylistInvitation';
import { PlaylistItem } from '../../../../entities/playlist/ui';
import { TPlaylist } from '../../../../entities/playlist/model/types';

type Props = {
    chatId: string;
    message: TMessage;
    isMine: boolean;
    chatData: TChatData;
    isPrevByTheSameSender: boolean;
    isFirst: boolean;
    isNotSeen: boolean;
    onSeen: (messageId: string) => void;
};

const renderAttachments = (
    attachments: string[],
    place: TPlace,
    chatData: TChatData,
    message: TMessage,
    chatId: string
) => {
    return attachments.map((s) => {
        const entity = chatData[s] as TEntity;

        const type = getEntityType(entity);

        if (
            place === 'users' &&
            (type === 'deleted' || 'user' || type === 'author')
        ) {
            return (
                <UserItem
                    user={entity as TUser}
                    key={s}
                    orientation="horizontal"
                />
            );
        }

        if (
            place === 'playlists' &&
            (type === 'deleted' || type === 'album' || type === 'playlist')
        ) {
            return (
                <PlaylistItem
                    isAuthor={true}
                    playlist={entity as TPlaylist}
                    orientation="horizontal"
                />
            );
        }

        if (entity) {
            const queue = createQueueObject({
                name: (chatData[message.sender] as TUser)?.displayName,
                url: `/chat/${chatId}#${message.id}`,
                id: chatId,
                songs: [entity as TSong],
            });

            return <PlaneSongList queue={queue} />;
        }

        return null;
    });
};

export const MessageItem = ({
    chatId,
    message,
    isNotSeen,
    isMine,
    chatData,
    isPrevByTheSameSender,
    isFirst,
    onSeen,
}: Props) => {
    const sendStatus = getSendStatus(message);
    const showAttachments =
        message.attachedSongs.length ||
        message.attachedAlbums.length ||
        message.attachedAuthors.length;
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const el = targetRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null, // viewport
                rootMargin: '0px', // no margin
                threshold: 0.5, // 50% of target visible
            }
        );

        if (el) {
            observer.observe(el);
        }

        // Clean up the observer
        return () => {
            if (el) {
                observer.unobserve(el);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible && isNotSeen) {
            onSeen(message.id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible, isNotSeen]);

    const handleContextMenu = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.stopPropagation();
        e.preventDefault();
        popupModel.events.open({
            content: <MessageContextMenu />,
            height: 96,
            e,
        });
    };

    return (
        <MessageStyled ref={targetRef}>
            {!isMine && isFirst && (
                <MessageSender>
                    {(chatData[message.sender] as TUser)?.displayName}
                </MessageSender>
            )}
            <Flex width="100%" gap={10}>
                <MessageBubble
                    $isFirst={isFirst}
                    onContextMenu={handleContextMenu}
                    className={
                        (isMine ? 'mine' : '') +
                        (isPrevByTheSameSender ? ' isPrevByTheSameSender' : '')
                    }
                >
                    <Flex d="column" ai="flex-start">
                        <MessageWrapper>
                            {message.playlistInvitation?.id && (
                                <PlaylistInvitation
                                    chatId={chatId}
                                    isMine={isMine}
                                    message={message}
                                    chatData={chatData}
                                />
                            )}
                            <MessageText message={message.message} />
                            {!!showAttachments && (
                                <AttachmentStyled>
                                    {renderAttachments(
                                        message.attachedSongs,
                                        'songs',
                                        chatData,
                                        message,
                                        chatId
                                    )}
                                    {renderAttachments(
                                        message.attachedAlbums,
                                        'playlists',
                                        chatData,
                                        message,
                                        chatId
                                    )}
                                    {renderAttachments(
                                        message.attachedAuthors,
                                        'users',
                                        chatData,
                                        message,
                                        chatId
                                    )}
                                </AttachmentStyled>
                            )}
                        </MessageWrapper>
                    </Flex>
                    {!message.playlistInvitation?.id && (
                        <DateAndSeenIcon>
                            <span>
                                {new Date(message.sentTime).toLocaleTimeString(
                                    'ru-RU',
                                    { hour: '2-digit', minute: '2-digit' }
                                )}
                            </span>
                            <MessageSentStatus
                                isMine={isMine}
                                sendStatus={sendStatus}
                            />
                        </DateAndSeenIcon>
                    )}
                </MessageBubble>
                {sendStatus === LocalSendStatus.error && (
                    <IconExclamationCircle color="red" size={20} />
                )}
            </Flex>
        </MessageStyled>
    );
};
