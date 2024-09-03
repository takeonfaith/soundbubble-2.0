import { IconArrowsShuffle, IconMusicPlus, IconVinyl } from '@tabler/icons-react'
import { useTheme } from 'styled-components'
import { songModel } from '../../entities/song/model'
import { TSong } from '../../entities/song/model/types'
import { AddAlbumModal } from '../../features/addAlbumModal'
import { AddSongModal } from '../../features/addSongModal'
import { modalModel } from '../../layout/modal/model'
import { Button } from '../../shared/components/button'
import { DefaultButton } from '../../shared/components/button/DefaultButton'
import { PlayPauseIcon } from '../../shared/components/playPauseIcon'
import { ButtonsStyled } from './styles'

type Props = {
	buttonColor: string | undefined
	isAdmin: boolean
	isPageOwner: boolean
	queueInfo: {
		listName: string;
		listIcon: string | undefined;
		listUrl: string;
		songs: TSong[];
	}
}

export const BottomButtons = ({ isAdmin, isPageOwner, queueInfo, buttonColor }: Props) => {
	const { state } = songModel.useSong()
	const { queue } = songModel.queue.useQueue()
	const theme = useTheme()
	// const { handlePlay } = useHandleSongPlay(queueInfo)

	if (isAdmin && isPageOwner) {
		return <ButtonsStyled className='bottom-buttons'>
			<Button onClick={() => modalModel.events.open({ content: <AddSongModal />, title: "Add new song" })} $background={theme.colors.pageBackground} style={{ color: theme.scheme.blue.main, gap: '10px' }}>
				<IconMusicPlus size={18} />
				New song
			</Button>
			<Button onClick={() => modalModel.events.open({ content: <AddAlbumModal />, title: "Add new album" })} $background={theme.colors.pageTopButton} style={{ color: theme.scheme.blue.main, gap: '10px' }}>
				<IconVinyl size={18} />
				New album
			</Button>
		</ButtonsStyled >
	}



	return (
		<ButtonsStyled className='bottom-buttons'>
			<DefaultButton loading={state === 'loading' && queue.url === queueInfo.listUrl} onClick={() => null} style={{ background: theme.colors.pageTopButton, color: buttonColor }}>
				<PlayPauseIcon size={20} loading={state === 'loading' && queue.url === queueInfo.listUrl} playling={state === 'playing' && queue.url === queueInfo.listUrl} />
				Play
			</DefaultButton>
			<DefaultButton loading={false} onClick={() => null} style={{ background: theme.colors.pageTopButton, color: buttonColor }}>
				<IconArrowsShuffle size={20} />
				Shuffle
			</DefaultButton>
		</ButtonsStyled>
	)
}