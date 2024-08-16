import styled from 'styled-components';

export const ProgressWrapper = styled.div`
    height: 10px;
    width: 100%;
    padding: 2px;
    background: ${({ theme }) => theme.colors.hover};
    border-radius: 10px;
`;

export const ProgressLine = styled.div<{ $background?: string }>`
    background: ${({ $background }) => $background ?? 'grey'};
    height: 100%;
    border-radius: 10px;
`;
