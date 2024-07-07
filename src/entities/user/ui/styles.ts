import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TOrientation } from '../types';

export const UserItemStyled = styled(Link)<{ $orientation: TOrientation }>`
    --size: calc(100vw / 10 - 17px);

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
        font-weight: 300;
    }

    @media (max-width: 1200px) {
        --size: calc(100vw / 7 - 32px);
    }

    @media (max-width: 1000px) {
        --size: calc(100vw / 5 - 32px);

        h4 {
            font-size: ${({ $orientation }) =>
                $orientation === 'horizontal' ? '1rem' : '0.85rem'};
            font-weight: 200;
        }

        span {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 800px) {
        --size: calc(100vw / 5 - 24px);
        padding: 4px 0;

        .general-cover {
            min-width: 40px;
            min-height: 40px;
        }
    }

    @media (max-width: 650px) {
        --size: calc(100vw / 3 - 27px);
    }

    @media (max-width: 400px) {
        h4 {
            font-size: ${({ $orientation }) =>
                $orientation === 'horizontal' ? '1rem' : '0.75rem'};
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
