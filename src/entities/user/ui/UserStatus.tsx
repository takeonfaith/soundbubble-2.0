import styled from 'styled-components';
import { translate } from '../../../i18n';

const UserStatusStyled = styled.span`
    font-size: 0.8rem;
    font-weight: 300;
    opacity: 0.5;

    &.online {
        color: ${({ theme, color }) => color ?? theme.scheme.blue.action};
        opacity: 1;
    }
`;

type Props = {
    isAuthor: boolean | undefined;
    showLastSeen: boolean | undefined;
    status: string | undefined;
    color?: string;
    isGroupChat?: boolean;
};

export const UserStatus = ({
    isAuthor,
    showLastSeen,
    status,
    color,
}: Props) => {
    return (
        <UserStatusStyled
            color={color}
            className={status === 'online' && showLastSeen ? 'online' : ''}
        >
            {isAuthor ? translate('author') : showLastSeen ? status : 'User'}
        </UserStatusStyled>
    );
};
