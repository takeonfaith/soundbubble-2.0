import {
    IconMessageOff,
    IconMessagePlus,
    IconSearch,
} from '@tabler/icons-react';
import { useEffect } from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { chatModel } from '../../entities/chat/model';
import { userModel } from '../../entities/user/model';
import { CreateChatModal } from '../../features/createChatModal';
import { Header } from '../../layout/header';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { PageMessage } from '../../shared/components/pageMessage';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { ChatList } from './ChatList';
import { LoginButton } from '../../features/loginButton';

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
    const [currentChat] = chatModel.useCurrentChat();
    const [currentUser] = userModel.useUser();
    const [amITyping] = chatModel.useTyping();

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
            chatModel.events.canMoreBeLoaded(true);
            if (amITyping) {
                chatModel.events.updateIsTyping(false);
            }
        },
    });

    useEffect(() => {
        return () => {
            chatModel.events.setCurrentChatId(null);
            chatModel.events.canMoreBeLoaded(true);
        };
    }, []);

    if (!currentUser)
        return (
            <>
                <Header />
                <PageMessage
                    icon={IconMessageOff}
                    title={'Need to log in '}
                    description={'To share songs with your friends'}
                >
                    <LoginButton />
                </PageMessage>
            </>
        );

    return (
        <PageWrapper>
            {!currentChat && (
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
                <ChatContent className={!currentChat ? 'no-chat' : ''}>
                    {!currentChat ? (
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
