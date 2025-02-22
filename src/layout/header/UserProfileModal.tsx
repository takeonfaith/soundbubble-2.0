import {
    IconBook,
    IconChevronRight,
    IconCommand,
    IconLogout,
    IconPencil,
    IconSettings,
} from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { Settings } from '../../entities/settings/ui';
import { getLastSeen } from '../../entities/user/lib/getLastSeen';
import { userModel } from '../../entities/user/model';
import { deleteAccountFx } from '../../entities/user/model/delete-account';
import { editUserFx } from '../../entities/user/model/edit-user';
import { UserCover } from '../../entities/user/ui/UserCover';
import { UserStatus } from '../../entities/user/ui/UserStatus';
import { EditPhotoModal } from '../../features/editPhotoModal';
import { HotkeysList } from '../../features/hotkeysList';
import { SecondScreen } from '../../features/onboarding/ui/SecondScreen';
import { translate } from '../../i18n';
import { PlaylistName } from '../../routing/playlist/ui/layout/PlaylistName';
import { Button } from '../../shared/components/button';
import { Divider } from '../../shared/components/divider';
import { Flex } from '../../shared/components/flex';
import { LoadingWrapper } from '../../shared/components/loadingWrapper';
import { Subtext } from '../../shared/components/subtext';
import { dateToString } from '../../shared/funcs/dateToString';
import { confirmModel } from '../confirm/model';
import { modalModel } from '../modal/model';
import { EditOverlayStyled, UserProfileModalStyled } from './styles';

export const UserProfileModal = () => {
    const [currentUser] = userModel.useUser();
    const [isLoadingEditing, isDeletingAccount] = useUnit([
        editUserFx.pending,
        deleteAccountFx.pending,
    ]);

    const handleLogout = () => {
        confirmModel.events.open({
            text: translate('logout_warning_title'),
            onAccept: () => {
                userModel.events.logout();
                modalModel.events.close();
            },
            subtext: '',
            icon: <IconLogout />,
            iconColor: 'red',
        });
    };

    const handleOpenSettings = () => {
        modalModel.events.open({
            title: translate('settings'),
            content: <Settings />,
            sizeX: 'm',
            sizeY: 'm',
        });
    };

    const handleEditPhoto = () => {
        modalModel.events.open({
            title: 'Change profile photo',
            content: (
                <EditPhotoModal
                    onSave={(newPhoto, imageColors, setLoading) => {
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

    const handleOpenTutorial = () => {
        modalModel.events.open({
            title: '',
            content: <SecondScreen />,
        });
    };

    const handleOpenHotKeys = () => {
        modalModel.events.open({
            title: translate('hot_keys'),
            content: <HotkeysList />,
            sizeX: 'l',
            sizeY: 's',
        });
    };

    return (
        <UserProfileModalStyled>
            {isLoadingEditing || (isDeletingAccount && <LoadingWrapper />)}

            <Flex d="column" gap={20} height="100%" jc="center">
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
                            {translate('registered')}:{' '}
                            {dateToString(
                                new Date(currentUser?.regDate.toDate())
                            )}
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
                        {translate('settings')}
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
                        {translate('tutorial')}
                    </Flex>
                    <IconChevronRight size={18} />
                </Button>
                <Button
                    onClick={handleOpenHotKeys}
                    $width="100%"
                    style={{ padding: '0 10px' }}
                >
                    <Flex width="100%" gap={16}>
                        <IconCommand size={20} />
                        {translate('hot_keys')}
                    </Flex>
                    <IconChevronRight size={18} />
                </Button>
                <Divider />
                <Button
                    onClick={handleLogout}
                    $width="100%"
                    style={{ padding: '0 10px' }}
                >
                    <IconLogout size={18} />
                    {translate('logout')}
                </Button>
            </Flex>
        </UserProfileModalStyled>
    );
};
