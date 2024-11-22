import {
    IconChevronRight,
    IconCirclePlus,
    IconLogout,
    IconSettings,
    IconSun,
    IconTrash,
} from '@tabler/icons-react';
import styled from 'styled-components';
import { toggleTheme } from '../../app/theme';
import { userModel } from '../../entities/user/model';
import { UserCover } from '../../entities/user/ui/UserCover';
import { AddSongModal } from '../../features/addSongModal';
import { PlaylistName } from '../../routing/playlist/ui/layout/PlaylistName';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';
import { Divider } from '../../shared/components/divider';
import { Flex } from '../../shared/components/flex';
import { confirmModel } from '../confirm/model';
import { modalModel } from '../modal/model';
import { popupModel } from '../popup/model';
import { UserStatus } from '../../entities/user/ui/UserStatus';
import { getLastSeen } from '../../entities/user/lib/getLastSeen';
import { Settings } from '../../entities/settings/ui';

const UserProfileModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    padding: 0 20px;
    padding-bottom: 20px;

    button {
        gap: 16px;
        font-weight: 300;
        justify-content: flex-start;

        svg {
            color: ${({ theme }) => theme.colors.greyText};
        }

        &.danger {
            color: ${({ theme }) => theme.scheme.red.main};

            svg {
                color: ${({ theme }) => theme.scheme.red.main};
            }
        }
    }
`;

const UserProfileModal = () => {
    const [currentUser] = userModel.useUser();

    const handleLogout = () => {
        confirmModel.events.open({
            text: 'Are you sure you want to log out?',
            onAccept: () => {
                userModel.events.logout();
                modalModel.events.close();
            },
            subtext: 'All your data is saved',
            icon: <IconLogout />,
            iconColor: 'red',
        });
    };

    const handleOpenSettings = () => {
        modalModel.events.open({
            title: 'Settings',
            content: <Settings />,
        });
    };

    return (
        <UserProfileModalStyled>
            <Flex d="column" gap={20}>
                <UserCover
                    src={currentUser?.photoURL}
                    size={'160px'}
                    colors={currentUser?.imageColors}
                    isAuthor={false}
                />
                <Flex d="column" gap={8}>
                    <PlaylistName
                        name={currentUser?.displayName}
                        isOwner={true}
                        onUpdate={(newName) => {}}
                        isEditing={false}
                        inputStyle={{
                            fontSize: '1.45rem',
                            fontWeight: '500',
                            padding: '0 16px',
                            height: '44px',
                        }}
                    >
                        {(newName) => <h2>{newName}</h2>}
                    </PlaylistName>
                    <UserStatus
                        isAuthor={false}
                        showLastSeen={true}
                        status={getLastSeen(currentUser?.online).status}
                    />
                </Flex>
            </Flex>
            <Flex d="column" width="100%" ai="flex-start" gap={4}>
                <Button
                    onClick={handleOpenSettings}
                    $width="100%"
                    style={{ padding: '0 10px' }}
                >
                    <Flex width="100%" gap={16}>
                        <IconSettings size={20} />
                        Settings
                    </Flex>
                    <IconChevronRight size={18} />
                </Button>
                <Button
                    onClick={handleLogout}
                    $width="100%"
                    style={{ padding: '0 10px' }}
                >
                    <IconLogout size={20} />
                    Log out
                </Button>
                <Divider />
                <Button
                    className="danger"
                    $width="100%"
                    style={{ padding: '0 10px' }}
                >
                    <IconTrash size={20} />
                    Delete account
                </Button>
            </Flex>
        </UserProfileModalStyled>
    );
};

export const UserContextMenu = () => {
    const [currentUser] = userModel.useUser();

    const handleLogout = () => {
        confirmModel.events.open({
            text: 'Are you sure you want to log out?',
            onAccept: () => {
                userModel.events.logout();
            },
            subtext: 'All your data is saved',
            icon: <IconLogout />,
            iconColor: 'red',
        });
    };

    const handleUploadSong = () => {
        modalModel.events.open({
            title: 'Upload song',
            content: <AddSongModal />,
        });
        popupModel.events.close();
    };

    const handleProfileClick = () => {
        modalModel.events.open({
            title: 'Profile',
            content: <UserProfileModal />,
            // sizeY: 'm',
        });
        popupModel.events.close();
    };

    return (
        <DefaultContextMenuStyled>
            <Button onClick={handleProfileClick}>
                <UserCover
                    colors={currentUser?.imageColors ?? ['grey']}
                    src={currentUser?.photoURL}
                    size={'20px'}
                    isAuthor={currentUser?.isAuthor}
                />
                Profile
            </Button>
            <Divider />
            <Button onClick={handleUploadSong}>
                <IconCirclePlus />
                Upload song
            </Button>
            <Button onClick={() => toggleTheme()}>
                <IconSun />
                Change theme
            </Button>
            <Divider />
            <Button onClick={handleLogout}>
                <IconLogout />
                Logout
            </Button>
        </DefaultContextMenuStyled>
    );
};
