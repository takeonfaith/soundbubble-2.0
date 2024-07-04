import { mobileMenuRoutes } from '../../routing/routes';
import { MobileLinkItem } from './MobileLinkItem';
import { MobileMenuStyled, LinksList, ListItem } from './styles';

export const MobileMenu = () => {
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
