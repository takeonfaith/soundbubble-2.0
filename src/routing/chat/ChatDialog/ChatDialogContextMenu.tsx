import { IconFiles, IconInfoCircle, IconPhoto } from '@tabler/icons-react'
import { Button } from '../../../shared/components/button'
import { DefaultContextMenuStyled } from '../../../shared/components/defaultContextMenu'

type Props = {}

export const ChatDialogContextMenu = (props: Props) => {
	return (
		<DefaultContextMenuStyled>
			<Button>
				<IconInfoCircle />
				Info
			</Button>
			<Button>
				<IconFiles />
				Attacments
			</Button>
			<Button>
				<IconPhoto />
				Change wallpaper
			</Button>
		</DefaultContextMenuStyled>
	)
}