import { styled } from "styled-components";
import { BeautifulBackground } from "../beautifulBackground";

export const PageTopStyled = styled(BeautifulBackground)`
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	position: relative;
	background-size: 300% 300%;
	animation: none;
`


export const ButtonsStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	width: 300px;
	margin-bottom: -70px;

	button {
		box-shadow: 0 20px 40px #00000054;
	}
`

export const TopRightCorner = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	top: 30px;
	right: 30px;
	gap: 10px;
`

export const TopBackground = styled.div`
	width: 100%;
	position: absolute;
	height: 100%;
	left: 0;
	padding-top: 270px ;
	overflow: hidden;
	z-index: 0;

	img {
		width: 300%;
		animation: bgWave 4s linear infinite;


		@keyframes bgWave {
			0%{
				transform: translateX(0%);
			}
			100% {
				transform: translate(-50%);
			}
		}
	}
`

export const WaveSection = styled.div`
	width: 300%;
	transform: translateY(6%);

	
`