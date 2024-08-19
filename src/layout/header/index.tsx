import {
    IconEditCircle,
    IconLogout,
    IconSettings,
    IconShare3,
    IconSun,
} from '@tabler/icons-react';
import React from 'react';
import { Location, useLocation, useNavigate } from 'react-router';
import { toggleTheme } from '../../app/theme';
import { userModel } from '../../entities/user/model';
import { UserCover } from '../../entities/user/ui/UserCover';
import { LoginButton } from '../../features/loginButton';
import { ShareModal } from '../../features/shareModal';
import { allRoutes, TRoute } from '../../routing/routes';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';
import { Divider } from '../../shared/components/divider';
import { Flex } from '../../shared/components/flex';
import { modalModel } from '../modal/model';
import { popupModel } from '../popup/model';
import {
    DesktopChildren,
    HeaderPageTitle,
    HeaderStyled,
    MobileChildren,
} from './styles';

const UserContextMenu = () => {
    const [{ data }] = userModel.useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        userModel.events.logout();
    };

    const handleShare = () => {
        modalModel.events.open({
            title: `Share profile with friends`,
            content: <ShareModal entity={data} />,
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
            <Button>
                <IconEditCircle />
                Edit
            </Button>
            <Button>
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
    console.log(location);
    const { pathname } = location;
    const splitted = pathname.split('/');
    for (let i = 0; i < allRoutes.length; i++) {
        const route = allRoutes[i];
        

        if (route.children) {
            const res = getCurrentRoute(route.children, location);
            if (res) return res;
        }
        else if (splitted[1] === route.url) return route;
    }

    return null;
};

type Props = {
    children?: React.ReactNode;
    hide?: boolean;
};

export const Header = ({ children, hide }: Props) => {
    const [{ data }] = userModel.useUser();
    const location = useLocation();
    const currentRoute = getCurrentRoute(allRoutes, location);

    const handleOpenUserPopup = (e: Evt<'btn'>) => {
        e.stopPropagation();
        popupModel.events.open({
            content: <UserContextMenu />,
            e,
            height: 289,
        });
    };

    return (
        <HeaderStyled className={hide ? 'hidden' : ''}>
            <Flex
                width="100%"
                height="50px"
                jc="space-between"
                gap={30}
            >
                <HeaderPageTitle>{currentRoute?.title}</HeaderPageTitle>
                <DesktopChildren>{children}</DesktopChildren>
                <Flex width="300px" gap={20} jc="flex-end">
                    {data && (
                        <Button $width="40px" onClick={handleOpenUserPopup}>
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
