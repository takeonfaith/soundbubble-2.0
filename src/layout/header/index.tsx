import {
    IconCirclePlus,
    IconEditCircle,
    IconLogout,
    IconSettings,
    IconShare3,
    IconSun,
} from '@tabler/icons-react';
import React from 'react';
import { Location, useLocation, useNavigate } from 'react-router';
import { toggleTheme } from '../../app/theme';
import { Settings } from '../../entities/settings/ui';
import { userModel } from '../../entities/user/model';
import { UserCover } from '../../entities/user/ui/UserCover';
import { AddSongModal } from '../../features/addSongModal';
import { LoginButton } from '../../features/loginButton';
import { ShareModal } from '../../features/shareModal';
import { allRoutes, TRoute } from '../../routing/routes';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';
import { Divider } from '../../shared/components/divider';
import { Flex } from '../../shared/components/flex';
import { confirmModel } from '../confirm/model';
import { modalModel } from '../modal/model';
import { popupModel } from '../popup/model';
import {
    AdminCircle,
    DesktopChildren,
    HeaderPageTitle,
    HeaderStyled,
    MobileChildren,
} from './styles';

const UserContextMenu = () => {
    const [{ data }] = userModel.useUser();
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
            content: <ShareModal entity={data} />,
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
                    colors={data?.imageColors ?? ['grey']}
                    src={data?.photoURL}
                    size={'20px'}
                    isAuthor={data?.isAuthor}
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

const getCurrentRoute = (
    allRoutes: TRoute[],
    location: Location<unknown>
): TRoute | null => {
    const { pathname } = location;
    const splitted = pathname.split('/');
    for (let i = 0; i < allRoutes.length; i++) {
        const route = allRoutes[i];

        if (route.children) {
            const res = getCurrentRoute(route.children, location);
            if (res) return res;
        } else if (splitted[1] === route.url) return route;
    }

    return null;
};

type Props = {
    children?: React.ReactNode;
    hide?: boolean;
    className?: string;
};

export const Header = ({ children, hide, className }: Props) => {
    const [{ data }] = userModel.useUser();
    const location = useLocation();
    const currentRoute = getCurrentRoute(allRoutes, location);

    const handleOpenUserPopup = (e: Evt<'btn'>) => {
        e.stopPropagation();
        popupModel.events.open({
            content: <UserContextMenu />,
            e,
            height: 345,
        });
    };

    return (
        <HeaderStyled className={`${className} ${hide ? 'hidden' : ''}`}>
            <Flex
                width="100%"
                height="50px"
                jc="space-between"
                gap={30}
                style={{ zIndex: '10' }}
            >
                <HeaderPageTitle>{currentRoute?.title}</HeaderPageTitle>
                <DesktopChildren>{children}</DesktopChildren>
                <Flex width="300px" gap={20} jc="flex-end">
                    {data && (
                        <Button $width="40px" onClick={handleOpenUserPopup}>
                            {data.isAdmin && <AdminCircle />}
                            <UserCover
                                colors={data?.imageColors}
                                src={data?.photoURL}
                                size={'30px'}
                                isAuthor={data?.isAuthor}
                            />
                        </Button>
                    )}
                    <LoginButton />
                </Flex>
            </Flex>
            <MobileChildren>{children}</MobileChildren>
        </HeaderStyled>
    );
};
