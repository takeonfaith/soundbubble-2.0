import { NotificationBadge } from '../../../layout/sidebar/styles';
import { ChatTypingIndicator } from '../../../routing/chat/ui/layout/ChatTypingIndicator';
import { MessageSentStatus } from '../../../routing/chat/ui/message/MessageSentStatus';
import { Flex } from '../../../shared/components/flex';
import { ENTITIES_ICONS } from '../../../shared/constants/icons';
import { TPlaylist } from '../../playlist/model/types';
import { TSong } from '../../song/model/types';
import { userModel } from '../../user/model';
import { TUser } from '../../user/model/types';
import { UserCover } from '../../user/ui/UserCover';
import { UserCoverBackground } from '../../user/ui/UserCoverBackground';
import { UserStatus } from '../../user/ui/UserStatus';
import { OnlineIndicator } from '../../user/ui/styles';
import { useChatInfo } from '../hooks/useChatInfo';
import { getLastMessageDate } from '../lib/getLastMessageDate';
import { getLastMessageSender } from '../lib/getLastMessageSender';
import { LocalSendStatus, TCache, TChat } from '../model/types';
import {
    ChatItemStyled,
    ChatTitle,
    LastMessageAttachmentStyled,
    LastMessageSentTimeStyled,
    LastMessageStyled,
    LastMessageTextStyled,
} from './styles';

type Props = {
    chat: TChat;
    cache: TCache;
    unreadCount: number;
    isSelected: boolean;
    children?: React.ReactNode;
    sendStatus: LocalSendStatus;
    onClick?: (chat: TChat, e: Evt<'a'>) => void;
    size?: 's' | 'm';
};

const coverSizes = {
    s: '35px',
    m: '45px',
};

export const ChatItem = ({
    chat,
    isSelected,
    unreadCount,
    cache,
    children,
    onClick,
    sendStatus,
    size = 'm',
}: Props) => {
    const [currentUser] = userModel.useUser();
    const { chatTitle, chatImage, isGroupChat, typing, statuses } = useChatInfo(
        chat,
        cache,
        currentUser
    );
    const lastMessage = chat.lastMessage;

    const { sender } = getLastMessageSender(
        lastMessage,
        isGroupChat,
        cache,
        currentUser
    );
    const lastMessageDate = getLastMessageDate(lastMessage);
    const song =
        lastMessage?.attachedSongs.length !== 0
            ? (cache[lastMessage?.attachedSongs[0] ?? ''] as TSong)?.name
            : null;
    const author =
        lastMessage?.attachedAuthors.length !== 0
            ? (cache[lastMessage?.attachedAuthors[0] ?? ''] as TUser)
                  ?.displayName
            : null;
    const album =
        lastMessage?.attachedAlbums.length !== 0
            ? (cache[lastMessage?.attachedAlbums[0] ?? ''] as TPlaylist)?.name
            : null;

    const handleClick = (e: Evt<'a'>) => {
        onClick?.(chat, e);
    };

    return (
        <ChatItemStyled
            onClick={handleClick}
            to={`/chat/${chat.id}`}
            className={`chat-item ${isSelected ? 'selected' : ''}`}
        >
            <UserCover
                fallbackIcon={
                    <UserCoverBackground
                        name={chatTitle}
                        width={coverSizes[size]}
                    />
                }
                size={coverSizes[size]}
                src={chatImage}
                colors={['grey']}
                isAuthor={false}
            >
                {statuses[0] === 'online' && !isGroupChat && (
                    <OnlineIndicator />
                )}
            </UserCover>
            <Flex
                d="column"
                ai="flex-start"
                height={coverSizes[size]}
                width="100%"
                gap={2}
            >
                <Flex jc="space-between" width="100%">
                    <ChatTitle>{chatTitle}</ChatTitle>
                    {lastMessage && (
                        <LastMessageSentTimeStyled>
                            <MessageSentStatus
                                isMine={
                                    currentUser?.uid ===
                                    chat.lastMessage?.sender
                                }
                                sendStatus={sendStatus}
                            />
                            <span>{lastMessageDate}</span>
                        </LastMessageSentTimeStyled>
                    )}
                </Flex>
                <Flex width="100%" jc="space-between">
                    <ChatTypingIndicator
                        isGroupChat={isGroupChat}
                        typing={typing}
                    >
                        <LastMessageStyled>
                            {!lastMessage && (
                                <UserStatus
                                    status={
                                        isGroupChat
                                            ? `${chat.participants.length} members`
                                            : statuses[0]
                                    }
                                    isAuthor={false}
                                    showLastSeen
                                />
                            )}
                            <LastMessageTextStyled>
                                {sender && `${sender}:`}{' '}
                                {lastMessage?.message.substring(0, 70)}{' '}
                                {(lastMessage?.message?.length ?? 0) > 70
                                    ? '...'
                                    : ''}
                                {song && (
                                    <LastMessageAttachmentStyled>
                                        {ENTITIES_ICONS.song}
                                        {song}
                                    </LastMessageAttachmentStyled>
                                )}
                                {author && (
                                    <LastMessageAttachmentStyled>
                                        {ENTITIES_ICONS.author}
                                        {author}
                                    </LastMessageAttachmentStyled>
                                )}
                                {album && (
                                    <LastMessageAttachmentStyled>
                                        {ENTITIES_ICONS.album}
                                        {album}
                                    </LastMessageAttachmentStyled>
                                )}
                            </LastMessageTextStyled>
                        </LastMessageStyled>
                    </ChatTypingIndicator>
                    {!!unreadCount && (
                        <NotificationBadge background="blue">
                            {unreadCount}
                        </NotificationBadge>
                    )}
                </Flex>
            </Flex>
            {children}
        </ChatItemStyled>
    );
};
