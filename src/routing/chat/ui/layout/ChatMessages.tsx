import { IconArrowDown } from '@tabler/icons-react';
import React, { useEffect, useRef, useState } from 'react';
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
import { MessageItem } from '../message/MessageItem';
import { LoadingMoreMessages } from './LoadingMoreMessages';
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

export const ChatMessages = () => {
    const [cache] = chatModel.useCache();
    const [currentChat] = chatModel.useCurrentChat();
    const [messages, loading, loadingPrevious, canMoreBeLoaded] =
        chatModel.useMessages();
    const [currentUser] = userModel.useUser();
    const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLDivElement>(null);

    const { chatImage, chatTitle } = useChatInfo(
        currentChat,
        cache,
        currentUser
    );
    const preparedMessages = prepareMessages(messages);

    const unreadMessages =
        messages.filter(
            (message) => !message?.seenBy?.includes(currentUser?.uid ?? '')
        ) ?? 0;

    const handleSeenMessage = (messageId: string) => {
        // chatModel.events.seenMessage(messageId);
    };

    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        // const should =
        //     e.currentTarget.scrollTop + window.innerHeight - 218.5 >=
        //     e.currentTarget.scrollHeight;
        // setShouldScrollToBottom(should);
    };

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
    }, [messages.length, loading, shouldScrollToBottom]);

    if (!currentChat) return null;

    return (
        <ChatMessagesStyled ref={scrollRef} onScroll={handleScroll}>
            <SkeletonPageAnimation
                loading={loading}
                skeleton={
                    <Flex height="100%" width="100%" jc="center">
                        <Loading />
                    </Flex>
                }
                style={{ height: '100%' }}
            >
                <LoadingMoreMessages
                    messages={messages}
                    canMoreBeLoaded={canMoreBeLoaded}
                    loadingPrevious={loadingPrevious}
                    scrollRef={scrollRef}
                    setShouldScrollToBottom={setShouldScrollToBottom}
                />

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
                                {showDate && (
                                    <MessagesDate>{date}</MessagesDate>
                                )}
                                {/* {isNotSeenFirst && <SystemMessageItem message={createNewMessage('soundbubble', "Unread Messages")} />} */}
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
                                        {m.map((message, i) => {
                                            const isMine =
                                                message.sender ===
                                                currentUser?.uid;

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
                                                <React.Fragment
                                                    key={message.id}
                                                >
                                                    <MessageItem
                                                        chatId={currentChat.id}
                                                        isFirst={i === 0}
                                                        cache={cache}
                                                        key={message.id}
                                                        isPrevByTheSameSender={
                                                            i !== m.length - 1
                                                        }
                                                        message={message}
                                                        isMine={isMine}
                                                        isNotSeen={!!isNotSeen}
                                                        onSeen={
                                                            handleSeenMessage
                                                        }
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
                        style={{ width: '100%', minHeight: '80px' }}
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
            </SkeletonPageAnimation>
        </ChatMessagesStyled>
    );
};
