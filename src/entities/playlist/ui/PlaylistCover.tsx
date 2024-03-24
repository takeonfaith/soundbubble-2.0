import { IconVinyl } from '@tabler/icons-react'
import { Cover } from '../../../shared/components/cover'
import { PlaylistCoverStyled } from './styles'

type Props = {
	src: string | undefined
	color: string | undefined
	children?: React.ReactNode
	size?: string
}

export const PlaylistCover = ({ src, color, children, size }: Props) => {
	return (
		<PlaylistCoverStyled $size={size} $color1={color}>
			{src ? <Cover src={src} /> : <IconVinyl className='playlist-icon' />}
			{children}
		</PlaylistCoverStyled>
	)
}