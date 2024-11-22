import { styled } from 'styled-components';

export const CheckIconStyled = styled.div<{ $checked: boolean; $type: string }>`
    color: ${({ $checked, $type, theme }) =>
        $checked
            ? $type === 'minus'
                ? theme.scheme.red.action
                : theme.scheme.blue.action
            : theme.colors.greyText};
    height: 24px;
`;
