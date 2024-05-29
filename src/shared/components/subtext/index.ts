import { styled } from 'styled-components';

export const Subtext = styled.span`
    font-size: 0.8rem;
    font-weight: 300;
    color: ${({theme})=>theme.colors.textColor};
    opacity: 0.5;
`;
