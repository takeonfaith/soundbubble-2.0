import { GeneralCover } from '../../../shared/components/cover/GeneralCover'
import { GeneralCoverProps } from '../../../shared/components/cover/types'
import { ENTITIES_ICONS } from '../../../shared/constants/icons'
import { PLAYLIST_RADIUS } from '../constants'

type Props = Omit<GeneralCoverProps, 'fallbackIcon'> & {
	isAlbum: boolean
}

export const PlaylistCover = (props: Props) => {
	return (
		<GeneralCover {...props} borderRadius={props.borderRadius ?? PLAYLIST_RADIUS} fallbackIcon={props.isAlbum ? ENTITIES_ICONS.album : ENTITIES_ICONS.playlist} />
	)
}