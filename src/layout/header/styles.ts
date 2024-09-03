import styled from 'styled-components';
import { DESKTOP_HEADER_HEIGHT } from './constants';

export const HeaderStyled = styled.header`
    width: 100%;
    max-width: 100%;
    min-height: ${DESKTOP_HEADER_HEIGHT}px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0px calc(var(--page-padding) + 6px) 0
        calc(var(--page-padding) + 6px);
    top: 0px;
    position: sticky;
    scroll-padding-top: 150px;
    /* border-bottom: 1px solid ${({ theme }) => theme.colors.border}; */
    background: ${({ theme }) => theme.colors.header};
    backdrop-filter: blur(16px);
    color: ${({ theme }) => theme.colors.textColor};
    z-index: 11;

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
    width: 300px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 400;

    @media (max-width: 1000px) {
        font-weight: 500;
    }
`;
