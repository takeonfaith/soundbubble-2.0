import { IconDiscountCheckFilled } from '@tabler/icons-react'
import { Flex } from '../../../shared/components/flex'
import { DARK_THEME } from '../../../shared/constants/theme'
import { TUser } from '../model/types'
import { TOrientation } from '../types'
import { UserCover } from './UserCover'
import { OnlineIndicator, UserItemStyled } from './styles'
import { UserStatus } from './UserStatus'
import { memo } from 'react'
import { getLastSeen } from '../lib/getLastSeen'

export type LimitedUser = Pick<TUser, 'uid' | 'imageColors' | 'photoURL' | 'isAuthor' | 'displayName' | 'isVerified' | 'online' | 'lastSongPlayed'>

type Props = {
	user: LimitedUser | null | undefined
	orientation?: TOrientation
	onClick?: (user: LimitedUser, e: Evt<'a'>) => void
	children?: React.ReactNode
	as?: string
	showLastSeen?: boolean
}

export const UserItem = memo(({ user, onClick, children, as, showLastSeen, orientation = 'vertical' }: Props) => {

	if (!user) return null

	const { uid, imageColors, photoURL, isAuthor, displayName, isVerified, online } = user
	const isVertical = orientation === 'vertical'
	const status = getLastSeen(online).status

	const handleClick = (e: Evt<'a'>) => {
		onClick?.(user, e)
	}

	return (
		<UserItemStyled as={as} to={`/author/${uid}`} $orientation={orientation} onClick={handleClick}>
			<UserCover color={imageColors?.[0]} src={photoURL} size={isVertical ? 'var(--size)' : '38px'} isAuthor={isAuthor}>
				{status === 'online' && !isAuthor && <OnlineIndicator />}
			</UserCover>
			<Flex d='column' gap={isVertical ? 4 : 1} width='100%' ai={isVertical ? 'center' : 'flex-start'}>
				<Flex jc={isVertical ? 'center' : 'flex-start'} gap={8} width='100%'>
					<h4>{displayName}</h4>
					{isVerified && <IconDiscountCheckFilled size={16} style={{ color: DARK_THEME.colors.blue.main }} />}
				</Flex>
				<UserStatus status={status} isAuthor={isAuthor} showLastSeen={showLastSeen} />
			</Flex>
			{children}
		</UserItemStyled>
	)
})

UserItem.displayName = 'UserItem'