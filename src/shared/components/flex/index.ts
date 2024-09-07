import styled from 'styled-components';

export const Flex = styled.div<{
    jc?:
        | 'space-between'
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'space-around'
        | 'space-evenly';
    ai?: 'center' | 'flex-start' | 'flex-end' | 'baseline';
    gap?: number;
    d?: 'column' | 'row';
    wrap?: 'wrap' | 'nowrap';
    width?: string;
    height?: string;
    padding?: string;
}>`
    display: flex;
    align-items: ${({ ai }) => ai ?? 'center'};
    justify-content: ${({ jc }) => jc ?? 'flex-start'};
    flex-direction: ${({ d }) => d ?? 'row'};
    flex-wrap: ${({ wrap }) => wrap};
    gap: ${({ gap }) => `${gap ?? 0}px`};
    width: ${({ width }) => width ?? 'fit-content'};
    height: ${({ height }) => height ?? 'fit-content'};
    padding: ${({ padding }) => padding ?? '0'};
`;
