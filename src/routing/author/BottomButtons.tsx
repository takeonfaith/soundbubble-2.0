import { IconArrowsShuffle, IconMusicPlus, IconPlaylistAdd, IconVinyl } from '@tabler/icons-react'
import { songModel } from '../../entities/song/model'
import { TSong } from '../../entities/song/model/types'
import { TUser } from '../../entities/user/model/types'
import { AddAlbumModal } from '../../features/addAlbumModal'
import { AddSongModal } from '../../features/addSongModal'
import { modalModel } from '../../layout/modal/model'
import { Button } from '../../shared/components/button'
import { DefaultButton } from '../../shared/components/button/DefaultButton'
import { PlayPauseIcon } from '../../shared/components/playPauseIcon'
import { THEME } from '../../shared/constants/theme'
import { ButtonsStyled } from './styles'

type Props = {
	user: TUser | null
	isAdmin: boolean
	isPageOwner: boolean
	queueInfo: {
		listName: string;
		listIcon: string | undefined;
		listUrl: string;
		songs: TSong[];
	}
}

export const BottomButtons = ({ isAdmin, isPageOwner, queueInfo, user }: Props) => {
	const { state } = songModel.useSong()
	const { queue } = songModel.queue.useQueue()
	// const { handlePlay } = useHandleSongPlay(queueInfo)

	if (isAdmin && isPageOwner) {
		return <ButtonsStyled>
			<Button onClick={() => modalModel.events.open({ content: <AddSongModal />, title: "Add new song" })} style={{ background: `rgb(38, 38, 38)`, color: THEME.colors.blue.main, gap: '10px' }}>
				<IconMusicPlus size={18} />
				New song
			</Button>
			<Button onClick={() => modalModel.events.open({ content: <AddAlbumModal />, title: "Add new album" })} style={{ background: `rgb(38, 38, 38)`, color: THEME.colors.blue.main, gap: '10px' }}>
				<IconVinyl size={18} />
				New album
			</Button>
		</ButtonsStyled>
	}



	return (
		<ButtonsStyled>
			<DefaultButton loading={state === 'loading' && queue.url === queueInfo.listUrl} onClick={() => null} style={{ background: '#262626', color: user?.imageColors?.[1] }}>
				<PlayPauseIcon size={20} loading={state === 'loading' && queue.url === queueInfo.listUrl} playling={state === 'playing' && queue.url === queueInfo.listUrl} />
				Play
			</DefaultButton>
			<DefaultButton loading={false} onClick={() => null} style={{ background: '#262626', color: user?.imageColors?.[1] }}>
				<IconArrowsShuffle size={20} />
				Shuffle
			</DefaultButton>
		</ButtonsStyled>
	)
}