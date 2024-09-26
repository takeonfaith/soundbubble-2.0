import styled from "styled-components";

export const TypingIndicatorStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 22px;
    border-radius: 20px;

    & > div:nth-child(1) {
        animation: typing 0.8s infinite;
        animation-delay: 0s;
    }

    & > div:nth-child(2) {
        animation: typing 0.8s infinite;
        animation-delay: 0.1s;
    }

    & > div:nth-child(3) {
        animation: typing 0.8s infinite;
        animation-delay: 0.2s;
    }

    @keyframes typing {
        0% {
            opacity: 0;
            transform: scale(0.5);
        }
        50% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.5);
        }
    }
`;

export const TypingIndicatorItem = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 100%;
    opacity: 0;
    transform: scale(0);
    background: ${({ theme }) => theme.scheme.blue.action};
`;
