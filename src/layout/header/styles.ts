import styled from 'styled-components';
import { DESKTOP_HEADER_HEIGHT } from './constants';

export const HeaderStyled = styled.header`
    width: 100%;
    max-width: 100%;
    min-height: ${DESKTOP_HEADER_HEIGHT}px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0px var(--page-padding) 0 var(--page-padding);
    top: 0px;
    position: sticky;
    scroll-padding-top: 150px;
    /* border-bottom: 1px solid ${({ theme }) => theme.colors.border}; */
    background: ${({ theme }) => theme.colors.pageBackground};
    color: ${({ theme }) => theme.colors.textColor};
    z-index: 11;

    .general-cover {
        outline: 2px solid ${({ theme }) => theme.colors.pageBackground};
    }

    &.hidden,
    &.hide-on-desktop {
        display: none;
    }

    @media (max-width: 1000px) {
        padding: 10px 20px;
        min-height: fit-content;
        display: flex;
        justify-content: flex-start;

        &.hide-on-desktop {
            display: flex;
        }
    }
`;

export const DesktopChildren = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const MobileChildren = styled.div`
    width: 100%;

    @media (min-width: 1001px) {
        display: none;
    }
`;

export const HeaderPageTitle = styled.h2`
    width: 350px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 400;

    @media (max-width: 1000px) {
        font-weight: 500;
        width: 100%;
    }
`;

export const AdminCircle = styled.div`
    position: absolute;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-radius: 100%;
    background: ${({ theme: { scheme } }) =>
        `linear-gradient(45deg, ${scheme.blue.action}, ${scheme.purple.main}, ${scheme.red.main})`};
`;
