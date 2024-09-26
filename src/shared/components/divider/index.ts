import styled from 'styled-components';
import { TOrientation } from '../../../entities/user/types';

export const Divider = styled.div<{ orientation?: TOrientation }>`
    width: ${({ orientation }) =>
        orientation === 'vertical' ? '0.5px' : '100%'};
    height: ${({ orientation }) =>
        orientation === 'vertical' ? '100%' : '0.5px'};
    background: #91919142;
    margin: 8px 0;
`;
