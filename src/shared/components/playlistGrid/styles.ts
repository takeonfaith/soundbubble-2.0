import styled from 'styled-components';

export const PlaylistGridStyled = styled.div`
    --min-column-width: 200px;

    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(var(--min-column-width), 1fr)
    );
    gap: 16px; /* Отступы между плейлистами */

    @media (max-width: 1500px) {
        --min-column-width: 180px;
    }

    @media (max-width: 1120px) {
        --min-column-width: 200px;
    }

    @media (max-width: 1050px) {
        --min-column-width: 180px;
    }
`;

// .playlist-item {
// 	background: #222;
// 	color: #fff;
// 	border-radius: 12px;
// 	padding: 16px;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	text-align: center;
// 	min-width: 180px;
// 	max-width: 300px;
// }
