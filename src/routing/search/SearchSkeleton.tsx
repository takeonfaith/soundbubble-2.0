import { SongSkeleton } from '../../entities/song/ui/Skeleton'
import { Flex } from '../../shared/components/flex'

export const SearchSkeleton = () => {
	return (
		<Flex gap={6} width="100%" height="100%" d="column" style={{ maxWidth: '650px', margin: '20px auto' }}>
			<SongSkeleton />
			<SongSkeleton />
			<SongSkeleton />
			<SongSkeleton />
			<SongSkeleton />
			<SongSkeleton />
			<SongSkeleton />
			<SongSkeleton />
			<SongSkeleton />
			<SongSkeleton />
			<SongSkeleton />
			<SongSkeleton />
			<SongSkeleton />
		</Flex>
	)
}
