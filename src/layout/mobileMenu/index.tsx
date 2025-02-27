import { useUnit } from 'effector-react';
import { chatModel } from '../../entities/chat/model';
import { mobileMenuRoutes } from '../../routing/routes';
import { $isMobileOrTablet } from '../../shared/hooks/useDevice/model';
import { MobileLinkItem } from './MobileLinkItem';
import { LinksList, ListItem, MobileMenuStyled } from './styles';

export const MobileMenu = () => {
    const [chat] = chatModel.useCurrentChat();
    const isMobile = useUnit($isMobileOrTablet);

    if (chat || !isMobile) return null;

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
