import styled from 'styled-components';
import { BeautifulBackground } from '../beautifulBackground';

export const CoverStyled = styled.img<{ $coverLoaded: boolean }>`
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
    opacity: ${({ $coverLoaded }) => ($coverLoaded ? '1' : '0')};
`;

export const GeneralCoverStyled = styled(BeautifulBackground)<{
    $color1: string | undefined;
    $size?: string;
    $borderRadius: string | undefined;
}>`
    width: ${({ $size }) => $size ?? 'var(--size)'};
    min-width: ${({ $size }) => $size ?? 'var(--size)'};
    height: ${({ $size }) => $size ?? 'var(--size)'};
    min-height: ${({ $size }) => $size ?? 'var(--size)'};
    display: flex;
    justify-content: center;
    /* background: ${({ $color1 }) => $color1 ?? 'grey'}; */
    position: relative;
    border-radius: ${({ $borderRadius }) => $borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    animation: none;
    background-size: 200% 200%;
    /* overflow: hidden; */

    img {
        border-radius: ${({ $borderRadius }) => $borderRadius};
        width: 100%;
    }

    .cover-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        svg {
            width: 50%;
            height: 50%;
            opacity: 0.7;
            color: #fff;
        }
    }
`;
