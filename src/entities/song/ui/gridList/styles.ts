import styled from 'styled-components';
import { ListWrapper } from '../../../../shared/components/horizontalList/styles';

export const GridWrapper = styled(ListWrapper)``;

export const GridSongListStyled = styled.div`
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 4px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 50px 50px 50px;
    grid-auto-flow: column;
    container-type: size;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    width: 100%;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 1300px) {
        grid-template-columns: calc(50% - 8px) calc(50% - 8px) calc(50% - 8px);
    }

    @media (max-width: 1000px) {
        grid-template-columns: calc(100% - 40px) calc(100% - 40px) calc(
                100% - 40px
            );
        grid-template-rows: 50px 50px 50px 50px;
        grid-column-gap: 8px;
        grid-row-gap: 2px;

        & > * {
            scroll-snap-align: center;
        }

        & > * {
            margin: 0 20px;
        }
    }
`;
