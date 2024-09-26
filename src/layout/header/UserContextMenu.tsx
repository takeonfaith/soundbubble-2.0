import {
    IconLogout,
    IconShare3,
    IconCirclePlus,
    IconEditCircle,
    IconSettings,
    IconSun,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { toggleTheme } from '../../app/theme';
import { Settings } from '../../entities/settings/ui';
import { userModel } from '../../entities/user/model';
import { UserCover } from '../../entities/user/ui/UserCover';
import { AddSongModal } from '../../features/addSongModal';
import { ShareModal } from '../../features/shareModal';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';
import { Divider } from '../../shared/components/divider';
import { confirmModel } from '../confirm/model';
import { modalModel } from '../modal/model';
import { popupModel } from '../popup/model';

export const UserContextMenu = () => {
    const [currentUser] = userModel.useUser();
    const navigate = useNavigate();

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

    const handleShare = () => {
        modalModel.events.open({
            title: `Share profile with friends`,
            content: <ShareModal entity={currentUser} />,
        });
        popupModel.events.close();
    };

    const handleSettingsModal = () => {
        modalModel.events.open({
            title: 'Settings',
            content: <Settings />,
        });
        popupModel.events.close();
    };

    const handleUploadSong = () => {
        modalModel.events.open({
            title: 'Upload song',
            content: <AddSongModal />,
        });
        popupModel.events.close();
    };

    return (
        <DefaultContextMenuStyled>
            <Button
                onClick={() => {
                    navigate('/me');
                    popupModel.events.close();
                }}
            >
                <UserCover
                    colors={currentUser?.imageColors ?? ['grey']}
                    src={currentUser?.photoURL}
                    size={'20px'}
                    isAuthor={currentUser?.isAuthor}
                />
                Go to profile
            </Button>
            <Button onClick={handleShare}>
                <IconShare3 />
                Share profile
            </Button>
            <Divider />
            <Button onClick={handleUploadSong}>
                <IconCirclePlus />
                Upload song
            </Button>
            <Divider />
            <Button>
                <IconEditCircle />
                Edit
            </Button>
            <Button onClick={handleSettingsModal}>
                <IconSettings />
                Settings
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
