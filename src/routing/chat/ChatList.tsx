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

export const ChatList = () => {
    const { chats, chatData, lastMessage, unreadCounts, currentChatId } =
        chatModel.useChats();

    const handleCreateChatModal = () => {
        modalModel.events.open({
            title: 'Create chat with friends',
            content: <CreateChatModal />,
        });
    };

    return (
        <ListOfChats className={!currentChatId ? 'no-chat' : ''}>
            <DesktopWrapperStyled>
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
            </ChatListStyled>
        </ListOfChats>
    );
};
