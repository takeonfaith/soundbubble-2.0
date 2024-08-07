import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarStyled = styled.aside`
    min-width: 270px;
    width: 270px;
    height: 100dvh;
    padding: 10px;
    background: ${({ theme }) => theme.colors.sidebar};
    position: relative;
    border-right: 1px solid ${({ theme }) => theme.colors.border};

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const LogoWrapper = styled.div`
    padding: 10px;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SidebarSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    margin: 30px 0;

    & .add-playlist {
        color: ${({ theme }) => theme.colors.textColor};
        background: transparent;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg {
            width: 18px;
            height: 18px;
        }

        &:hover {
            background: ${({ theme }) => theme.colors.hover};
            color: ${({ theme }) => theme.colors.blue.main};
        }
    }
`;

export const SidebarLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px 10px;
    border-radius: ${({ theme }) => theme.borderRadius.mild};

    &:hover {
        background: ${({ theme }) => theme.colors.hover};
    }

    &.active {
        & > div > div {
            opacity: 1;
            color: ${({ theme }) => theme.colors.blue.main};
        }
    }
`;

export const SidebarSectionTitle = styled.div`
    font-size: 0.8rem;
    opacity: 0.3;
    color: ${({ theme }) => theme.colors.textColor};
    padding: 4px 10px;
    text-transform: uppercase;
`;

export const PlaylistsStyled = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 0 2px;
`;

export const NotificationBadge = styled.span`
    min-width: 20px;
    width: fit-content;
    height: 20px;
    font-size: 0.7rem;
    padding: 0 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.red.main};
    border-radius: 10px;
    color: #fff;
    font-weight: 400;
`;
