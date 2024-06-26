import styled from 'styled-components';

export const IconTextStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${({ theme }) => theme.colors.textColor};
    opacity: 0.7;
`;

export const Icon = styled.div`
    width: 21px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 21px;
        height: 21px;
    }
`;

export const Text = styled.div`
    font-weight: 300;
`;
