import { IconMessagePlus, IconSearch } from '@tabler/icons-react';
import { ChatItem } from '../../entities/chat/ui/ChatItem';
import { Button } from '../../shared/components/button';
import { Input } from '../../shared/components/input';
import {
    ChatListStyled,
    ChatSearchStyled,
    DesktopWrapperStyled,
    ListOfChats,
} from './styles';
import { CreateChatModal } from '../../features/createChatModal';
import { modalModel } from '../../layout/modal/model';
import { chatModel } from '../../entities/chat/model';
import { Flex } from '../../shared/components/flex';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { ChatsSkeleton } from './ChatsSkeleton';

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
        });
    };

    return (
        <ListOfChats className={!currentChatId ? 'no-chat' : ''}>
            <DesktopWrapperStyled>
                <Flex padding="0 0 10px 20px">
                    <h2>Chats</h2>
                </Flex>
                <ChatSearchStyled>
                    <Input
                        icon={<IconSearch />}
                        placeholder="Search for chats..."
                    />
                    <Button onClick={handleCreateChatModal} $width="48px">
                        <IconMessagePlus size={20} />
                    </Button>
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
