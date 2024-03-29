import { Flex } from "../../../shared/components/flex"
import { SkeletonShape } from "../../../shared/components/skeleton"

export const UserSkeleton = () => {
	return <Flex d="column" gap={10}>
		<SkeletonShape radius="100%" width="calc(100vw / 11)" height="calc(100vw / 11)" />
		<Flex d="column" gap={4}>
			<SkeletonShape radius="4px" width="140px" height="20px" />
			<SkeletonShape radius="4px" width="80px" height="14px" />
		</Flex>
	</Flex>
}