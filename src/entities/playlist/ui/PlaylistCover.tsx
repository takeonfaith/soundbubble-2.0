import { GeneralCover } from '../../../shared/components/cover/GeneralCover'
import { GeneralCoverProps } from '../../../shared/components/cover/types'
import { ENTITIES_ICONS } from '../../../shared/constants/icons'
import { PLAYLIST_RADIUS } from '../constants'

type Props = Omit<GeneralCoverProps, 'fallbackIcon'>

export const PlaylistCover = (props: Props) => {
	return (
		<GeneralCover {...props} borderRadius={props.borderRadius ?? PLAYLIST_RADIUS} fallbackIcon={ENTITIES_ICONS.playlist} />
	)
}