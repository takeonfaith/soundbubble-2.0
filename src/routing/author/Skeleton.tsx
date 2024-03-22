import { PlaylistSkeleton } from "../../entities/playlist/ui/Skeleton"
import { SongSkeleton } from "../../entities/song/ui/Skeleton"
import { Flex } from "../../shared/components/flex"
import { SkeletonShape } from "../../shared/components/skeleton"

export const SkeletonLoading = () => {
	return <Flex width='100%' d='column' ai="flex-start">
		<SkeletonShape width='100%' height='400px' radius='0'>
			<Flex width='100%' d='column' padding='56px 50px 50px 50px' ai="center" jc='center' gap={20}>
				<SkeletonShape width='200px' height='200px' radius="100%" />
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
		<Flex d='column' gap={30} padding='40px' width='100%'>
			<Flex d='column' ai="flex-start" gap={8} width='100%'>
				<SkeletonShape width='100px' height='25px' radius="6px" />
				<Flex gap={10} width='100%'>
					<Flex width='100%' d='column' gap={8} ai="flex-start">
						<SongSkeleton />
						<SongSkeleton />
						<SongSkeleton />
					</Flex>
					<Flex width='100%' d='column' gap={8} ai="flex-start">
						<SongSkeleton />
						<SongSkeleton />
						<SongSkeleton />
					</Flex>
					<Flex width='100%' d='column' gap={8} ai="flex-start">
						<SongSkeleton />
						<SongSkeleton />
						<SongSkeleton />
					</Flex>
				</Flex>
			</Flex>
			<Flex d='column' ai="flex-start" gap={8} width='100%'>
				<SkeletonShape width='100px' height='25px' radius="6px" />
				<Flex gap={14} width='100%'>
					<PlaylistSkeleton />
					<PlaylistSkeleton />
					<PlaylistSkeleton />
					<PlaylistSkeleton />
					<PlaylistSkeleton />
					<PlaylistSkeleton />
				</Flex>
			</Flex>
		</Flex>
	</Flex>
}
