import React, { useMemo } from 'react';
import { useLocation } from 'react-router';
import { userModel } from '../../entities/user/model';
import { UserCover } from '../../entities/user/ui/UserCover';
import { LoginButton } from '../../features/loginButton';
import { allRoutes, TRoute } from '../../routing/routes';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import useCurrentDevice from '../../shared/hooks/useCurrentDevice';
import { popupModel } from '../popup/model';
import {
    AdminCircle,
    DesktopChildren,
    HeaderPageTitle,
    HeaderStyled,
    MobileChildren,
} from './styles';
import { UserContextMenu } from './UserContextMenu';

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
    right?: React.ReactNode;
    hide?: boolean;
    className?: string;
};

export const Header = ({ children, hide, className, right }: Props) => {
    const [currentUser] = userModel.useUser();
    const location = useLocation();
    const { isMobile } = useCurrentDevice();
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
                <Flex width="350px" gap={20} jc="flex-end">
                    {right}
                    {isMobile && (
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
