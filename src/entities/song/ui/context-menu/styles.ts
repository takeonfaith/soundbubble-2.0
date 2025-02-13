import { styled } from 'styled-components';

export const AddToPlaylistsContextMenuStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 4px;

    input {
        border-radius: 4px;
        min-height: 30px;
        height: 30px;
        font-size: 0.8rem;
        padding-left: 30px;
    }

    & .playlist-item, & .user-item {
        --size: 30px;
        border-radius: 3px;

        & .playlist-title, & h4 {
            font-size: 0.85rem;
        }
    }

    & .left-icon {
        top: 3px;
        left: 3px;

        svg {
            width: 16px;
            height: 16px;
        }
    }
`;
