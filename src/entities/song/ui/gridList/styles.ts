import styled from 'styled-components';

export const GridSongListStyled = styled.div`
    display: grid;
    grid-gap: 4px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 50px 50px 50px;
    grid-auto-flow: column;
    container-type: size;
    width: 100%;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1000px) {
        grid-template-columns: 100% 100% 100%;
        grid-template-rows: 50px 50px 50px 50px;
        grid-gap: 2px;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;

        & > * {
            scroll-snap-align: center;
        }
    }
`;
