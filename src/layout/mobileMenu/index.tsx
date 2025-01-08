import { chatModel } from '../../entities/chat/model';
import { mobileMenuRoutes } from '../../routing/routes';
import useCurrentDevice from '../../shared/hooks/useCurrentDevice';
import { MobileLinkItem } from './MobileLinkItem';
import { LinksList, ListItem, MobileMenuStyled } from './styles';

export const MobileMenu = () => {
    const [chat] = chatModel.useCurrentChat();
    const { isMobile } = useCurrentDevice();

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
