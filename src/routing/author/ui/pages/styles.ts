import { styled } from 'styled-components';

export const AuthorPageHeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 14px;
    padding: 20px 0;
    position: sticky;
    top: 0px;
    background: ${({ theme }) => theme.colors.pageBackground};
    z-index: 10;

    h2 {
        font-weight: 500;
    }
`;
