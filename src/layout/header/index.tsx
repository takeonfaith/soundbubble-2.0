import {
    IconCirclePlus,
    IconEditCircle,
    IconLogout,
    IconSettings,
    IconShare3,
    IconSun,
} from '@tabler/icons-react';
import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';
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
import { NEW_LAYOUT } from '../../shared/constants';

const UserContextMenu = () => {
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

function getCurrentRoute(routes: TRoute[], currentUrl: string): TRoute | null {
    const findRoute = (
        routeArray: TRoute[],
        urlParts: string[]
    ): TRoute | null => {
        for (const route of routeArray) {
            const routeUrlParts = route.url.split('/').filter((part) => part);
            if (
                routeUrlParts.every((part, index) => part === urlParts[index])
            ) {
                if (routeUrlParts.length === urlParts.length) {
                    return route;
                }
                if (route.children) {
                    const remainingUrlParts = urlParts.slice(
                        routeUrlParts.length
                    );
                    const childRoute = findRoute(
                        route.children,
                        remainingUrlParts
                    );
                    if (childRoute) {
                        return childRoute;
                    }
                }
            }
        }
        return null;
    };

    const urlParts = currentUrl.split('/').filter((part) => part);
    return findRoute(routes, urlParts);
}

type Props = {
    children?: React.ReactNode;
    hide?: boolean;
    className?: string;
};

export const Header = ({ children, hide, className }: Props) => {
    const [currentUser] = userModel.useUser();
    const location = useLocation();
    const currentRoute = useMemo(
        () => getCurrentRoute(allRoutes, location.pathname),
        [location.pathname]
    );

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
                <HeaderPageTitle>
                    {currentRoute?.showTitle !== false
                        ? currentRoute?.title
                        : ''}
                </HeaderPageTitle>
                <DesktopChildren>{children}</DesktopChildren>
                <Flex width="300px" gap={20} jc="flex-end">
                    {!NEW_LAYOUT && (
                        <>
                            {currentUser && (
                                <Button
                                    $width="40px"
                                    onClick={handleOpenUserPopup}
                                >
                                    {currentUser.isAdmin && <AdminCircle />}
                                    <UserCover
                                        colors={currentUser?.imageColors}
                                        src={currentUser?.photoURL}
                                        size={'30px'}
                                        isAuthor={currentUser?.isAuthor}
                                    />
                                </Button>
                            )}
                            <LoginButton />
                        </>
                    )}
                </Flex>
            </Flex>
            <MobileChildren>{children}</MobileChildren>
        </HeaderStyled>
    );
};
