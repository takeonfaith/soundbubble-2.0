import { styled } from 'styled-components';

export const ShareModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px 18px;
    gap: 4px;
    min-height: 100%;

    .chat-item {
        padding: 10px 8px;
        border-radius: 10px;
    }
`;

export const BadgeStyled = styled.div`
    padding: 2px 5px;
    display: inline-block;
    background: #fff;
    color: ${({ theme }) => theme.scheme.blue.action};
    font-weight: 600;
    font-size: 0.7rem;
    border-radius: 10px;
    height: 18px;
`;

export const CompactUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.hover};
    font-size: 0.75rem;
    font-weight: 300;
    gap: 12px;
    padding: 4px;
    padding-left: 5px;
    border-radius: 8px;
    animation: appear 0.2s forwards;

    svg {
        width: 18px;
        height: 18px;
        opacity: 0.5;
    }

    &.no-image {
        padding-left: 14px;
    }

    @keyframes appear {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    button {
        svg {
            color: #8a8a8a;
        }
    }
`;

export const ButtonWrapper = styled.div`
    width: calc(100% - 40px);
    position: absolute;
    bottom: 20px;
    background: ${({ theme }) => theme.colors.modal};
    outline: 25px solid ${({ theme }) => theme.colors.modal};
    margin-top: 50px;
    transform: translateY(50px);
    opacity: 0;
    transition: 0.2s;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 10;

    &.open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
`;
