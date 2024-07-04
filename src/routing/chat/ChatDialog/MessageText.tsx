import { IconLink } from '@tabler/icons-react'
import styled from 'styled-components'
import { isValidHttpUrl } from '../../../shared/funcs/isValidHttpUrl'

const MessageLinkStyled = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	color: ${({ theme }) => theme.colors.blue.main};
	padding: 4px;
	background: ${({ theme }) => theme.colors.blue.transparent2};
	border-radius: 6px;
`

type Props = {
	message: string
}

export const MessageText = ({ message }: Props) => {
	const splittedMessage = message.split(' ')

	return (
		<>{splittedMessage.map(word => {
			if (isValidHttpUrl(word)) {
				return <MessageLinkStyled href={word} target="_blank" rel="noreferrer" >
					<IconLink size={18} />
					{word.slice(8, word.length)}
				</MessageLinkStyled >
			}

			return word + ' '
		})}</>
	)
}