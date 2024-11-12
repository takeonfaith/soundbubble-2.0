import {
    IconDots,
    IconLogout,
    IconMessage2,
    IconPencil,
    IconSearch,
    IconTrash,
    IconUser,
    IconUserCircle,
} from '@tabler/icons-react';
import { useState } from 'react';
import styled from 'styled-components';
import { useChatInfo } from '../../../../../entities/chat/hooks/useChatInfo';
import { TCache, TChat } from '../../../../../entities/chat/model/types';
import { createQueueObject } from '../../../../../entities/song/lib/createQueueObject';
import { VerticalSongsList } from '../../../../../entities/song/ui/verticalList';
import { userModel } from '../../../../../entities/user/model';
import { TUser } from '../../../../../entities/user/model/types';
import { UserItem } from '../../../../../entities/user/ui';
import { UserCover } from '../../../../../entities/user/ui/UserCover';
import { Button } from '../../../../../shared/components/button';
import { Flex } from '../../../../../shared/components/flex';
import { Subtext } from '../../../../../shared/components/subtext';
import { Tabs } from '../../../../../shared/components/tabs';
import { AddUserButton } from './AddUserButton';
import { ChatStatus } from './ChatStatus';
import { popupModel } from '../../../../../layout/popup/model';
import { DefaultContextMenuStyled } from '../../../../../shared/components/defaultContextMenu';

const ChatInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    h3 {
        font-weight: 400;
    }
`;

const UserList = styled.div`
    background: ${({ theme }) => theme.colors.input};
    border-radius: 10px;
    width: calc(100% - 40px);
    margin: 0 20px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

type Props = {
    chat: TChat;
    cache: TCache;
};

const TABS = [
    { title: 'Songs', url: '' },
    { title: 'Albums', url: '' },
    { title: 'Authors', url: '' },
];

export const ChatInfo = ({ chat, cache }: Props) => {
    const [currentUser] = userModel.useUser();
    const {
        chatImage,
        chatTitle,
        isGroupChat,
        statuses,
        typing,
        membersOnline,
    } = useChatInfo(chat, cache, currentUser);
    const isOwner = chat.admins?.includes(currentUser?.uid ?? '') ?? false;
    const users = chat.participants.map(
        (participant) => cache[participant] as TUser
    );
    const queue = createQueueObject({ songs: [] });
    const [currentTab, setCurrentTab] = useState(0);

    const handleOpenContextMenu = (e: Evt<'btn'>) => {
        e.stopPropagation();

        popupModel.events.open({
            e,
            height: 96,
            content: (
                <DefaultContextMenuStyled>
                    <Button onClick={() => null}>
                        <IconLogout />
                        Leave chat
                    </Button>
                    <Button onClick={() => null}>
                        <IconTrash />
                        Delete chat
                    </Button>
                </DefaultContextMenuStyled>
            ),
        });
    };
    const currentAttachments = [<VerticalSongsList queue={queue} />];

    return (
        <ChatInfoStyled>
            <Flex d="column" gap={16}>
                <UserCover
                    src={chatImage}
                    colors={[]}
                    size={'160px'}
                    fallbackIcon={<IconMessage2 />}
                    isAuthor={false}
                />
                <Flex d="column" gap={4}>
                    <h3>{chatTitle}</h3>
                    <ChatStatus
                        isGroupChat={isGroupChat}
                        typing={typing}
                        membersOnline={membersOnline}
                        participants={chat.participants}
                        statuses={statuses}
                    />
                </Flex>
                <Flex gap={10}>
                    <Button
                        $width="80px"
                        $height="60px"
                        className="outline"
                        style={{
                            flexDirection: 'column',
                            gap: '6px',
                            fontWeight: '300',
                            fontSize: '0.8rem',
                        }}
                    >
                        <IconSearch size={20} />
                        Search
                    </Button>
                    {isGroupChat && (
                        <>
                            <Button
                                $width="80px"
                                $height="60px"
                                className="outline"
                                style={{
                                    flexDirection: 'column',
                                    gap: '6px',
                                    fontWeight: '300',
                                    fontSize: '0.8rem',
                                }}
                            >
                                <IconPencil size={20} />
                                Edit
                            </Button>
                            <Button
                                $width="80px"
                                $height="60px"
                                className="outline"
                                style={{
                                    flexDirection: 'column',
                                    gap: '6px',
                                    fontWeight: '300',
                                    fontSize: '0.8rem',
                                }}
                                onClick={handleOpenContextMenu}
                            >
                                <IconDots size={20} />
                                More
                            </Button>
                        </>
                    )}
                    {!isGroupChat && (
                        <Button
                            className="outline"
                            $width="80px"
                            $height="60px"
                            style={{
                                flexDirection: 'column',
                                gap: '6px',
                                fontWeight: '300',
                                fontSize: '0.8rem',
                            }}
                        >
                            <IconUserCircle size={20} />
                            Profile
                        </Button>
                    )}
                </Flex>
            </Flex>
            {isGroupChat && (
                <UserList>
                    <AddUserButton chat={chat} cache={cache} />
                    {users.map((user) => {
                        const isOwner =
                            chat.admins?.includes(user?.uid ?? '') ?? false;
                        return (
                            <UserItem
                                orientation="horizontal"
                                user={user}
                                key={user?.uid}
                                showLastSeen
                            >
                                {isOwner && <Subtext>Owner</Subtext>}
                            </UserItem>
                        );
                    })}
                </UserList>
            )}
            <Tabs
                tabs={TABS}
                currentTab={currentTab}
                onTabClick={(tab) =>
                    setCurrentTab(TABS.findIndex((t) => t.title === tab.title))
                }
            />
            {currentAttachments[currentTab]}
        </ChatInfoStyled>
    );
};
