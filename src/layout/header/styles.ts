import styled from 'styled-components';
import { DESKTOP_HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from './constants';

export const HeaderStyled = styled.header`
    width: 100%;
    max-width: 100%;
    min-height: ${DESKTOP_HEADER_HEIGHT}px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0px 45px 0 45px;
    top: 0px;
    position: sticky;
    scroll-padding-top: 150px;
    /* border-bottom: 1px solid ${({ theme }) => theme.colors.border}; */
    background: ${({ theme }) => theme.colors.header};
    backdrop-filter: blur(16px);
    color: ${({ theme }) => theme.colors.textColor};
    z-index: 11;

    &.hidden {
        display: none;
    }

    @media (max-width: 1000px) {
        padding: 10px 20px;
        min-height: ${MOBILE_HEADER_HEIGHT}px;
        display: flex;
        justify-content: flex-start;
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
    width: 150px;
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 1000px) {
        font-weight: 500;
    }
`;
