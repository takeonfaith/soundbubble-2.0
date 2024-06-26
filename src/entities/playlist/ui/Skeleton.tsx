import { useTheme } from 'styled-components'
import { Flex } from '../../../shared/components/flex'
import { SkeletonShape } from '../../../shared/components/skeleton'

export const PlaylistSkeleton = () => {
	const theme = useTheme()
	return <Flex gap={12} ai="flex-start" d='column'>
		<SkeletonShape width='calc(100vw / 8)' height='calc(100vw / 8)' radius={theme.borderRadius.middle} />
		<Flex gap={7} ai="flex-start" d='column'>
			<SkeletonShape width='120px' height='15px' radius='4px' />
			<SkeletonShape width='80px' height='12px' radius='3px' />
		</Flex>
	</Flex>
}
