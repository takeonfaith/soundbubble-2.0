import { PlayingAnimationStyled, PlayingAnimationItem, } from './styles'

type Props = {
	playing: boolean
	color: string
}

export const PlayingAnimation = ({ playing, color }: Props) => {
	return (
		<PlayingAnimationStyled $color={color} className={playing ? 'playing-animation playing' : 'playing-animation'}>
			<PlayingAnimationItem />
			<PlayingAnimationItem />
			<PlayingAnimationItem />
		</PlayingAnimationStyled>
	)
}