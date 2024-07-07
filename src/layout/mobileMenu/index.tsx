import { useState } from 'react';
import { mobileMenuRoutes } from '../../routing/routes';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { MobileLinkItem } from './MobileLinkItem';
import { LinksList, ListItem, MobileMenuStyled } from './styles';

export const MobileMenu = () => {
    const [hideMenu, setHideMenu] = useState(false);
    useUrlParamId({
        page: 'chat',
        onChangeId: (id) => {
            console.log(id);

            // hide menu after navigating to chat page to avoid flashing on screen
            setHideMenu(!!id);
        },
    });

    if (hideMenu) return null;

    return (
        <MobileMenuStyled>
            <LinksList>
                {mobileMenuRoutes.map((route) => {
                    return (
                        <ListItem key={route.url}>
                            <MobileLinkItem route={route} />
                        </ListItem>
                    );
                })}
            </LinksList>
        </MobileMenuStyled>
    );
};
