import styled from 'styled-components';
import { Button } from '../../shared/components/button';

export const ShareButtonStyled = styled(Button)`
    color: #fff;
    filter: ${({ theme }) => theme.colors.brightness};
    position: relative;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.textColorOppiste};
    min-width: 100%;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0;
        z-index: -1;
        background: ${({ color }) => color ?? 'grey'};
        filter: brightness(${({ theme }) => theme.colors.brightness});
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.header};
        opacity: 0.3;
    }
`;
