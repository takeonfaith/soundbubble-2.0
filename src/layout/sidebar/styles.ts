import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarStyled = styled.aside`
    min-width: var(--sidebar-width);
    width: var(--sidebar-width);
    height: 100dvh;
    padding: 10px 18px;
    /* background: ${({ theme }) => theme.colors.sidebar}; */
    /* border-right: 1px solid ${({ theme }) => theme.colors.border}; */
    position: relative;

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
    gap: 2px;
    margin: 30px 0;

    & .add-playlist {
        color: ${({ theme }) => theme.colors.textColor};
        background: transparent;
        border: none;
        width: 30px;
        height: 30px;
        min-height: 30px;
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
    font-size: 1rem;

    &:hover {
        background: ${({ theme }) => theme.colors.hover};
    }

    &:active {
        transform: scale(0.99);
    }

    svg {
        opacity: 0.6;
    }

    &.active {
        & > div > div {
            opacity: 1;
            color: ${({ theme }) => theme.colors.blue.main};
        }

        svg {
            opacity: 1;
        }
    }
`;

export const SidebarSectionTitle = styled.div`
    font-size: 0.8rem;
    opacity: 0.3;
    color: ${({ theme }) => theme.colors.textColor};
    padding: 4px 10px;
    padding-right: 0px;
    text-transform: uppercase;
    transition: 0.2s opacity;

    &.clickable {
        cursor: pointer;

        @media (hover: hover) {     
            &:hover {
                opacity: 0.5;
            }
        }
    }
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
