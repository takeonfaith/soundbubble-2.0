import { IconHeart, IconSquareRoundedPlus, IconPlaylistAdd, IconShare3, IconInfoCircle, IconEditCircle, IconHeartBroken } from "@tabler/icons-react"
import { Button } from "../../../shared/components/button"
import { DefaultContextMenuStyled } from "../../../shared/components/defaultContextMenu"
import { Divider } from "../../../shared/components/divider"
import { ENTITIES_ICONS } from "../../../shared/constants/icons"
import { TSong } from "../model/types"
import { userModel } from "../../user/model"
import { modalModel } from "../../../layout/modal/model"
import { ShareModal } from "../../../features/shareModal"
import { popupModel } from "../../../layout/popup/model"
import { AddSongToPlaylistModal } from "../../../features/addSongToPlaylistModal"

type Props = {
	song: TSong | null
}

export const SongMoreContextMenu = ({ song }: Props) => {
	const [{ data }] = userModel.useUser()
	const isLiked = data?.addedSongs?.find(s => s === song?.id)

	const handleShare = () => {
		modalModel.events.open({ title: `Share "${song?.name}" with friends`, content: <ShareModal entity={song} /> })
		popupModel.events.close()
	}

	const handleAddToPlaylist = () => {
		modalModel.events.open({ title: `Add "${song?.name}" to playlist`, content: <AddSongToPlaylistModal song={song} /> })
		popupModel.events.close()
	}

	return <DefaultContextMenuStyled>
		{!isLiked ? <Button>
			<IconHeart size={20} />
			Add to Liked
		</Button> : <Button>
			<IconHeartBroken />
			Remove from Liked
		</Button>}
		<Button onClick={handleAddToPlaylist}>
			<IconSquareRoundedPlus size={20} />
			Add to playlist
		</Button>
		<Button>
			<IconPlaylistAdd />
			Add to queue
		</Button>
		<Divider />
		<Button onClick={handleShare}>
			<IconShare3 />
			Share
		</Button>
		<Button>
			<IconInfoCircle />
			Info
		</Button>
		<Button>
			{ENTITIES_ICONS.author}
			Authors
		</Button>
		{data?.isAdmin && <>
			<Divider />
			<Button>
				<IconEditCircle />
				Edit song
				<span className="admin">Admin</span>
			</Button>
		</>}
	</DefaultContextMenuStyled>
}