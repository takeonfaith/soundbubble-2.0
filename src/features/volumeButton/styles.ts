import styled from 'styled-components';

export const VolumeButtonStyled = styled.div`
    position: relative;
    height: 40px;

    .song-slider {
        opacity: 0;
        top: 50%;
        transform: translateY(-50%) translateX(10px);
        left: 100%;
        position: absolute;
        transition: 0.2s;
        pointer-events: none;
        max-width: 200px;
        width: 500%;
        box-sizing: content-box;
    }

    &:hover {
        &::before {
            content: '';
            display: block;
            position: absolute;
            height: 40px;
            width: 275px;
        }

        .song-slider {
            opacity: 1;
            pointer-events: all;
        }
    }
`;

export const SliderWrapper = styled.div`
    padding: 10px;
    overflow: hidden;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    position: relative;
`;
