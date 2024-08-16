import { DarkBackground } from '@components/darkBackground';
import styled from 'styled-components';
import { MOBILE_MODAL_SIZE, SIZES } from './model/constants';
import { PAGE_TRANSITION_DURATION } from '../../shared/components/pageStack/constants';

export const ModalBackground = styled(DarkBackground)`
    position: absolute;
    z-index: 12;
`;

export const ModalStyled = styled.div<{
    width: string;
    height: string;
}>`
    min-width: ${SIZES.s}px;
    min-height: ${SIZES.s}px;
    width: ${({ width }) => width ?? '500px'};
    height: ${({ height }) => height ?? 'fit-content'};
    max-height: 80dvh;
    background: ${({ theme }) => theme.colors.modal};
    border: 2px solid ${({ theme }) => theme.colors.border};
    position: fixed;
    top: 50%;
    left: 50%;
    overflow: hidden;
    transform: translate(-50%, -50%);
    border-radius: ${({ theme }) => theme.borderRadius.middle};
    display: flex;
    flex-direction: column;
    transition: ${PAGE_TRANSITION_DURATION / 1000}s height,
        ${PAGE_TRANSITION_DURATION / 1000}s width, 0.4s transform;

    @media (max-width: 768px) {
        width: 100%;
        min-width: auto;
        bottom: 0;
        left: 0;
        top: auto;
        border-radius: 16px 16px 0 0;
        border: none;
        height: ${MOBILE_MODAL_SIZE};
        max-height: none;
        transform: translateY(0);

        &::before {
            content: '';
            position: absolute;
            top: 10px;
            left: 50%;
            display: block;
            transform: translateX(-50%);
            background: ${({ theme }) => theme.colors.border};
            width: 40px;
            border-radius: 10px;
            height: 5px;
            z-index: 20;
        }
    }
`;

export const ModalHeader = styled.header`
    padding: 25px;
    padding-bottom: 20px;
    position: sticky;
    top: 0;
    background: ${({ theme }) => theme.colors.modal};
    border-radius: 4px 4px 0 0;
    z-index: 11;
    height: 68px;

    .back-btn {
        color: ${({ theme }) => theme.colors.blue.text};
        gap: 0;
        min-height: auto;
        font-weight: 300;
        max-width: 150px;

        svg {
            min-width: 20px;
        }

        span {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }

    & > button {
        top: 21px;
        right: 25px;
        width: 32px;
        height: 32px;
        min-height: 32px;
        border-radius: 100%;
        background-color: ${({ theme }) => theme.colors.hover};
        color: ${({ theme }) => theme.colors.greyText};
        z-index: 0;

        svg {
            width: 20px;
            height: 20px;
            stroke-width: 2.5;
        }
    }
`;

export const ModalTitle = styled.h3`
    font-weight: 300;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    &.center {
        position: absolute;
        top: 54%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        text-align: center;
    }
`;

export const ModalContent = styled.div`
    width: 100%;
    height: calc(100% - 68px);
    overflow: hidden;
`;

export const ModalButtons = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 8px;
`;

export const ScrollingPart = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
`;
