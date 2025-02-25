import { NotificationBadge } from '../../../layout/sidebar/styles';
import { ChatTypingIndicator } from '../../../routing/chat/ui/layout/ChatTypingIndicator';
import { MessageSentStatus } from '../../../routing/chat/ui/message/MessageSentStatus';
import { Flex } from '../../../shared/components/flex';
import { userModel } from '../../user/model';
import { UserCover } from '../../user/ui/UserCover';
import { UserCoverBackground } from '../../user/ui/UserCoverBackground';
import { UserStatus } from '../../user/ui/UserStatus';
import { OnlineIndicator } from '../../user/ui/styles';
import { useChatInfo } from '../hooks/useChatInfo';
import { getLastMessageDate } from '../lib/getLastMessageDate';
import { LocalSendStatus, TCache, TChat } from '../model/types';
import { LastMessage } from './LastMessage';
import {
    ChatItemStyled,
    ChatTitle,
    LastMessageSentTimeStyled,
    LastMessageStyled,
} from './styles';

const coverSizes = {
    xs: '30px',
    s: '35px',
    m: '45px',
};

type Props = {
    chat: TChat;
    cache: TCache;
    unreadCount: number;
    isSelected: boolean;
    children?: React.ReactNode;
    sendStatus?: LocalSendStatus;
    hideLastMessage?: boolean;
    onClick?: (chat: TChat, e: Evt<'a'>) => void;
    size?: keyof typeof coverSizes;
    as?: string;
};

export const ChatItem = ({
    chat,
    isSelected,
    unreadCount,
    cache,
    children,
    onClick,
    sendStatus,
    hideLastMessage = false,
    as,
    size = 'm',
}: Props) => {
    const [currentUser] = userModel.useUser();
    const { chatTitle, chatImage, isGroupChat, typing, statuses } = useChatInfo(
        chat,
        cache,
        currentUser
    );
    const lastMessage = chat.lastMessage;
    const lastMessageDate = getLastMessageDate(lastMessage);

    const handleClick = (e: Evt<'a'>) => {
        onClick?.(chat, e);
    };

    return (
        <ChatItemStyled
            onClick={handleClick}
            to={`/chats/${chat.id}`}
            as={as}
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
                height={hideLastMessage ? '20px' : coverSizes[size]}
                width="100%"
                gap={2}
            >
                <Flex jc="space-between" width="100%">
                    <ChatTitle>{chatTitle}</ChatTitle>
                    {lastMessage && !hideLastMessage && (
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
                            {!hideLastMessage && (
                                <LastMessage
                                    cache={cache}
                                    lastMessage={lastMessage}
                                    isGroupChat={isGroupChat}
                                    currentUser={currentUser}
                                />
                            )}
                        </LastMessageStyled>
                    </ChatTypingIndicator>
                    {/* {!!unreadCount && (
                        <NotificationBadge background="blue">
                            {unreadCount}
                        </NotificationBadge>
                    )} */}
                </Flex>
            </Flex>
            {children}
        </ChatItemStyled>
    );
};
