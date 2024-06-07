import { TypingIndicatorItem, TypingIndicatorStyled } from './styles'

type Props = {
	isTyping?: boolean
}

export const TypingIndicator = ({ isTyping = true }: Props) => {
	if (!isTyping) return null

	return (
		<TypingIndicatorStyled>
			<TypingIndicatorItem />
			<TypingIndicatorItem />
			<TypingIndicatorItem />
		</TypingIndicatorStyled>
	)
}