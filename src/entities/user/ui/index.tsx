import { IconDiscountCheckFilled } from '@tabler/icons-react'
import { Flex } from '../../../shared/components/flex'
import { DARK_THEME } from '../../../shared/constants/theme'
import { TUser } from '../model/types'
import { TOrientation } from '../types'
import { UserCover } from './UserCover'
import { UserItemStyled } from './styles'

type Props = {
	user: Pick<TUser, 'uid' | 'imageColors' | 'photoURL' | 'isAuthor' | 'displayName' | 'isVerified'> | null | undefined
	orientation?: TOrientation
	onClick?: () => void
	children?: React.ReactNode
}

export const UserItem = ({ user, onClick, children, orientation = 'vertical' }: Props) => {

	if (!user) return null

	const { uid, imageColors, photoURL, isAuthor, displayName, isVerified } = user
	const isVertical = orientation === 'vertical'

	return (
		<UserItemStyled to={`/author/${uid}`} $orientation={orientation} onClick={onClick}>
			<UserCover color={imageColors?.[0]} src={photoURL} size={isVertical ? 'var(--size)' : '38px'} isAuthor={isAuthor} />
			<Flex d='column' gap={isVertical ? 4 : 1} width='100%' ai={isVertical ? 'center' : 'flex-start'}>
				<Flex jc={isVertical ? 'center' : 'flex-start'} gap={8} width='100%'>
					<h4>{displayName}</h4>
					{isVerified && <IconDiscountCheckFilled size={16} style={{ color: DARK_THEME.colors.blue.main }} />}
				</Flex>
				<span>{isAuthor ? 'Author' : "User"}</span>
			</Flex>
			{children}
		</UserItemStyled>
	)
}