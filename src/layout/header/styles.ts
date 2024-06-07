import styled from 'styled-components';

export const HeaderStyled = styled.header`
    width: 100%;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0px 55px 0 55px;
    top: 0px;
    position: sticky;
    scroll-padding-top: 150px;
    /* border-bottom: 1px solid ${({ theme }) => theme.colors.border}; */
    background: ${({ theme }) => theme.colors.pageBackground};
    color: ${({ theme }) => theme.colors.textColor};
    z-index: 10;
`;

export const HeaderPageTitle = styled.h2`
    width: 150px;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const SearchStyled = styled.div`
    width: 100%;
    max-width: 650px;

    @media (max-width: 1000px) {
        width: 100%;
    }
`;
