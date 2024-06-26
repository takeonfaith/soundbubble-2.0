import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TOrientation } from '../types';

export const UserItemStyled = styled(Link)<{ $orientation: TOrientation }>`
    --size: calc(100vw / 11);

    display: flex;
    flex-direction: ${({ $orientation }) =>
        $orientation === 'vertical' ? 'column' : 'row'};
    align-items: center;
    gap: ${({ $orientation }) =>
        $orientation === 'vertical' ? '10px' : '12px'};
    text-decoration: none;
    width: ${({ $orientation }) =>
        $orientation === 'vertical' ? 'var(--size)' : '100%'};
    padding: ${({ $orientation }) =>
        $orientation === 'vertical' ? '0' : '6px'};
    border-radius: ${({ theme }) => theme.borderRadius.big};

    &:hover {
        background: ${({ theme, $orientation }) =>
            $orientation === 'horizontal' ? theme.colors.hover : 'none'};
    }

    h4 {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: ${({ $orientation }) =>
            $orientation === 'vertical' ? '1rem' : '0.9rem'};
        font-weight: ${({ $orientation }) =>
            $orientation === 'vertical' ? '400' : '300'};
    }

    @media (max-width: 1200px) {
        --size: calc(100vw / 9);
    }

    @media (max-width: 1000px) {
        --size: calc(100vw / 7);

        h4 {
            font-size: 0.86rem;
        }

        span {
            font-size: 0.7rem;
        }
    }
`;

export const OnlineIndicator = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.blue.action};
    outline: 2px solid ${({ theme }) => theme.colors.pageBackground};
    position: absolute;
    bottom: 0px;
    right: 0px;
`;
