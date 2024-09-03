import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserItemStyled = styled(Link)`
    --size: calc(100vw / 10 - 17px);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    width: var(--size);
    padding: 0;
    border-radius: ${({ theme }) => theme.borderRadius.big};

    .verified-icon {
        width: 16px;
        height: 16px;
    }

    &.vertical-small {
        --size: 60px;
        width: var(--size);
        position: relative;
        overflow: visible;

        h4 {
            font-size: 0.75rem;
            white-space: normal;
            text-align: center;
            font-weight: 300;
            height: 50px;
        }

        .verified-icon {
            position: absolute;
            right: 2px;
            top: calc(var(--size) - 10px);
            width: 16px;
            height: 16px;
            background: #fff;
            border-radius: 100%;
        }
    }

    &.horizontal {
        padding: 5px 6px;
        width: 100%;
        gap: 12px;
        flex-direction: row;
    }

    @media (hover: hover) {
        &.vertical-small {
            &::before {
                content: '';
                position: absolute;
                top: -10px;
                left: -10px;
                width: calc(100% + 20px);
                height: calc(100% + 20px);
                background: ${({ theme }) => theme.colors.hover};
                border-radius: 10px;
                transition: opacity 0.2s ease;
                opacity: 0;
            }
        }

        &:hover {
            &.horizontal {
                background: ${({ theme }) => theme.colors.hover};
            }

            &.vertical-small {
                &::before {
                    opacity: 1;
                }
            }
        }
    }

    h4 {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 1rem;
        font-weight: 200;

        &.horizontal {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 1350px) {
        --size: calc(100vw / 7 - 32px);
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
            font-size: 1rem;
            font-weight: 300;

            &.horizontal {
                font-size: 1rem;
            }
        }

        &.horizontal {
            padding: 5px 0;
        }

        &.vertical {
            h4 {
                font-size: 1rem;
            }
        }

        & span {
            font-size: 0.8rem;
        }

        &.vertical-small {
            --size: 50px;
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

    @media (max-width: 400px) {
        h4 {
            &.vertical {
                font-size: 0.75rem;
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

    &.vertical-small {
        bottom: 2px;
        right: 5px;
        outline: 3px solid ${({ theme }) => theme.colors.pageBackground};
    }
`;
