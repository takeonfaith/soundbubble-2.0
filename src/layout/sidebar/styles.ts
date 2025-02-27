import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { TTheme } from '../../shared/constants/theme';
import { MEDIA_QUERIES } from '../../shared/constants/screenSize';

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

export const SidebarLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px 10px;
    border-radius: ${({ theme }) => theme.borderRadius.mild};
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
        background: ${({ theme }) => theme.colors.hover};
    }

    &:active {
        transform: scale(0.99);
    }

    & > .icon-text {
        opacity: 0.6;
    }

    &.active {
        background: ${({ theme }) => theme.colors.pageTopButton};
        outline: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 8px;

        & > .icon-text {
            opacity: 1;
        }

        svg {
            color: ${({ theme }) => theme.scheme.blue.action};
        }
    }
`;

export const PlaylistsStyled = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 0 2px;
`;

export const SidebarSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 0px 0;

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
            color: ${({ theme }) => theme.scheme.blue.main};
        }
    }
`;

export const SidebarStyled = styled.aside`
    min-width: var(--sidebar-width);
    width: var(--sidebar-width);
    height: calc(100dvh - 160px);
    padding: 10px 18px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 30px;
    overflow-y: auto;

    &::before {
        content: '';
        position: fixed;
        left: 0;
        bottom: 0px;
        width: var(--sidebar-width);
        height: 20px;
        height: 100px;
        box-shadow: -10px -10px 10px ${({ theme }) => theme.colors.pageBackground2};
        background: ${({ theme }) => theme.colors.pageBackground2};
        background-size: cover;
        z-index: 10;
    }

    &.collapsed {
        gap: 10px;

        ${SidebarSectionTitle} {
            display: none;
        }
        ${SidebarLink} {
            justify-content: center;
        }

        ${SidebarLink} .text {
            display: none;
        }

        ${SidebarLink} .icon,
        ${SidebarLink} .icon svg {
            width: 22px;
            height: 22px;
            opacity: 1;
        }

        ${PlaylistsStyled} .no-playlists {
            display: none;
        }

        ${SidebarSection} {
            gap: 10px;

            & .add-playlist {
                width: 54px;
                height: 42px;
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                    width: 22px;
                    height: 22px;
                }
            }
        }
    }

    ${MEDIA_QUERIES.isTablet} {
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

export const NotificationBadge = styled.span<{
    background?: keyof TTheme['scheme'];
}>`
    min-width: 20px;
    width: fit-content;
    height: 20px;
    font-size: 0.7rem;
    padding: 0 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme, background }) =>
        theme.scheme[background ?? 'red'].main};
    border-radius: 10px;
    color: #fff;
    font-weight: 400;
`;
