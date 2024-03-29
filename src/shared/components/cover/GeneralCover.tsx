import { Cover } from '.'
import { GeneralCoverStyled } from './styles'
import { GeneralCoverProps } from './types'

const DEFAULT_IMAGE = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/music-icon-mohammed-jabir-ap.jpg'

export const GeneralCover = ({ src, color, children, size, fallbackIcon, borderRadius }: GeneralCoverProps) => {
	return (
		<GeneralCoverStyled $borderRadius={borderRadius} $size={size} $color1={color}>
			{src && src !== DEFAULT_IMAGE ? <Cover src={src} /> : <div className='cover-icon' >{fallbackIcon}</div>}
			<div className='cover-children'>{children}</div>
		</GeneralCoverStyled>
	)
}