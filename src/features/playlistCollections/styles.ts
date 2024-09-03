import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PlaylistCollectionItemStyled = styled(Link)<{
    background: string;
}>`
    width: calc((100vw - var(--sidebar-width) - 118px) / 5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ background }) => background};
    padding: 30px 20px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    color: #fff;

    & .emoji {
        font-size: 4rem;
        z-index: 100;
        display: none;
    }

    &::before {
        content: '';
        display: flex;
        width: 100%;
        height: 200%;
        background: #ffffff38;
        position: absolute;
        top: 0;
        right: 0;
        rotate: -45deg;
        translate: 40px 0;
        border-radius: 10px;
        transition: 0.5s;
    }

    &::after {
        content: '';
        display: flex;
        width: 100%;
        height: 200%;
        background: #ffffff38;
        position: absolute;
        top: 0;
        right: 0;
        rotate: -45deg;
        translate: 130px 0;
        border-radius: 0px;
        transition: 0.5s;
    }

    @media (hover: hover) {
        &:hover {
            &::after {
                translate: 100px;
            }

            &::before {
                translate: 30px;
                height: 250%;
            }
        }
    }

    @media (max-width: 768px) {
        width: calc(100vw / 2 - 26px);
    }
`;
