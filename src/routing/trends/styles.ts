import styled from "styled-components";

export const TrendsPageStyled = styled.div`
	padding: 40px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 10px;
`

export const TrendBox = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 10px;
	background: #00000029;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 16px;


	.title {
		svg {
			width: 18px;
			height: 18px;
		}
	}

	h3 {
		color: #fff;
		font-weight: 300;
		opacity: 0.9;
	}
`