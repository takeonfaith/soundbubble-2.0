import { songModel } from '../../entities/song/model'
import { TQueueStore } from '../../entities/song/model/types'
import { PlaneSongList } from '../../entities/song/ui/planeList'
import { UserItem } from '../../entities/user/ui'
import { Divider } from '../../shared/components/divider'
import { Flex } from '../../shared/components/flex'

type Props = { queue: TQueueStore }

export const Queue = ({ queue }: Props) => {
	return <Flex d="column" gap={4} width="100%">

		{queue.url?.includes('author') ? <UserItem onClick={() => songModel.fullscreen.close()} orientation="horizontal" user={{
			displayName: queue.name ?? '',
			uid: queue.url.split('/author/')[1],
			imageColors: [],
			photoURL: queue.icon as string,
			isVerified: true,
			isAuthor: true,
			online: 0,
		}} /> : null}
		<Divider />
		<PlaneSongList songs={queue.songs} listName={null} listIcon={undefined} listUrl={null} />
	</Flex>
}