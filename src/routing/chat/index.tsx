import { IconMessagePlus, IconSearch } from '@tabler/icons-react';
import { Outlet } from 'react-router';
import styled, { useTheme } from 'styled-components';
import { chatModel } from '../../entities/chat/model';
import { ChatItem } from '../../entities/chat/ui/ChatItem';
import { CreateChatModal } from '../../features/createChatModal';
import { Header } from '../../layout/header';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { ChatsSkeleton } from './ChatsSkeleton';

const ChatPageStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 768px) {
        width: auto;
        height: auto;
    }
`;

const MobileChatSearchStyled = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;

const DesktopWrapperStyled = styled.div`
    display: block;

    @media (max-width: 768px) {
        display: none;
    }
`;

const ListOfChats = styled.div`
    min-width: 380px;
    max-width: 380px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.pageBackground};
    border-right: 1px solid ${({ theme }) => theme.colors.border};

    @media (max-width: 768px) {
        width: 100%;
        max-width: none;
        overflow-y: hidden;
        display: none;

        &.no-chat {
            display: flex;
        }
    }
`;

const ChatContent = styled.div`
    width: 100%;

    @media (max-width: 768px) {
        display: block;

        &.no-chat {
            display: none;
        }
    }
`;

export const ChatPage = () => {
    const {
        chats,
        loadingChats,
        chatData,
        lastMessage,
        loadingChatData,
        unreadCounts,
        currentChatId,
    } = chatModel.useChats();
    const theme = useTheme();
    chatModel.useLoadChats();

    const handleCreateChat = () => {
        modalModel.events.open({
            title: 'Create chat with friends',
            content: <CreateChatModal />,
        });
    };

    return (
        <PageWrapper>
            <Header>
                <MobileChatSearchStyled>
                    <Flex gap={10} width="100%">
                        <Input
                            icon={<IconSearch />}
                            placeholder="Search for chats..."
                        />
                        <Button onClick={handleCreateChat} $width="48px">
                            <IconMessagePlus size={20} />
                        </Button>
                    </Flex>
                </MobileChatSearchStyled>
            </Header>
            <ChatPageStyled>
                <ListOfChats className={!currentChatId ? 'no-chat' : ''}>
                    <DesktopWrapperStyled>
                        <Flex width="100%" gap={10}>
                            <Input
                                icon={<IconSearch />}
                                placeholder="Search for chats..."
                            />
                            <Button onClick={handleCreateChat} $width="48px">
                                <IconMessagePlus size={20} />
                            </Button>
                        </Flex>
                    </DesktopWrapperStyled>
                    <SkeletonPageAnimation
                        background={theme.colors.pageBackground}
                        loading={loadingChats || loadingChatData}
                        skeleton={<ChatsSkeleton />}
                    >
                        <Flex
                            d="column"
                            gap={0}
                            width="100%"
                            height="100%"
                            padding="10px 0"
                        >
                            {chats.map((chat) => {
                                return (
                                    <>
                                        <ChatItem
                                            isSelected={
                                                currentChatId === chat.id
                                            }
                                            unreadCount={unreadCounts[chat.id]}
                                            lastMessage={lastMessage[chat.id]}
                                            chatData={chatData}
                                            chat={chat}
                                            key={chat.id}
                                        />
                                    </>
                                );
                            })}
                        </Flex>
                    </SkeletonPageAnimation>
                </ListOfChats>
                <ChatContent className={!currentChatId ? 'no-chat' : ''}>
                    <Outlet />
                </ChatContent>
            </ChatPageStyled>
        </PageWrapper>
    );
};
