import styled from 'styled-components';

export const CoverStyled = styled.img<{ $coverLoaded: boolean }>`
    height: 100%;
    object-fit: cover;
    /* transition: 0.4s; */
    /* opacity: ${({ $coverLoaded }) => ($coverLoaded ? '1' : '0')};
    transform: ${({ $coverLoaded }) =>
        $coverLoaded ? 'scale(1)' : 'scale(1.2)'}; */
`;

export const GeneralCoverStyled = styled.div<{
    $color1: string | undefined;
    $size?: string;
    $borderRadius: string | undefined;
}>`
    width: ${({ $size }) => $size ?? 'var(--size)'};
    min-width: ${({ $size }) => $size ?? 'var(--size)'};
    height: ${({ $size }) => $size ?? 'var(--size)'};
    display: flex;
    justify-content: center;
    background: ${({ $color1 }) => $color1 ?? 'grey'};
    position: relative;
    border-radius: ${({ $borderRadius }) => $borderRadius};
    /* overflow: hidden; */

    img {
        border-radius: ${({ $borderRadius }) => $borderRadius};
        width: 100%;
    }

    .cover-icon {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 70%;
            height: 70%;
            opacity: 0.8;
            color: #fff;
        }
    }
`;
