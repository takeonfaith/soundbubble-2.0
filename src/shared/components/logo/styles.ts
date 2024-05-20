import styled from 'styled-components';

export const LogoStyled = styled.img`
    width: 30px;
`;

export const LogoText = styled.div`
    font-size: 1.1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.textColor};
    opacity: 0.9;
`;
