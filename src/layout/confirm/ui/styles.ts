import styled from 'styled-components';

export const ConfirmStyled = styled.div`
    width: 100%;
    max-width: 500px;
    padding: 20px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.pageBackground};
    border: 1px solid ${({ theme }) => theme.colors.border};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 30px;
    text-align: center;

    flex-direction: column;

    h3 {
        font-weight: 400;
        margin: 0 40px;
    }

    & > button {
        top: 16px;
        right: 25px;
        width: 32px;
        height: 32px;
        min-height: 32px;
        border-radius: 100%;
        background-color: ${({ theme }) => theme.colors.hover};
        color: ${({ theme }) => theme.scheme.grey.text};
        z-index: 0;

        svg {
            width: 20px;
            height: 20px;
            stroke-width: 2.5;
        }
    }

    @media (max-width: 768px) {
        top: auto;
        bottom: 0;
        left: 0;
        transform: translate(0, 0);
        border: none;
        border-radius: 10px 10px 0 0;
    }
`;

export const ConfirmButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 360px) {
        flex-direction: column-reverse;
    }
`;

export const ConfirmIcon = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 17px;
    box-shadow: ${({ theme }) => theme.colors.shadow2};
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.pageTopButton};

    svg {
        color: ${({ color }) => color};
        width: 30px;
        height: 30px;
    }
`;
