import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoWrapper = styled(Link)<{ size?: string }>`
    display: flex;
    align-items: center;
    gap: 14px;
    transition: 0.1s transform;

    &:active {
        transform: scale(0.96);
    }

    &.appLike {
        background: ${({ theme }) => theme.colors.pageBackground};
        box-shadow: ${({ theme }) => theme.colors.shadow2};
        border-radius: 10px;
        padding: 8px;
        width: ${({ size }) => size ?? '30px'};
        height: ${({ size }) => size ?? '30px'};
        padding: 10%;
    }
`;

export const LogoStyled = styled.img<{ size?: string }>`
    width: ${({ size }) => size ?? '30px'};
`;

export const LogoText = styled.span`
    font-size: 1.1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.textColor};
    opacity: 0.9;
    cursor: pointer;
`;
