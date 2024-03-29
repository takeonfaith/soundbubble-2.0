import { Flex } from '../../../shared/components/flex'
import { SkeletonShape } from '../../../shared/components/skeleton'
import { SongSkeletonStyled, HorizontalSongStyled, VerticalSongStyled } from './styles'

export const SongSkeleton = () => {
	return (
		<SongSkeletonStyled>
			<VerticalSongStyled>
				<SkeletonShape width='100%' height='55px'>
					<Flex gap={14} width='100%' padding='8px'>
						<SkeletonShape width='40px' height='40px' radius='6px' />
						<Flex width='100%' d='column' ai="flex-start" gap={4}>
							<SkeletonShape width='70%' height='14px' />
							<SkeletonShape width='120px' height='10px' />
						</Flex>
					</Flex>
				</SkeletonShape>
			</VerticalSongStyled>
			<HorizontalSongStyled>
				<Flex width='100%' gap={20}>
					<SkeletonShape width='35px' height='35px' radius='6px' />
					<SkeletonShape width='90%' height='20px' radius='6px' />
				</Flex>
			</HorizontalSongStyled>
		</SongSkeletonStyled>
	)
}
