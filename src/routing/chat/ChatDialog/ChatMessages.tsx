import React, { useEffect, useRef, useState } from 'react';
import {
    AvatarSection,
    ChatMessagesStyled,
    MessagesDate,
    MessageSecton,
    MessagesSection,
    ScrollToChatBottomButton,
    SystemMessageItemStyled,
    UserAvatarStyled,
} from './styles';
import { useChatInfo } from '../../../entities/chat/hooks/useChatInfo';
import { chatModel } from '../../../entities/chat/model';
import { userModel } from '../../../entities/user/model';
import { prepareMessages } from '../lib/prepareMessages';
import { IconArrowDown } from '@tabler/icons-react';
import { SYSTEM_MESSAGE_SENDER } from '../../../entities/chat/lib/getLastMessageSender';
import { TUser } from '../../../entities/user/model/types';
import { UserCover } from '../../../entities/user/ui/UserCover';
import { UserCoverBackground } from '../../../entities/user/ui/UserCoverBackground';
import { NotificationBadge } from '../../../layout/sidebar/styles';
import { Flex } from '../../../shared/components/flex';
import { Loading } from '../../../shared/components/loading';
import { areDatesEqual } from '../../../shared/funcs/areDatesEqual';
import { MessageItem } from './messageItem/MessageItem';

export const ChatMessages = () => {
    const {
        chats,
        currentChatId,
        currentChatMessages,
        currentChatMessagesLoading,
        chatData,
    } = chatModel.useChats();
    const [currentUser] = userModel.useUser();
    const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);
    const currentChat = chats.find((chat) => chat.id === currentChatId);
    const anchorRef = useRef<HTMLDivElement>(null);

    const { chatImage, chatTitle } = useChatInfo(
        currentChat,
        chatData,
        currentUser
    );
    const preparedMessages = prepareMessages(currentChatMessages);

    const unreadMessages =
        currentChatMessages.filter(
            (message) => !message.seenBy?.includes(currentUser?.uid ?? '')
        ) ?? 0;

    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        if (e.currentTarget.scrollTop >= e.currentTarget.scrollHeight - 800) {
            setShouldScrollToBottom(true);
        } else {
            setShouldScrollToBottom(false);
        }
    };

    const handleSeenMessage = (messageId: string) => {
        chatModel.events.seenMessage(messageId);
    };

    useEffect(() => {
        setShouldScrollToBottom(true);
    }, [currentChatId]);

    useEffect(() => {
        if (anchorRef.current && shouldScrollToBottom) {
            anchorRef.current.scrollIntoView({
                block: 'end',
            });
        }
    }, [currentChatMessages.length, shouldScrollToBottom]);

    if (!currentChat) return null;

    return (
        <ChatMessagesStyled onScroll={handleScroll}>
            {currentChatMessagesLoading && (
                <Flex jc="center" height="100%" width="100%">
                    <Loading />
                </Flex>
            )}
            {!currentChatMessagesLoading &&
                preparedMessages.map((m, i, arr) => {
                    const sender = chatData[m[0].sender] as TUser;
                    const showDate = !areDatesEqual(
                        new Date(arr[i][0]?.sentTime ?? ''),
                        new Date(arr[i - 1]?.[0]?.sentTime ?? '')
                    );
                    const isSystemMessage =
                        m[0].sender === SYSTEM_MESSAGE_SENDER;
                    const date = new Date(
                        arr[i][0]?.sentTime ?? ''
                    ).toLocaleDateString('ru-RU', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                    });
                    // const isNotSeenFirst = m.find(
                    //     (message) => message.id === firstUnreadMessageId
                    // );

                    return (
                        <React.Fragment key={i}>
                            {showDate && <MessagesDate>{date}</MessagesDate>}
                            {/* {isNotSeenFirst && <SystemMessageItem message={createNewMessage('soundbubble', "Unread Messages")} />} */}
                            <MessageSecton>
                                {!isSystemMessage && (
                                    <AvatarSection>
                                        <UserAvatarStyled>
                                            <UserCover
                                                fallbackIcon={
                                                    <UserCover
                                                        fallbackIcon={
                                                            <UserCoverBackground
                                                                width="35px"
                                                                name={
                                                                    chatTitle ??
                                                                    'Undefined'
                                                                }
                                                            />
                                                        }
                                                        size="35px"
                                                        src={chatImage}
                                                        colors={['grey']}
                                                        isAuthor={false}
                                                    />
                                                }
                                                colors={['grey']}
                                                size={'35px'}
                                                src={sender?.photoURL}
                                                isAuthor={false}
                                            />
                                        </UserAvatarStyled>
                                    </AvatarSection>
                                )}
                                <MessagesSection>
                                    {m.map((message, i) => {
                                        const isNotSeen =
                                            !message.seenBy?.includes(
                                                currentUser?.uid ?? ''
                                            );
                                        if (isSystemMessage)
                                            return (
                                                <SystemMessageItemStyled
                                                    key={message.id}
                                                >
                                                    {message.message}
                                                </SystemMessageItemStyled>
                                            );
                                        return (
                                            <React.Fragment key={message.id}>
                                                <MessageItem
                                                    chatId={currentChat.id}
                                                    isFirst={i === 0}
                                                    chatData={chatData}
                                                    key={message.id}
                                                    isPrevByTheSameSender={
                                                        i !== m.length - 1
                                                    }
                                                    message={message}
                                                    isMine={
                                                        message.sender ===
                                                        currentUser?.uid
                                                    }
                                                    isNotSeen={!!isNotSeen}
                                                    onSeen={handleSeenMessage}
                                                />
                                            </React.Fragment>
                                        );
                                    })}
                                </MessagesSection>
                            </MessageSecton>
                            {/* {isNotSeenFirst && <div ref={anchorRef} style={{ width: '100%', minHeight: '20px' }} />} */}
                        </React.Fragment>
                    );
                })}
            {
                <div
                    ref={anchorRef}
                    style={{ width: '100%', minHeight: '20px' }}
                />
            }
            {!shouldScrollToBottom && (
                <ScrollToChatBottomButton>
                    <IconArrowDown size={20} />
                    {unreadMessages.length !== 0 && (
                        <NotificationBadge>
                            {unreadMessages.length}
                        </NotificationBadge>
                    )}
                </ScrollToChatBottomButton>
            )}
        </ChatMessagesStyled>
    );
};
