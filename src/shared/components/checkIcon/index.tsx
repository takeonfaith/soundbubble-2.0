import { IconCircle, IconCircleCheckFilled } from '@tabler/icons-react'
import { CheckIconStyled } from './styles'

type Props = {
	checked: boolean
}

export const CheckIcon = ({ checked }: Props) => {
	return (
		<CheckIconStyled $checked={checked}>
			{checked ? <IconCircleCheckFilled size={24} color="blue" /> : <IconCircle size={24} />}
		</CheckIconStyled>
	)
}