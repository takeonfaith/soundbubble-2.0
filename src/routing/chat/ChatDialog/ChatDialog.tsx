import {
    IconArrowDown,
    IconArrowUp,
    IconCirclePlus,
} from '@tabler/icons-react';
import React, { useEffect, useRef, useState } from 'react';
import { SYSTEM_MESSAGE_SENDER } from '../../../entities/chat/lib/getLastMessageSender';
import { chatModel } from '../../../entities/chat/model';
import { TMessage } from '../../../entities/chat/model/types';
import { userModel } from '../../../entities/user/model';
import { TUser } from '../../../entities/user/model/types';
import { UserCover } from '../../../entities/user/ui/UserCover';
import { UserCoverBackground } from '../../../entities/user/ui/UserCoverBackground';
import { NotificationBadge } from '../../../layout/sidebar/styles';
import { Button } from '../../../shared/components/button';
import { Flex } from '../../../shared/components/flex';
import { Loading } from '../../../shared/components/loading';
import { areDatesEqual } from '../../../shared/funcs/areDatesEqual';
import getUID from '../../../shared/funcs/getUID';
import { useUrlParamId } from '../../../shared/hooks/useUrlParamId';
import { prepareMessages } from '../lib/prepareMessages';
import { ChatHeader } from './ChatHeader';
import { MessageItem } from './MessageItem';
import { SystemMessageItem } from './SystemMessageItem';
import {
    AvatarSection,
    ChatDialogStyled,
    ChatInput,
    ChatInputArea,
    ChatMessagesStyled,
    MessageSecton,
    MessagesDate,
    MessagesSection,
    ScrollToChatBottomButton,
    SendButton,
    UserAvatarStyled,
} from './styles';

// const MessageItemSkeleton = () => {
// 	return <Flex gap={16} ai="flex-end">
// 		<SkeletonShape minWidth="35px" width="35px" height="35px" radius="100%" />
// 		<SkeletonShape width="fit-content" height="60px" radius="8px 16px 16px 8px">
// 			<Flex gap={4} padding="12px" d="column" ai="flex-start">
// 				<SkeletonShape width="200px" height="12px" />
// 				<SkeletonShape width="80px" height="10px" />
// 			</Flex>
// 		</SkeletonShape >
// 	</Flex>
// }

// const ChatDialogSkeleton = () => {
// 	return <Flex d="column" ai="flex-start" width="100%" height="100%" padding="20px" gap={10}>
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 	</Flex>
// }

const createNewMessage = (userId: string, message: string): TMessage => {
    return {
        id: getUID(),
        sender: userId,
        message,
        sentTime: new Date().getTime(),
        seenBy: [userId],
        attachedAlbums: [],
        attachedSongs: [],
        attachedAuthors: [],
        inResponseToMessage: '',
        status: 'pending',
    };
};

export const ChatDialog = () => {
    const {
        chats,
        currentChatId,
        currentChatMessages,
        currentChatMessagesLoading,
        chatData,
        //   firstUnreadMessageId,
    } = chatModel.useChats();
    const [{ data }] = userModel.useUser();
    const preparedMessages = prepareMessages(currentChatMessages);
    const currentChat = chats.find((chat) => chat.id === currentChatId);
    const notYou =
        currentChat?.participants.filter((p) => p !== data?.uid) ?? [];
    const chatPartner = chatData[notYou[0]] as TUser;
    const isGroupChat = currentChat?.chatName !== '';
    const chatImage = isGroupChat
        ? currentChat?.chatImage
        : chatPartner?.photoURL;
    const chatTitle = isGroupChat
        ? currentChat?.chatName
        : chatPartner?.displayName;

    const anchorRef = useRef<HTMLDivElement>(null);

    const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);
    const unreadMessages =
        currentChatMessages.filter(
            (message) => !message.seenBy?.includes(data?.uid ?? '')
        ) ?? 0;
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useUrlParamId({
        page: 'chat',
        onChangeId: (id) => {
            setShouldScrollToBottom(true);
            chatModel.events.setCurrentChatId(id);
        },
    });

    const handleChangeValue = (e: Evt<'input'>) => {
        setValue(e.currentTarget.value);
    };

    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        console.log(e.currentTarget.scrollTop, e.currentTarget.scrollHeight);

        if (e.currentTarget.scrollTop >= e.currentTarget.scrollHeight - 800) {
            setShouldScrollToBottom(true);
        } else {
            setShouldScrollToBottom(false);
        }
    };

    const handleSendMessage = () => {
        if (value.trim().length === 0 || !data?.uid) return;
        if (currentChatId) {
            const message = createNewMessage(data?.uid, value);

            chatModel.events.sendMessage({ chatId: currentChatId, message });
        }
        setValue('');
        inputRef.current?.focus();
    };

    useEffect(() => {
        console.log(shouldScrollToBottom);

        if (anchorRef.current && shouldScrollToBottom) {
            anchorRef.current.scrollIntoView({
                block: 'end',
            });
        }
    }, [currentChatMessages.length, shouldScrollToBottom]);

    const handleSeenMessage = (messageId: string) => {
        chatModel.events.seenMessage(messageId);
    };

    return (
        <ChatDialogStyled>
            <ChatHeader />
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
                            <>
                                {showDate && (
                                    <MessagesDate>{date}</MessagesDate>
                                )}
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
                                                    data?.uid ?? ''
                                                );
                                            if (isSystemMessage)
                                                return (
                                                    <SystemMessageItem
                                                        message={message}
                                                        key={message.id}
                                                    />
                                                );
                                            return (
                                                <React.Fragment
                                                    key={message.id}
                                                >
                                                    <MessageItem
                                                        isFirst={i === 0}
                                                        chatData={chatData}
                                                        key={message.id}
                                                        isPrevByTheSameSender={
                                                            i !== m.length - 1
                                                        }
                                                        message={message}
                                                        isMine={
                                                            message.sender ===
                                                            data?.uid
                                                        }
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
                            </>
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
            <ChatInputArea>
                <Button $width="40px">
                    <IconCirclePlus />
                </Button>
                <ChatInput
                    ref={inputRef}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSendMessage();
                        }
                    }}
                    placeholder="Type something"
                    value={value}
                    onChange={handleChangeValue}
                />
                {value.length !== 0 && (
                    <SendButton $height="35px" onClick={handleSendMessage}>
                        <IconArrowUp size={23} />
                    </SendButton>
                )}
            </ChatInputArea>
        </ChatDialogStyled>
    );
};
