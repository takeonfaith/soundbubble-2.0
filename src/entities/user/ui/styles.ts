import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserItemStyled = styled(Link)`
    --size: calc((100vw - var(--sidebar-width)) / 7 - 38px);

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    width: 100%;
    padding: 6px;
    border-radius: ${({ theme }) => theme.borderRadius.big};

    &.vertical {
        padding: 0;
        width: var(--size);
        gap: 10px;
        flex-direction: column;
    }

    &:hover {
        &.horizontal {
            background: ${({ theme }) => theme.colors.hover};
        }

        &.vertical {
            background: none;
        }
    }

    h4 {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 0.9rem;
        font-weight: 300;
    }

    &.vertical {
        h4 {
            font-size: 1rem;
        }
    }

    @media (max-width: 1450px) {
        --size: calc((100vw - var(--sidebar-width)) / 6 - 38px);
    }

    @media (max-width: 1300px) {
        --size: calc((100vw - var(--sidebar-width)) / 5 - 43px);
    }

    @media (max-width: 1150px) {
        --size: calc((100vw - var(--sidebar-width)) / 4 - 43px);
    }

    @media (max-width: 1000px) {
        --size: calc(100vw / 5 - 36px);

        h4 {
            font-weight: 200;
        }

        &.vertical {
            h4 {
                font-size: 1rem;
            }
        }

        & span {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 850px) {
        --size: calc(100vw / 4 - 36px);

        h4 {
            font-weight: 200;
        }

        &.vertical {
            h4 {
                font-size: 1rem;
            }
        }

        & span {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 768px) {
        --size: calc(100vw / 4 - 25px);

        padding: 4px 0;

        .general-cover {
            min-width: 40px;
            min-height: 40px;
        }

        &.vertical {
            h4 {
                font-size: 0.9rem;
            }
        }
    }

    @media (max-width: 650px) {
        --size: calc(100vw / 3 - 27px);
    }

    @media (max-width: 500px) {
        &.vertical {
            h4 {
                font-size: 0.85rem;
            }
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
