import { ChatItemSkeleton } from '../../entities/chat/ui/ChatItemSkeleton'
import { Flex } from '../../shared/components/flex'

export const ChatsSkeleton = () => {
	return (
		<Flex d="column" gap={16} padding="16px 0">
			<ChatItemSkeleton />
			<ChatItemSkeleton />
			<ChatItemSkeleton />
			<ChatItemSkeleton />
			<ChatItemSkeleton />
			<ChatItemSkeleton />
			<ChatItemSkeleton />
			<ChatItemSkeleton />
			<ChatItemSkeleton />
			<ChatItemSkeleton />
			<ChatItemSkeleton />
			<ChatItemSkeleton />
			<ChatItemSkeleton />
			<ChatItemSkeleton />
			<ChatItemSkeleton />
			<ChatItemSkeleton />
		</Flex>
	)
}
