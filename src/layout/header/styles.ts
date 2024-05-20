import styled from 'styled-components';

export const HeaderStyled = styled.header`
    width: 100%;
    padding: 0 7px;
    min-height: 40px;
    display: flex;
    flex-direction: column;
    padding: 20px 55px 0 55px;
    top: 0px;
    position: sticky;
    scroll-padding-top: 150px;
    /* border-bottom: 1px solid ${({ theme }) => theme.colors.border}; */
    background: ${({ theme }) => theme.colors.pageBackground};
    color: ${({ theme }) => theme.colors.textColor};
    z-index: 10;
`;

export const HeaderPageTitle = styled.h2`
    width: 300px;
    display: flex;
    align-items: center;
    gap: 8px;
`;
