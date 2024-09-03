import { styled } from 'styled-components';

export const CheckIconStyled = styled.div<{ $checked: boolean }>`
    color: ${({ $checked, theme }) =>
        $checked ? theme.scheme.blue.action : theme.scheme.grey.text};
    height: 24px;
`;
