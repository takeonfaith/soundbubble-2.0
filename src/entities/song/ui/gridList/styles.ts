import styled from "styled-components";

export const GridSongListStyled = styled.div`
	display: grid;
	grid-gap: 8px;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 55px 55px 55px;
	grid-auto-flow: column;
	container-type: size;
	width: 100%;

	& > * {
		height: 55px;
	}

	@media(max-width:1200px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media(max-width:900px) {
		grid-template-columns: repeat(1, 1fr);
	}
`