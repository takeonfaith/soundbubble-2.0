import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MobileMenuStyled = styled.nav`
    @media (min-width: 1001px) {
        display: none;
    }

    min-height: 80px;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding: 0 10px;
    padding-top: 10px;
`;

export const LinksList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
`;

export const ListItem = styled.li`
    width: 100%;
`;

export const MobileLinkItemStyled = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    width: 100%;
    opacity: 0.5;

    &.active {
        opacity: 1;
        color: ${({ theme }) => theme.scheme.blue.action};
    }
`;

export const ItemIcon = styled.div`
    svg {
        width: 26px;
        height: 26px;
    }
`;

export const ItemTitle = styled.div`
    font-weight: 300;
    font-size: 0.75rem;
`;
