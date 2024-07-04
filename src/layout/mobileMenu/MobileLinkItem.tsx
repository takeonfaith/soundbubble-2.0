import { TRoute } from '../../routing/routes';
import { MobileLinkItemStyled, ItemIcon, ItemTitle } from './styles';

type Props = { route: TRoute };

const getClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'active' : '';

export const MobileLinkItem = ({ route }: Props) => {
    const { url, title, icon } = route;

    return (
        <MobileLinkItemStyled to={url} className={getClassName}>
            <ItemIcon>{icon}</ItemIcon>
            <ItemTitle>{title}</ItemTitle>
        </MobileLinkItemStyled>
    );
};
