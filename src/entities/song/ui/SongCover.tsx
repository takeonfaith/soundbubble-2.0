import { IconMusic } from '@tabler/icons-react'
import { GeneralCover } from '../../../shared/components/cover/GeneralCover'
import { GeneralCoverProps } from '../../../shared/components/cover/types'
import { SONG_RADIUS } from '../constants'

type Props = Omit<GeneralCoverProps, 'fallbackIcon'>

export const SongCover = (props: Props) => {
	return (
		<GeneralCover fallbackIcon={<IconMusic />} {...props} borderRadius={props.borderRadius ?? SONG_RADIUS} />
	)
}