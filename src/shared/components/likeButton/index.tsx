import { IconHeart, IconHeartFilled } from '@tabler/icons-react'
import { LikeButtonStyled } from './styles'
import { THEME } from '../../constants/theme'

type Props = {
	isLiked: boolean
	likeColor: string | undefined
	onClick: () => void
}

export const LikeButton = ({ isLiked, likeColor = THEME.colors.greyText, onClick }: Props) => {
	return (
		<LikeButtonStyled className='like-button' onClick={onClick} isLiked={isLiked} likeColor={likeColor}>
			{isLiked ? <IconHeartFilled /> : <IconHeart />}
		</LikeButtonStyled>
	)
}