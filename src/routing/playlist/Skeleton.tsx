import { SongSkeleton } from "../../entities/song/ui/Skeleton"
import { Flex } from "../../shared/components/flex"
import { SkeletonShape } from "../../shared/components/skeleton"
import { THEME } from "../../shared/constants/theme"

export const SkeletonLoading = () => {
	return <Flex width='100%' d='column' ai="flex-start">
		<SkeletonShape width='100%' height='400px' radius='0'>
			<Flex width='100%' d='column' padding='56px 50px 50px 50px' ai="center" jc='center' gap={20}>
				<SkeletonShape width='200px' height='200px' radius={THEME.borderRadius.huge} />
				<Flex d='column' gap={8}>
					<SkeletonShape width='200px' height='30px' />
					<SkeletonShape width='100px' height='20px' radius='3px' />
				</Flex>
				{/* <Flex gap={8}>
					<SkeletonShape width='146px' height='40px' radius='6px' />
					<SkeletonShape width='146px' height='40px' radius='6px' />
				</Flex> */}
			</Flex>
		</SkeletonShape>
		<Flex d="column" padding="78px 40px 40px 58px" width="100%" gap={0}>
			<SongSkeleton />
			<SongSkeleton />
			<SongSkeleton />
			<SongSkeleton />
			<SongSkeleton />
		</Flex>
	</Flex>
}
