import { IconCirclePlus, IconLogout, IconSun } from '@tabler/icons-react';
import { toggleTheme } from '../../app/theme';
import { userModel } from '../../entities/user/model';
import { UserCover } from '../../entities/user/ui/UserCover';
import { UploadSongModal } from '../../features/uploadSongModal';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';
import { Divider } from '../../shared/components/divider';
import { getShortString } from '../../shared/funcs/getShortString';
import { confirmModel } from '../confirm/model';
import { modalModel } from '../modal/model';
import { popupModel } from '../popup/model';
import { UserProfileModal } from './UserProfileModal';
import { Flex } from '../../shared/components/flex';
import { BadgeStyled } from '../../features/shareModal/styles';

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
            sizeY: 'm',
        });
        popupModel.events.close();
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
