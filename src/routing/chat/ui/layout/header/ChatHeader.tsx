import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { useChatInfo } from '../../../../../entities/chat/hooks/useChatInfo';
import { chatModel } from '../../../../../entities/chat/model';
import { ChatTitle } from '../../../../../entities/chat/ui/styles';
import { userModel } from '../../../../../entities/user/model';
import { OnlineIndicator } from '../../../../../entities/user/ui/styles';
import { UserCover } from '../../../../../entities/user/ui/UserCover';
import { UserCoverBackground } from '../../../../../entities/user/ui/UserCoverBackground';
import { modalModel } from '../../../../../layout/modal/model';
import { Button } from '../../../../../shared/components/button';
import { Flex } from '../../../../../shared/components/flex';
import { SkeletonShape } from '../../../../../shared/components/skeleton';
import { ChatHeaderStyled } from '../styles';
import { ChatInfo } from './ChatInfo';
import { ChatStatus } from './ChatStatus';
export const ChatHeader = () => {
    const [currentChat] = chatModel.useCurrentChat();
    const [cache] = chatModel.useCache();
    const [currentUser] = userModel.useUser();

    const {
        chatImage,
        chatTitle,
        isGroupChat,
        typing,
        membersOnline,
        statuses,
    } = useChatInfo(currentChat, cache, currentUser);

    const navigate = useNavigate();

    const handleOpenInfo = () => {
        if (currentChat) {
            modalModel.events.open({
                title: 'Chat Information',
                content: <ChatInfo cache={cache} />,
                sizeY: 'm',
            });
        }
    };

    return (
        <ChatHeaderStyled onClick={handleOpenInfo}>
            <Flex gap={8} width="100%" jc="space-between">
                <Button
                    $width="35px"
                    $height="35px"
                    style={{ borderRadius: '100%' }}
                >
                    <IconArrowLeft
                        size={20}
                        onClick={(e) => {
                            e.stopPropagation();
                            navigate('/chats');
                        }}
                    />
                </Button>
                <Flex gap={10}>
                    {!!Object.keys(cache).length && (
                        <Flex d="column" gap={1}>
                            <ChatTitle>{chatTitle ?? 'Untitled'}</ChatTitle>
                            <ChatStatus
                                isGroupChat={isGroupChat}
                                typing={typing}
                                membersOnline={membersOnline}
                                participants={currentChat?.participants}
                                statuses={statuses}
                            />
                        </Flex>
                    )}
                    {!Object.keys(cache).length && (
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
                    {!isGroupChat && statuses[0] === 'online' && (
                        <OnlineIndicator />
                    )}
                </UserCover>
            </Flex>
        </ChatHeaderStyled>
    );
};
