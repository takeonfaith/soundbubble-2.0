import { IconExclamationCircle } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';
import { SYSTEM_MESSAGE_SENDER } from '../../../../entities/chat/lib/getLastMessageSender';
import {
    LocalSendStatus,
    TCache,
    TMessage,
} from '../../../../entities/chat/model/types';
import { TPlaylist } from '../../../../entities/playlist/model/types';
import { PlaylistItem } from '../../../../entities/playlist/ui';
import { TEntity, TPlace } from '../../../../entities/search/model/types';
import { createQueueObject } from '../../../../entities/song/lib/createQueueObject';
import { TSong } from '../../../../entities/song/model/types';
import { PlaneSongList } from '../../../../entities/song/ui/planeList';
import { SongSkeleton } from '../../../../entities/song/ui/Skeleton';
import { TUser } from '../../../../entities/user/model/types';
import { UserItem } from '../../../../entities/user/ui';
import { getEntityType } from '../../../../features/searchWithHints/lib/getEntityType';
import { popupModel } from '../../../../layout/popup/model';
import { Flex } from '../../../../shared/components/flex';
import { useIsOnScreen } from '../../../../shared/hooks/useIsOnScreen';
import { getTime } from '../../lib/getTime';
import {
    AttachmentStyled,
    DateAndSeenIcon,
    MessageBubble,
    MessageSender,
    MessageStyled,
    MessageWrapper,
    SystemMessageItemStyled,
} from '../layout/styles';
import { MessageContextMenu } from './MessageContextMenu';
import { MessageSentStatus } from './MessageSentStatus';
import { MessageText } from './MessageText';
import { PlaylistInvitation } from './PlaylistInvitation';

type Props = {
    chatId: string;
    message: TMessage;
    isMine: boolean;
    cache: TCache;
    isPrevByTheSameSender: boolean;
    isFirst: boolean;
    sendStatus: LocalSendStatus;
    onSeen: (sentTime: number) => void;
};

const renderAttachments = (
    attachments: string[],
    place: TPlace,
    cache: TCache,
    message: TMessage,
    chatId: string
) => {
    return attachments.map((s) => {
        const entity = cache[s] as TEntity;

        const type = getEntityType(entity);

        if (!entity) return <SongSkeleton />;

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
                name: (cache[message.sender] as TUser)?.displayName,
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
    isMine,
    cache,
    isPrevByTheSameSender,
    isFirst,
    onSeen,
    sendStatus,
}: Props) => {
    const showAttachments =
        message.attachedSongs.length ||
        message.attachedAlbums.length ||
        message.attachedAuthors.length;
    const targetRef = useRef(null);
    const isSystemMessage = message.sender === SYSTEM_MESSAGE_SENDER;
    const isOnScreen = useIsOnScreen(targetRef);

    useEffect(() => {
        if (isOnScreen && sendStatus === LocalSendStatus.sent && !isMine) {
            console.log(message.message);

            onSeen(message.sentTime);
        }
    }, [isMine, isOnScreen, sendStatus, onSeen, message.sentTime]);

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

    if (isSystemMessage) {
        return (
            <SystemMessageItemStyled ref={targetRef}>
                {message.message}
                <MessageSentStatus isMine={true} sendStatus={sendStatus} />
                <span>{getTime(message.sentTime)}</span>
            </SystemMessageItemStyled>
        );
    }

    return (
        <MessageStyled
            ref={targetRef}
            className={sendStatus === LocalSendStatus.pending ? 'new' : ''}
        >
            {!isMine && isFirst && (
                <MessageSender>
                    {(cache[message.sender] as TUser)?.displayName}
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
                                    cache={cache}
                                />
                            )}
                            <MessageText message={message.message} />
                            {!!showAttachments && (
                                <AttachmentStyled>
                                    {renderAttachments(
                                        message.attachedSongs,
                                        'songs',
                                        cache,
                                        message,
                                        chatId
                                    )}
                                    {renderAttachments(
                                        message.attachedAlbums,
                                        'playlists',
                                        cache,
                                        message,
                                        chatId
                                    )}
                                    {renderAttachments(
                                        message.attachedAuthors,
                                        'users',
                                        cache,
                                        message,
                                        chatId
                                    )}
                                </AttachmentStyled>
                            )}
                        </MessageWrapper>
                    </Flex>
                    {!message.playlistInvitation?.id && (
                        <DateAndSeenIcon>
                            <span>{getTime(message.sentTime)}</span>
                            <MessageSentStatus
                                isMine={true}
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
