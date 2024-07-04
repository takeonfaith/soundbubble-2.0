import {
    IconEditCircle,
    IconLogout,
    IconSettings,
    IconShare3,
    IconSun,
} from '@tabler/icons-react';
import { useLocation, useNavigate } from 'react-router';
import { userModel } from '../../entities/user/model';
import { UserCover } from '../../entities/user/ui/UserCover';
import { ShareModal } from '../../features/shareModal';
import { allRoutes } from '../../routing/routes';
import { Button } from '../../shared/components/button';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';
import { Divider } from '../../shared/components/divider';
import { Flex } from '../../shared/components/flex';
import { usePrivateAction } from '../../shared/hooks/usePrivateAction';
import { modalModel } from '../modal/model';
import { popupModel } from '../popup/model';
import {
    DesktopChildren,
    HeaderPageTitle,
    HeaderStyled,
    MobileChildren,
} from './styles';
import React from 'react';
import { toggleTheme } from '../../app/theme';

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

type Props = {
    children?: React.ReactNode;
    hide?: boolean;
};

export const Header = ({ children, hide }: Props) => {
    const [{ data }, loading] = userModel.useUser();
    const location = useLocation();
    const { openLoginModal } = usePrivateAction();
    const currentRoute = allRoutes.find((route) => {
        return route.url.includes(location.pathname.split('/')[1]);
    });

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
            <Flex width="100%" height="50px" jc="space-between" gap={30}>
                <HeaderPageTitle>{currentRoute?.title}</HeaderPageTitle>
                <DesktopChildren>{children}</DesktopChildren>
                <Flex width="150px" gap={20} jc="flex-end">
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
                    {!data && (
                        <DefaultButton
                            loading={loading}
                            width="100px"
                            onClick={openLoginModal()}
                            appearance="secondary"
                        >
                            Login
                        </DefaultButton>
                    )}
                </Flex>
            </Flex>
            <MobileChildren>{children}</MobileChildren>
        </HeaderStyled>
    );
};
