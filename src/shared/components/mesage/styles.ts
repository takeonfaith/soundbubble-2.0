import styled from 'styled-components';

export const MessageStyled = styled.div<{ background: string }>`
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    line-height: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    background: ${({ background }) => background};
    color: ${({ color }) => color};
    font-weight: 300;

    svg {
        width: 22px;
        height: 22px;
    }
`;
