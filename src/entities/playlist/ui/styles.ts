import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Button } from '../../../shared/components/button';
import { TOrientation } from '../../user/types';
import { PLAYLIST_RADIUS } from '../constants';

export const ControlButton = styled(Button)<{
    $color: string;
    $orientation: TOrientation;
}>`
    position: absolute;
    bottom: ${({ $orientation }) =>
        $orientation === 'vertical' ? '60px' : '6px'};
    left: ${({ $orientation }) =>
        $orientation === 'vertical' ? '16px' : 'auto'};
    right: ${({ $orientation }) =>
        $orientation === 'vertical' ? 'auto' : '6px'};
    width: ${({ $orientation }) =>
        $orientation === 'vertical' ? '40px' : '35px'};
    height: ${({ $orientation }) =>
        $orientation === 'vertical' ? '40px' : '35px'};
    min-height: auto;
    border-radius: 100px;
    color: ${({ $color }) => $color};
    background: ${({ theme }) => theme.colors.pageTopButton};
    transition: 0.2s opacity;
    opacity: 0;
    z-index: 10;

    &:hover {
        background: ${({ theme }) => theme.colors.pageBackground2};
    }
`;

export const PlaylistStyled = styled(Link)<{
    $color1: string;
    $orientation: TOrientation;
}>`
    gap: 12px;
    display: flex;
    flex-direction: ${({ $orientation }) =>
        $orientation === 'vertical' ? 'column' : 'row'};
    align-items: ${({ $orientation }) =>
        $orientation === 'vertical' ? 'flex-start' : 'center'};
    height: fit-content;
    color: ${({ theme }) => theme.colors.textColor};
    position: relative;
    text-decoration: none;
    --size: ${({ $orientation }) =>
        $orientation === 'vertical' ? 'calc(100vw / 8 + 3px)' : '34px'};

    width: ${({ $orientation }) =>
        $orientation === 'vertical' ? 'var(--size)' : '100%'};
    padding: ${({ $orientation }) =>
        $orientation === 'vertical' ? '0' : '6px 8px'};
    border-radius: 6px;
    overflow: ${({ $orientation }) =>
        $orientation === 'vertical' ? 'none' : 'hidden'};

    &.playing {
        ${ControlButton} {
            opacity: 1;
            box-shadow: 0 0px 10px #00000017;
        }
    }

    .authors {
        font-size: 0.75rem;
    }

    &::before {
        content: '';
        display: block;
        position: absolute;
        width: var(--size);
        height: var(--size);
        transition: 0.2s opacity;
        box-shadow: 0 50px 100px ${({ $color1 }) => $color1};
        top: 0%;
        opacity: 0.2;
        border-radius: ${PLAYLIST_RADIUS};
    }

    &:hover:before {
        opacity: 0.5;
    }

    &:hover {
        background: ${({ $orientation, theme }) =>
            $orientation === 'horizontal' ? theme.colors.hover : ''};

        ${ControlButton} {
            opacity: 1;
        }
    }

    @media (max-width: 1200px) {
        --size: ${({ $orientation }) =>
            $orientation === 'vertical' ? 'calc(100vw / 6)' : '34px'};
    }

    @media (max-width: 800px) {
        --size: ${({ $orientation }) =>
            $orientation === 'vertical' ? 'calc(100vw / 3 - 28px)' : '34px'};

        padding: 8px 0;

        .general-cover {
            min-width: 40px;
            min-height: 40px;
        }

        &::before {
            display: none;
        }
    }

    @media (max-width: 500px) {
        --size: ${({ $orientation }) =>
            $orientation === 'vertical' ? 'calc(100vw / 2 - 30px)' : '34px'};
    }
`;

export const PalylistTitle = styled.div`
    font-size: 0.95rem;
    font-weight: 200;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
`;

export const PalylistAuthors = styled.div`
    font-size: 0.8rem;
`;
