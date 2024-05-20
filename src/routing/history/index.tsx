import styled from "styled-components"
import { Header } from "../../layout/header"

const HistoryPageStyled = styled.div`
	width: 100%;
	height: 100%;
`

export const HistoryPage = () => {
	return (
		<HistoryPageStyled>
			<Header />
		</HistoryPageStyled>
	)
}
