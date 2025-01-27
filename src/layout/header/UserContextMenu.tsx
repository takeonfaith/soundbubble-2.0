import {
    IconBook,
    IconChevronRight,
    IconCirclePlus,
    IconLogout,
    IconPencil,
    IconSettings,
    IconSun,
    IconTrash,
    IconUserMinus,
} from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import styled from 'styled-components';
import { toggleTheme } from '../../app/theme';
import { Settings } from '../../entities/settings/ui';
import { LoadingOverlay } from '../../entities/song/ui/styles';
import { getLastSeen } from '../../entities/user/lib/getLastSeen';
import { userModel } from '../../entities/user/model';
import { editUserFx } from '../../entities/user/model/edit-user';
import { UserCover } from '../../entities/user/ui/UserCover';
import { UserStatus } from '../../entities/user/ui/UserStatus';
import { UploadSongModal } from '../../features/uploadSongModal';
import { EditPhotoModal } from '../../features/editPhotoModal';
import { PlaylistName } from '../../routing/playlist/ui/layout/PlaylistName';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';
import { Divider } from '../../shared/components/divider';
import { Flex } from '../../shared/components/flex';
import { Subtext } from '../../shared/components/subtext';
import { confirmModel } from '../confirm/model';
import { modalModel } from '../modal/model';
import { popupModel } from '../popup/model';
import { LoadingWrapper } from '../../shared/components/loadingWrapper';
import { deleteAccountFx } from '../../entities/user/model/delete-account';
import { getShortString } from '../../shared/funcs/getShortString';
import { FirstScreen } from '../../features/onboarding/ui/FirstScreen';
import { SecondScreen } from '../../features/onboarding/ui/SecondScreen';

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
    }
`;

const EditOverlayStyled = styled(LoadingOverlay)`
    opacity: 0;
    border-radius: 100%;
    cursor: pointer;
    transition: 0.2s opacity;

    &:hover {
        opacity: 1;
    }
`;

const UserProfileModal = () => {
    const [currentUser] = userModel.useUser();
    const [isLoadingEditing, isDeletingAccount] = useUnit([
        editUserFx.pending,
        deleteAccountFx.pending,
    ]);

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

    const handleEditPhoto = () => {
        modalModel.events.open({
            title: 'Change profile photo',
            content: (
                <EditPhotoModal
                    onSave={(newPhoto, imageColors, setLoading) => {
                        console.log(newPhoto);

                        userModel.events.editUser({
                            update: {
                                photoFile: newPhoto,
                                imageColors: imageColors,
                            },
                            onSuccess: () => {
                                modalModel.events.close();
                                setLoading(false);
                            },
                        });
                        // Update user's photo URL
                    }}
                    imageColors={currentUser?.imageColors ?? []}
                    photo={currentUser?.photoURL ?? null}
                />
            ),
        });
    };

    const handleDeleteAccount = () => {
        confirmModel.events.open({
            text: 'Are you sure you want to delete your account?',
            onAccept: () => {
                userModel.events.deleteAccount();
            },
            subtext: 'THIS ACTION CANNOT BE UNDONE!',
            icon: <IconUserMinus />,
            iconColor: 'red',
        });
    };

    const handleOpenTutorial = () => {
        modalModel.events.open({
            title: '',
            content: <SecondScreen />,
        });
    };

    return (
        <UserProfileModalStyled>
            {isLoadingEditing || (isDeletingAccount && <LoadingWrapper />)}

            <Flex d="column" gap={20}>
                <UserCover
                    src={currentUser?.photoURL}
                    size={'160px'}
                    colors={currentUser?.imageColors}
                    isAuthor={false}
                >
                    <EditOverlayStyled onClick={handleEditPhoto}>
                        <IconPencil size={50} color="#fff" />
                    </EditOverlayStyled>
                </UserCover>
                <Flex d="column" gap={4}>
                    <PlaylistName
                        name={currentUser?.displayName}
                        isOwner={true}
                        onUpdate={(newName) => {
                            userModel.events.editUser({
                                update: {
                                    displayName: newName,
                                },
                            });
                        }}
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
                    {currentUser?.regDate && (
                        <Subtext>
                            Registred:{' '}
                            {new Date(
                                currentUser?.regDate.toDate()
                            ).toLocaleDateString('en-US')}
                        </Subtext>
                    )}
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
                    onClick={handleOpenTutorial}
                    $width="100%"
                    style={{ padding: '0 10px' }}
                >
                    <Flex width="100%" gap={16}>
                        <IconBook size={20} />
                        Tutorial
                    </Flex>
                </Button>
                <Divider />
                <Button
                    onClick={handleLogout}
                    $width="100%"
                    style={{ padding: '0 10px' }}
                >
                    <IconLogout size={20} />
                    Log out
                </Button>
                <Button
                    className="danger"
                    $width="100%"
                    style={{ padding: '0 10px' }}
                    onClick={handleDeleteAccount}
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
            content: <UploadSongModal />,
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
                {getShortString(currentUser?.displayName, 15)}
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
