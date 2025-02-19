import { IconPencilPlus, IconSearch } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { getSendStatus } from '../../entities/chat/lib/getSendStatus';
import { chatModel } from '../../entities/chat/model';
import { TChat } from '../../entities/chat/model/types';
import { ChatItem } from '../../entities/chat/ui/ChatItem';
import { userModel } from '../../entities/user/model';
import { TUser } from '../../entities/user/model/types';
import { CreateChatModal } from '../../features/createChatModal';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { normalizeString } from '../../shared/funcs/normalizeString';
import { ChatsSkeleton } from './ChatsSkeleton';
import {
    ChatListStyled,
    ChatSearchStyled,
    DesktopWrapperStyled,
    ListOfChats,
} from './styles';
import { translate } from '../../i18n';

export const ChatList = () => {
    const [chats, loadingChats] = chatModel.useChats();
    const [chatUnreadCount, maxSeenAtInCurrentChat] = chatModel.useUnread();
    const [currentChat] = chatModel.useCurrentChat();
    const [currentUser] = userModel.useUser();
    const [cache] = chatModel.useCache();
    const [searchValue, setSearchValue] = useState('');
    const [visibleChats, setVisibleChats] = useState<TChat[]>([]);

    const handleCreateChatModal = () => {
        modalModel.events.open({
            title: translate('create_chat_with_friends'),
            content: <CreateChatModal />,
            sizeY: 'l',
        });
    };

    useEffect(() => {
        if (searchValue.length === 0) {
            setVisibleChats(chats);
        }
    }, [chats, searchValue.length]);

    const handleChange = (e: Evt<'input'>) => {
        if (e.currentTarget) {
            setSearchValue(e.currentTarget.value);

            if (e.currentTarget.value.length === 0) {
                return setVisibleChats(chats);
            }

            const filteredChats = chats.filter((ch) => {
                const isGroupChat = ch.chatName.length !== 0;
                const chatName = isGroupChat
                    ? ch.chatName
                    : (
                          cache[
                              ch.participants.filter(
                                  (p) => p !== currentUser?.uid
                              )[0]
                          ] as TUser
                      ).displayName;

                return normalizeString(chatName).includes(
                    normalizeString(e.currentTarget.value)
                );
            });

            setVisibleChats(filteredChats);
        }
    };

    return (
        <ListOfChats className={!currentChat ? 'no-chat' : ''}>
            <DesktopWrapperStyled>
                <Flex
                    width="100%"
                    jc="space-between"
                    padding="0 20px 10px 20px"
                >
                    <h2>{translate('chats')}</h2>
                    <Button
                        className="primary"
                        $width="35px"
                        $height="35px"
                        onClick={handleCreateChatModal}
                        style={{ borderRadius: '100%' }}
                    >
                        <IconPencilPlus size={18} color="#fff" />
                    </Button>
                </Flex>
                <ChatSearchStyled>
                    <Input
                        icon={<IconSearch />}
                        placeholder={translate('search_for_chats')}
                        style={{ borderRadius: '20px' }}
                        onChange={handleChange}
                        value={searchValue}
                    />
                </ChatSearchStyled>
            </DesktopWrapperStyled>
            <ChatListStyled>
                <SkeletonPageAnimation
                    loading={loadingChats}
                    skeleton={<ChatsSkeleton />}
                >
                    {visibleChats.map((chat) => {
                        const unreadCount = chatUnreadCount[chat.id];
                        const isMine =
                            chat.lastMessage?.sender === currentUser?.uid;

                        const sendStatus = getSendStatus(
                            chat.lastMessage,
                            isMine,
                            maxSeenAtInCurrentChat,
                            unreadCount?.lastReadAt
                        );

                        return (
                            <ChatItem
                                isSelected={currentChat?.id === chat.id}
                                unreadCount={unreadCount?.unreadCount ?? 0}
                                sendStatus={sendStatus}
                                cache={cache}
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
