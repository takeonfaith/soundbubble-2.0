import { chatModel } from '../../entities/chat/model';
import { mobileMenuRoutes } from '../../routing/routes';
import { MobileLinkItem } from './MobileLinkItem';
import { LinksList, ListItem, MobileMenuStyled } from './styles';

export const MobileMenu = () => {
    const { currentChatId } = chatModel.useChats();

    if (currentChatId) return null;

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
