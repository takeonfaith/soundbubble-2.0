import styled from "styled-components";
import { BeautifulBackground } from "../../shared/components/beautifulBackground";

export const AuthorPageStyled = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
`

export const AuthorTopStyled = styled(BeautifulBackground)`
	height: 380px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;

	background-size: 300% 300%;
	animation: none;
`

export const UserImageStyled = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 100%;
	overflow: hidden;
	z-index: 2;

	img {
		width: 200px;
		height: 200px;
		object-fit: cover;
	}
`

export const ContentWrapperStyled = styled.div`
	padding: 40px;
	display: flex;
	flex-direction: column;
	gap: 30px;
`

export const SongsStyled = styled.div`
	width: 100%;

	h3 {
		margin-bottom: 10px;
	}
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