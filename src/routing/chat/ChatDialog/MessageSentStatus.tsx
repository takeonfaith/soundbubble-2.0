import { IconCheck, IconChecks, IconClock } from '@tabler/icons-react'

type Props = {
	isMine: boolean
	sendStatus: string
}

export const MessageSentStatus = ({ isMine, sendStatus }: Props) => {
	if (!isMine) return null

	if (sendStatus === 'Error') return null

	if (sendStatus === 'Pending') return <IconClock />

	if (sendStatus === 'Sent') return <IconCheck />

	return <IconChecks />
}
