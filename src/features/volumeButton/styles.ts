import styled from 'styled-components';

export const VolumeButtonStyled = styled.div`
    position: relative;

    .song-slider {
        opacity: 0;
        top: calc(50% + 2px);
        transform: translate(0px, -50%);
        left: 100%;
        position: absolute;
        transition: 0.2s;
        pointer-events: none;
        max-width: 200px;
        box-sizing: content-box;
    }

    &:hover {
        .song-slider {
            opacity: 1;
            pointer-events: all;
        }
    }
`;
