import styled from 'styled-components';

export const IndicatorStyled = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    padding: 10px 20px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.textColorOppiste};
    outline: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 300;
    font-size: 0.95rem;

    z-index: 1000;
    max-width: 200px;
    white-space: nowrap;
`;
