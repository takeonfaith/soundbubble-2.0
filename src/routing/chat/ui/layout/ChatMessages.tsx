import { IconArrowDown } from '@tabler/icons-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useChatInfo } from '../../../../entities/chat/hooks/useChatInfo';
import { SYSTEM_MESSAGE_SENDER } from '../../../../entities/chat/lib/getLastMessageSender';
import { chatModel } from '../../../../entities/chat/model';
import { userModel } from '../../../../entities/user/model';
import { TUser } from '../../../../entities/user/model/types';
import { UserCover } from '../../../../entities/user/ui/UserCover';
import { UserCoverBackground } from '../../../../entities/user/ui/UserCoverBackground';
import { NotificationBadge } from '../../../../layout/sidebar/styles';
import { Flex } from '../../../../shared/components/flex';
import { Loading } from '../../../../shared/components/loading';
import { SkeletonPageAnimation } from '../../../../shared/components/skeleton/SkeletonPageAnimation';
import { areDatesEqual } from '../../../../shared/funcs/areDatesEqual';
import { prepareMessages } from '../../lib/prepareMessages';
import { LoadingMoreMessages } from './LoadingMoreMessages';
import { MessageList } from './MessageList';
import { NoMessagesText } from './NoMessagesText';
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
import { dateToString } from '../../../../shared/funcs/dateToString';

export const ChatMessages = () => {
    const [cache] = chatModel.useCache();
    const [currentChat] = chatModel.useCurrentChat();
    const [
        messages,
        loading,
        loadingPrevious,
        canMoreBeLoaded,
        firstUnreadMessage,
    ] = chatModel.useMessages();
    const [currentUser] = userModel.useUser();
    const [unreadMap, maxSeenAtInCurrentChat, myLastReadAt] =
        chatModel.useUnread();
    // console.log({
    //     myLastReadAt: new Date(myLastReadAt).toLocaleDateString('ru-RU', {
    //         hour: '2-digit',
    //         minute: '2-digit',
    //         second: '2-digit',
    //     }),
    //     maxSeenAtInCurrentChat: new Date(
    //         maxSeenAtInCurrentChat ?? 0
    //     ).toLocaleDateString('ru-RU', {
    //         hour: '2-digit',
    //         minute: '2-digit',
    //         second: '2-digit',
    //     }),
    // });

    const unreadMessages = currentChat ? unreadMap[currentChat.id] : 0;
    const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLDivElement>(null);

    const { chatImage, chatTitle } = useChatInfo(
        currentChat,
        cache,
        currentUser
    );
    const preparedMessages = prepareMessages(messages);

    const handleSeenMessage = useCallback((sentTime: number) => {
        chatModel.events.updateUnread(sentTime);
    }, []);

    useEffect(() => {
        setShouldScrollToBottom(true);
    }, [currentChat?.id]);

    useEffect(() => {
        if (shouldScrollToBottom && !loading) {
            anchorRef.current?.scrollIntoView({
                behavior: 'instant',
                block: 'end',
            });
        }
    }, [messages.length, loading, shouldScrollToBottom, firstUnreadMessage]);

    if (!currentChat) return null;

    return (
        <ChatMessagesStyled
            className={firstUnreadMessage ? 'shift-to-first-unread' : ''}
            ref={scrollRef}
        >
            <SkeletonPageAnimation
                loading={loading}
                skeleton={
                    <Flex height="100%" width="100%" jc="center">
                        <Loading />
                    </Flex>
                }
                style={{ height: '100%' }}
            >
                {!loading && (
                    <LoadingMoreMessages
                        messages={messages}
                        currentChat={currentChat}
                        canMoreBeLoaded={canMoreBeLoaded}
                        loadingPrevious={loadingPrevious}
                        scrollRef={scrollRef}
                        setShouldScrollToBottom={setShouldScrollToBottom}
                        shouldScrollBottom={shouldScrollToBottom}
                    />
                )}

                {!loading && preparedMessages.length === 0 && (
                    <NoMessagesText />
                )}

                {!loading &&
                    preparedMessages.map((m, i, arr) => {
                        const sender = cache[m[0].sender] as TUser;
                        const isMine = m[0].sender === currentUser?.uid;

                        const showDate = !areDatesEqual(
                            new Date(arr[i][0]?.sentTime ?? ''),
                            new Date(arr[i - 1]?.[0]?.sentTime ?? '')
                        );
                        const isSystemMessage =
                            m[0].sender === SYSTEM_MESSAGE_SENDER;
                        const date = dateToString(
                            new Date(arr[i][0]?.sentTime ?? '')
                        );
                        const isNotSeenFirst = firstUnreadMessage
                            ? m.find(
                                  (message) =>
                                      message.id === firstUnreadMessage.id &&
                                      !isMine
                              )
                            : false;

                        return (
                            <React.Fragment key={i}>
                                {showDate && (
                                    <MessagesDate>{date}</MessagesDate>
                                )}
                                {isNotSeenFirst && (
                                    <SystemMessageItemStyled
                                        className="bg"
                                        ref={anchorRef}
                                    >
                                        Unread messages
                                    </SystemMessageItemStyled>
                                )}

                                <MessageSecton className={isMine ? 'mine' : ''}>
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
                                    <MessagesSection
                                        className={
                                            isSystemMessage
                                                ? 'system'
                                                : isMine
                                                ? 'mine'
                                                : ''
                                        }
                                    >
                                        <MessageList
                                            maxSeenAtInCurrentChat={
                                                maxSeenAtInCurrentChat
                                            }
                                            myLastReadAt={myLastReadAt}
                                            messages={m}
                                            chatId={currentChat.id}
                                            participants={
                                                currentChat.participants
                                            }
                                            currentUser={currentUser}
                                            cache={cache}
                                            handleSeenMessage={
                                                handleSeenMessage
                                            }
                                        />
                                    </MessagesSection>
                                </MessageSecton>
                            </React.Fragment>
                        );
                    })}
                <div
                    ref={!firstUnreadMessage ? anchorRef : undefined}
                    style={{ width: '100%', minHeight: '90px' }}
                />
                {!shouldScrollToBottom && (
                    <ScrollToChatBottomButton>
                        <IconArrowDown size={20} />
                        {!!unreadMessages && (
                            <NotificationBadge>
                                {unreadMessages.unreadCount}
                            </NotificationBadge>
                        )}
                    </ScrollToChatBottomButton>
                )}
            </SkeletonPageAnimation>
        </ChatMessagesStyled>
    );
};
