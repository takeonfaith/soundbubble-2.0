import React from 'react'
import { TMessage } from '../../../entities/chat/model/types'
import { DefaultContextMenuStyled } from '../../../shared/components/defaultContextMenu'
import { Button } from '../../../shared/components/button'
import { IconCopy, IconShare3 } from '@tabler/icons-react'

type Props = {
	message: TMessage
}

export const MessageContextMenu = ({ message }: Props) => {
	return (
		<DefaultContextMenuStyled>
			<Button>
				<IconShare3 />
				Reply
			</Button>
			<Button>
				<IconCopy />
				Copy
			</Button>
		</DefaultContextMenuStyled>
	)
}