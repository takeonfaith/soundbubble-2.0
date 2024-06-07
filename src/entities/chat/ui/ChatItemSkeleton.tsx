import { Flex } from '../../../shared/components/flex'
import { SkeletonShape } from '../../../shared/components/skeleton'

export const ChatItemSkeleton = () => {
	return (
		<Flex gap={12} padding='2px 25px'>
			<SkeletonShape width='50px' height='50px' radius='100%' />
			<Flex d='column' gap={4} ai="flex-start">
				<SkeletonShape width='140px' height='14px' />
				<SkeletonShape width='80px' height='10px' />
			</Flex>
		</Flex>
	)
}
