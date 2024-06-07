import { GeneralCover } from '../../../shared/components/cover/GeneralCover'
import { GeneralCoverProps } from '../../../shared/components/cover/types'
import { ENTITIES_ICONS } from '../../../shared/constants/icons'

type Props = Omit<GeneralCoverProps, 'borderRadius' | 'fallbackIcon'> & {
	isAuthor: boolean | undefined
	children?: React.ReactNode
	fallbackIcon?: React.ReactNode
}

export const UserCover = (props: Props) => {
	return (
		<GeneralCover {...props} fallbackIcon={props.fallbackIcon ?? (props.isAuthor ? ENTITIES_ICONS.author : ENTITIES_ICONS.user)} borderRadius={'100%'} />
	)
}