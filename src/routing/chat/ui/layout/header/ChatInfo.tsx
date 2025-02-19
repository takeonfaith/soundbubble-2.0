import {
    IconCircleCheck,
    IconDots,
    IconLogout,
    IconPencil,
    IconTrash,
    IconUserCircle,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { useChatInfo } from '../../../../../entities/chat/hooks/useChatInfo';
import { chatModel } from '../../../../../entities/chat/model';
import { TCache } from '../../../../../entities/chat/model/types';
import { userModel } from '../../../../../entities/user/model';
import { TUser } from '../../../../../entities/user/model/types';
import { UserItem } from '../../../../../entities/user/ui';
import { confirmModel } from '../../../../../layout/confirm/model';
import { modalModel } from '../../../../../layout/modal/model';
import { popupModel } from '../../../../../layout/popup/model';
import { Button } from '../../../../../shared/components/button';
import { DefaultButton } from '../../../../../shared/components/button/DefaultButton';
import { DefaultContextMenuStyled } from '../../../../../shared/components/defaultContextMenu';
import { Flex } from '../../../../../shared/components/flex';
import { LoadingWrapper } from '../../../../../shared/components/loadingWrapper';
import { Subtext } from '../../../../../shared/components/subtext';
import { PlaylistName } from '../../../../playlist/ui/layout/PlaylistName';
import { AddUserButton } from './AddUserButton';
import { ChatPhoto } from './ChatPhoto';
import { ChatStatus } from './ChatStatus';
import { toastModel } from '../../../../../layout/toast/model';
import { translate } from '../../../../../i18n';

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

    &.shift {
        transform: translateY(-70px);
    }
`;

const NameAndStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    transition: 0.2s;

    &.shift {
        position: absolute;
        left: 35px;
        top: 400px;
        font-size: 1.4rem;
        align-items: flex-start;

        & > * {
            color: #fff;
        }
    }
`;

const ChatButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    transition: 0.2s;

    &.shift {
        transform: translate(-132px, -110px);

        button {
            background: ${({ theme }) => theme.colors.darkHover};
            color: #fff;
        }
    }
`;

type Props = {
    cache: TCache;
};

export const ChatInfo = ({ cache }: Props) => {
    const [currentUser] = userModel.useUser();
    const [chat] = chatModel.useCurrentChat();
    const {
        chatImage,
        chatTitle,
        isGroupChat,
        statuses,
        typing,
        membersOnline,
        notYou,
    } = useChatInfo(chat, cache, currentUser);
    const isAdmin = currentUser
        ? chat?.admins?.includes(currentUser.uid)
        : false;
    const [isEditingMode, isLoadingEditing] = chatModel.useEditing();
    const navigate = useNavigate();
    const users = chat?.participants.map(
        (participant) => cache[participant] as TUser
    );
    const [isFullSize, setIsFullSize] = useState(false);

    const handleOpenContextMenu = (e: Evt<'btn'>) => {
        e.stopPropagation();

        popupModel.events.open({
            e,
            height: isAdmin ? 96 : 56,
            content: (
                <DefaultContextMenuStyled>
                    <Button
                        onClick={() => {
                            if (chat && currentUser) {
                                confirmModel.events.open({
                                    text: 'Are you sure you want to leave chat?',
                                    onAccept: () => {
                                        chatModel.events.editChat({
                                            chat,
                                            update: {
                                                participants:
                                                    chat.participants.filter(
                                                        (p) =>
                                                            p !==
                                                            currentUser.uid
                                                    ),
                                            },
                                            onSuccess: () => {
                                                toastModel.events.add({
                                                    type: 'success',
                                                    message:
                                                        'You left the chat',
                                                    duration: 10000,
                                                });
                                            },
                                        });
                                    },
                                });
                            }
                        }}
                    >
                        <IconLogout />
                        Leave chat
                    </Button>
                    {isAdmin && (
                        <Button className="danger" onClick={() => null}>
                            <IconTrash />
                            Delete chat
                        </Button>
                    )}
                </DefaultContextMenuStyled>
            ),
        });
    };

    const handleDeleteUserFromChat = (user: TUser) => {
        if (chat) {
            confirmModel.events.open({
                text: `Are you sure you want to remove ${user.displayName} from chat?`,
                onAccept: () => {
                    chatModel.events.editChat({
                        chat,
                        update: {
                            participants: chat.participants.filter(
                                (p) => p !== user.uid
                            ),
                        },
                        onSuccess: () => {
                            chatModel.events.toggleIsEditing();
                        },
                    });
                },
            });
        }
    };

    useEffect(() => {
        return () => {
            if (isEditingMode) {
                chatModel.events.toggleIsEditing();
            }
        };
    }, [isEditingMode]);

    if (!chat) return null;

    return (
        <ChatInfoStyled>
            {isLoadingEditing && <LoadingWrapper />}

            <Flex d="column" gap={16}>
                <ChatPhoto
                    chat={chat}
                    chatTitle={chatTitle}
                    chatImage={chatImage}
                    isEditingMode={isEditingMode}
                    isFullSize={isFullSize}
                    setIsFullSize={setIsFullSize}
                />
                <NameAndStatus className={isFullSize ? 'shift' : ''}>
                    <PlaylistName
                        name={chatTitle}
                        isOwner={true}
                        onUpdate={(newName) => {
                            chatModel.events.editChat({
                                chat,
                                update: {
                                    chatName: newName,
                                },
                            });
                        }}
                        isEditing={isEditingMode}
                        inputStyle={{
                            fontSize: '1.17rem',
                            fontWeight: '400',
                            padding: '0 16px',
                            height: '44px',
                        }}
                    >
                        {(newName) => <h3>{newName}</h3>}
                    </PlaylistName>
                    {!isEditingMode && (
                        <ChatStatus
                            isGroupChat={isGroupChat}
                            typing={typing}
                            membersOnline={membersOnline}
                            participants={chat.participants}
                            statuses={statuses}
                        />
                    )}
                </NameAndStatus>
                {!isEditingMode && (
                    <ChatButtons className={isFullSize ? 'shift' : ''}>
                        {/* <Button
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
                        </Button> */}
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
                                    onClick={() => {
                                        setIsFullSize(false);
                                        chatModel.events.toggleIsEditing();
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
                                onClick={() => {
                                    navigate(
                                        `/user/${
                                            (cache[notYou[0]] as TUser).uid
                                        }`
                                    );
                                    modalModel.events.close();
                                }}
                            >
                                <IconUserCircle size={20} />
                                Profile
                            </Button>
                        )}
                    </ChatButtons>
                )}
                {isEditingMode && (
                    <DefaultButton
                        onClick={() => chatModel.events.toggleIsEditing()}
                        appearance="primary"
                    >
                        <IconCircleCheck />
                        {translate('done_editing')}
                    </DefaultButton>
                )}
            </Flex>
            {isGroupChat && (
                <UserList className={isFullSize ? 'shift' : ''}>
                    <AddUserButton chat={chat} cache={cache} />
                    {users?.map((user) => {
                        const isOwner =
                            chat.admins?.includes(user?.uid ?? '') ?? false;
                        return (
                            <UserItem
                                orientation="horizontal"
                                user={user}
                                key={user?.uid}
                                showLastSeen
                                onClick={() => modalModel.events.close()}
                                onDelete={
                                    isAdmin && isEditingMode && !isOwner
                                        ? handleDeleteUserFromChat
                                        : undefined
                                }
                            >
                                {isOwner && <Subtext>Owner</Subtext>}
                            </UserItem>
                        );
                    })}
                </UserList>
            )}
        </ChatInfoStyled>
    );
};
