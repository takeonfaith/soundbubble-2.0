import { IconCirclePlus, IconSettings, IconSun } from '@tabler/icons-react';
import { toggleTheme } from '../../app/theme';
import { userModel } from '../../entities/user/model';
import { UserCover } from '../../entities/user/ui/UserCover';
import { LogoutButton } from '../../features/logoutButton';
import { BadgeStyled } from '../../features/shareModal/styles';
import { UploadSongModal } from '../../features/uploadSongModal';
import { translate } from '../../i18n';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';
import { Divider } from '../../shared/components/divider';
import { Flex } from '../../shared/components/flex';
import { getShortString } from '../../shared/funcs/getShortString';
import { modalModel } from '../modal/model';
import { UserProfileModal } from './UserProfileModal';
import { Settings } from '../../entities/settings/ui';

export const UserContextMenu = () => {
    const [currentUser] = userModel.useUser();

    const handleUploadSong = () => {
        modalModel.events.open({
            title: translate('upload_song'),
            content: <UploadSongModal />,
        });
    };

    const handleProfileClick = () => {
        modalModel.events.open({
            title: translate('profile'),
            content: <UserProfileModal />,
            sizeY: 'm',
        });
    };

    const handleSettingsClick = () => {
        modalModel.events.open({
            title: translate('settings'),
            content: <Settings />,
            sizeX: 'm',
            sizeY: 'm',
        });
    };

    return (
        <DefaultContextMenuStyled>
            <Button onClick={handleProfileClick}>
                <Flex width="100%" jc="space-between">
                    <Flex gap={14}>
                        <UserCover
                            colors={currentUser?.imageColors ?? ['grey']}
                            src={currentUser?.photoURL}
                            size={'20px'}
                            isAuthor={currentUser?.isAuthor}
                        />
                        {getShortString(currentUser?.displayName, 15)}
                    </Flex>
                    {currentUser?.isAdmin && <BadgeStyled>Admin</BadgeStyled>}
                </Flex>
            </Button>
            <Button onClick={handleSettingsClick}>
                <IconSettings />
                {translate('settings')}
            </Button>
            <Button onClick={() => toggleTheme()}>
                <IconSun />
                {translate('change_theme')}
            </Button>
            <Divider />
            <Button onClick={handleUploadSong}>
                <IconCirclePlus />
                {translate('upload_song')}
            </Button>

            <Divider />
            <LogoutButton />
        </DefaultContextMenuStyled>
    );
};
