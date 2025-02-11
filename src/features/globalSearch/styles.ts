import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const TabsWrapper = styled.div`
    padding: 8px 0;
    background: ${({ theme }) => theme.colors.pageBackground};
`;

export const BrowseLink = styled(NavLink)`
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0.5;

    svg {
        width: 22px;
        height: 22px;
    }

    &:hover {
        background: transparent;
        opacity: 1;
        transform: scale(1.1);
    }

    &:active {
        transform: scale(1.05);
    }

    &.active {
        opacity: 1;
        color: ${({ theme }) => theme.scheme.blue.action};
    }
`;
