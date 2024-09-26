import { IconArrowLeft, IconDots } from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { useChatInfo } from '../../../entities/chat/hooks/useChatInfo';
import { chatModel } from '../../../entities/chat/model';
import { ChatTitle } from '../../../entities/chat/ui/styles';
import { userModel } from '../../../entities/user/model';
import { UserCover } from '../../../entities/user/ui/UserCover';
import { UserCoverBackground } from '../../../entities/user/ui/UserCoverBackground';
import { UserStatus } from '../../../entities/user/ui/UserStatus';
import { OnlineIndicator } from '../../../entities/user/ui/styles';
import { popupModel } from '../../../layout/popup/model';
import { Button } from '../../../shared/components/button';
import { Flex } from '../../../shared/components/flex';
import { SkeletonShape } from '../../../shared/components/skeleton';
import { Subtext } from '../../../shared/components/subtext';
import { ChatDialogContextMenu } from './ChatDialogContextMenu';
import { ChatTypingIndicator } from './ChatTypingIndicator';
import { ChatHeaderStyled } from './styles';

export const ChatHeader = () => {
    const { chats, currentChatId, chatData } = chatModel.useChats();
    const [currentUser] = userModel.useUser();
    const currentChat = chats.find((chat) => chat.id === currentChatId);

    const {
        chatImage,
        chatTitle,
        isGroupChat,
        typing,
        membersOnline,
        statuses,
    } = useChatInfo(currentChat, chatData, currentUser);

    const navigate = useNavigate();

    const handleContextMenu = (e: Evt<'btn'>) => {
        e.stopPropagation();
        popupModel.events.open({
            content: <ChatDialogContextMenu />,
            e,
            height: 136,
        });
    };

    return (
        <ChatHeaderStyled>
            <Flex gap={8}>
                <Button
                    $width="35px"
                    $height="35px"
                    style={{ borderRadius: '100%' }}
                >
                    <IconArrowLeft
                        size={20}
                        onClick={() => navigate('/chat')}
                    />
                </Button>
                <Flex gap={10}>
                    {!!Object.keys(chatData).length && (
                        <>
                            <UserCover
                                fallbackIcon={
                                    <UserCoverBackground
                                        name={chatTitle ?? 'Undefined'}
                                        width="35px"
                                    />
                                }
                                size="35px"
                                src={chatImage}
                                colors={['grey']}
                                isAuthor={false}
                            >
                                {statuses[0] === 'online' && !isGroupChat && (
                                    <OnlineIndicator />
                                )}
                            </UserCover>
                            <Flex d="column" ai="flex-start" gap={1}>
                                <ChatTitle>{chatTitle ?? 'Untitled'}</ChatTitle>
                                <ChatTypingIndicator
                                    typing={typing}
                                    isGroupChat={isGroupChat}
                                >
                                    {isGroupChat ? (
                                        <Subtext>
                                            {currentChat?.participants.length
                                                ? `${currentChat?.participants.length} members`
                                                : null}
                                            {membersOnline !== 0 &&
                                                `, ${membersOnline} online`}
                                        </Subtext>
                                    ) : (
                                        <UserStatus
                                            isAuthor={false}
                                            showLastSeen
                                            status={statuses[0]}
                                        />
                                    )}
                                </ChatTypingIndicator>
                            </Flex>
                        </>
                    )}
                    {!Object.keys(chatData).length && (
                        <Flex gap={16}>
                            <SkeletonShape
                                width="35px"
                                height="35px"
                                radius="100%"
                            />
                            <Flex gap={2} d="column" ai="flex-start">
                                <SkeletonShape width="100px" height="12px" />
                                <SkeletonShape width="40px" height="9px" />
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
            <Flex width="fit-content">
                <Button $width="40px" onClick={handleContextMenu}>
                    <IconDots size={20} />
                </Button>
            </Flex>
        </ChatHeaderStyled>
    );
};
