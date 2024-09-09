import {
    IconMessageOff,
    IconMessagePlus,
    IconSearch,
} from '@tabler/icons-react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { chatModel } from '../../entities/chat/model';
import { CreateChatModal } from '../../features/createChatModal';
import { Header } from '../../layout/header';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { ChatList } from './ChatList';
import { PageMessage } from '../../shared/components/pageMessage';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';

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
    const { currentChatId } = chatModel.useChats();
    chatModel.useLoadChats();

    const handleCreateChatModal = () => {
        modalModel.events.open({
            title: 'Create chat with friends',
            content: <CreateChatModal />,
        });
    };

    useUrlParamId({
        page: 'chat',
        onChangeId: (id) => {
            chatModel.events.setCurrentChatId(id === undefined ? null : id);
        },
    });

    console.log(currentChatId);

    return (
        <PageWrapper>
            {!currentChatId && (
                <Header className="hide-on-desktop">
                    <MobileChatSearchStyled>
                        <Flex gap={10} width="100%">
                            <Input
                                icon={<IconSearch />}
                                placeholder="Search for chats..."
                            />
                            <Button
                                onClick={handleCreateChatModal}
                                $width="48px"
                            >
                                <IconMessagePlus size={20} />
                            </Button>
                        </Flex>
                    </MobileChatSearchStyled>
                </Header>
            )}
            <ChatPageStyled>
                <ChatList />
                <ChatContent className={!currentChatId ? 'no-chat' : ''}>
                    {!currentChatId ? (
                        <PageMessage
                            icon={IconMessageOff}
                            title="No chat choosen"
                            description="Select any chat"
                        />
                    ) : (
                        <Outlet />
                    )}
                </ChatContent>
            </ChatPageStyled>
        </PageWrapper>
    );
};
