import { TMessage } from '../../../entities/chat/model/types'
import { SystemMessageItemStyled } from './styles'

type Props = {
	message: TMessage
}

export const SystemMessageItem = ({ message }: Props) => {
	return (
		<SystemMessageItemStyled>{message.message}</SystemMessageItemStyled>
	)
}