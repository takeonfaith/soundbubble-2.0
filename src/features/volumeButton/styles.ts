import styled from 'styled-components';

export const VolumeButtonStyled = styled.div`
    position: relative;

    .song-slider {
        opacity: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 150px;
        left: 100%;
        position: absolute;
        transition: 0.2s;
        pointer-events: none;
    }

    &:hover {
        .song-slider {
            opacity: 1;
            pointer-events: all;
        }
    }
`;
