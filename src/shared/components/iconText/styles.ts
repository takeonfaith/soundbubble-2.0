import styled from 'styled-components';

export const IconTextStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    color: ${({ theme }) => theme.colors.textColor};
`;

export const Icon = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 20px;
        height: 20px;
    }
`;

export const Text = styled.div`
    font-weight: 300;
`;
