import { IconPencilPlus, IconSearch } from '@tabler/icons-react';
import { chatModel } from '../../entities/chat/model';
import { ChatItem } from '../../entities/chat/ui/ChatItem';
import { CreateChatModal } from '../../features/createChatModal';
import { modalModel } from '../../layout/modal/model';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { ChatsSkeleton } from './ChatsSkeleton';
import {
    ChatListStyled,
    ChatSearchStyled,
    DesktopWrapperStyled,
    ListOfChats,
} from './styles';
import { Button } from '../../shared/components/button';

export const ChatList = () => {
    const {
        chats,
        chatData,
        lastMessage,
        unreadCounts,
        currentChatId,
        loadingChats,
    } = chatModel.useChats();

    const handleCreateChatModal = () => {
        modalModel.events.open({
            title: 'Create chat with friends',
            content: <CreateChatModal />,
            sizeY: 'l',
        });
    };

    return (
        <ListOfChats className={!currentChatId ? 'no-chat' : ''}>
            <DesktopWrapperStyled>
                <Flex
                    width="100%"
                    jc="space-between"
                    padding="0 20px 10px 20px"
                >
                    <h2>Chats</h2>
                    <Button
                        className="primary"
                        $width="35px"
                        $height='35px'
                        onClick={handleCreateChatModal}
                        style={{ borderRadius: '100%' }}
                    >
                        <IconPencilPlus size={18} color="#fff" />
                    </Button>
                </Flex>
                <ChatSearchStyled>
                    <Input
                        icon={<IconSearch />}
                        placeholder="Search for chats..."
                        style={{ borderRadius: '20px' }}
                    />
                </ChatSearchStyled>
            </DesktopWrapperStyled>
            <ChatListStyled>
                <SkeletonPageAnimation
                    loading={loadingChats || !chatData}
                    skeleton={<ChatsSkeleton />}
                >
                    {chats.map((chat) => {
                        return (
                            <ChatItem
                                isSelected={currentChatId === chat.id}
                                unreadCount={unreadCounts[chat.id]}
                                lastMessage={lastMessage[chat.id]}
                                chatData={chatData}
                                chat={chat}
                                key={chat.id}
                            />
                        );
                    })}
                </SkeletonPageAnimation>
            </ChatListStyled>
        </ListOfChats>
    );
};
