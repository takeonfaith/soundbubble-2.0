import { NotificationBadge } from '../../../layout/sidebar/styles';
import { ChatTypingIndicator } from '../../../routing/chat/ChatDialog/ChatTypingIndicator';
import { MessageSentStatus } from '../../../routing/chat/ChatDialog/MessageSentStatus';
import { Flex } from '../../../shared/components/flex';
import { ENTITIES_ICONS } from '../../../shared/constants/icons';
import { TPlaylist } from '../../playlist/model/types';
import { TSong } from '../../song/model/types';
import { getLastSeen } from '../../user/lib/getLastSeen';
import { userModel } from '../../user/model';
import { TUser } from '../../user/model/types';
import { UserCover } from '../../user/ui/UserCover';
import { UserCoverBackground } from '../../user/ui/UserCoverBackground';
import { UserStatus } from '../../user/ui/UserStatus';
import { OnlineIndicator } from '../../user/ui/styles';
import { getLastMessageDate } from '../lib/getLastMessageDate';
import { getLastMessageSender } from '../lib/getLastMessageSender';
import { getSendStatus } from '../lib/getSendStatus';
import { TChat, TChatData, TMessage } from '../model/types';
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
    chatData: TChatData;
    lastMessage?: TMessage;
    unreadCount: number;
    isSelected: boolean;
    children?: React.ReactNode;
    onClick?: (chat: TChat, e: Evt<'a'>) => void;
    size?: 's' | 'm';
};

const coverSizes = {
    s: '35px',
    m: '50px',
};

export const ChatItem = ({
    chat,
    isSelected,
    unreadCount,
    lastMessage,
    chatData,
    children,
    onClick,
    size = 'm',
}: Props) => {
    const [{ data: currentUser }] = userModel.useUser();
    const isGroupChat = chat.chatName !== '';
    const notYou = chat.participants.filter((p) => p !== currentUser?.uid);
    const chatPartner = chatData[notYou[0]] as TUser;
    const chatImage = isGroupChat ? chat.chatImage : chatPartner?.photoURL;
    const chatTitle = isGroupChat ? chat.chatName : chatPartner?.displayName;
    const status = getLastSeen(chatPartner?.online).status;
    const sendStatus = getSendStatus(lastMessage);

    const { sender } = getLastMessageSender(
        lastMessage,
        isGroupChat,
        chatData,
        currentUser
    );
    const lastMessageDate = getLastMessageDate(lastMessage);
    const song =
        lastMessage?.attachedSongs.length !== 0
            ? (chatData[lastMessage?.attachedSongs[0] ?? ''] as TSong)?.name
            : null;
    const author =
        lastMessage?.attachedAuthors.length !== 0
            ? (chatData[lastMessage?.attachedAuthors[0] ?? ''] as TUser)
                  ?.displayName
            : null;
    const album =
        lastMessage?.attachedAlbums.length !== 0
            ? (chatData[lastMessage?.attachedAlbums[0] ?? ''] as TPlaylist)
                  ?.name
            : null;
    const typing =
        chat?.typing
            .filter((u) => u !== currentUser?.uid)
            .map((id) => chatData[id] as TUser) ?? [];

    const handleClick = (e: Evt<'a'>) => {
        onClick?.(chat, e);
    };

    return (
        <ChatItemStyled
            onClick={handleClick}
            to={`/chat/${chat.id}`}
            className={isSelected ? 'selected' : ''}
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
                {status === 'online' && !isGroupChat && <OnlineIndicator />}
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
                                isMine={sender === 'You'}
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
                                            : status
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
                        <NotificationBadge>{unreadCount}</NotificationBadge>
                    )}
                </Flex>
            </Flex>
            {children}
        </ChatItemStyled>
    );
};
