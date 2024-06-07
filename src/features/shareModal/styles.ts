import { styled } from 'styled-components';

export const BadgeStyled = styled.div`
    padding: 2px 5px;
    display: inline-block;
    background: #fff;
    color: ${({ theme }) => theme.colors.blue.action};
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
    gap: 10px;
    padding: 4px;
    border-radius: 15px;
    animation: appear 0.2s forwards;

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
    width: 100%;
    position: sticky;
    background: ${({ theme }) => theme.colors.modal};
    bottom: 0px;
    outline: 25px solid ${({ theme }) => theme.colors.modal};
    margin-top: 50px;
    transform: translateY(50px);
    opacity: 0;
    transition: 0.2s;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &.open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
`;
