import { Flex } from '../../../shared/components/flex'
import { SkeletonShape } from '../../../shared/components/skeleton'
import { SONG_RADIUS } from '../constants'
import { SongSkeletonStyled, HorizontalSongStyled, VerticalSongStyled } from './styles'

export const SongSkeleton = () => {
	return (
		<SongSkeletonStyled>
			<VerticalSongStyled>
				<SkeletonShape width='100%' height='50px' radius='12px'>
					<Flex gap={10} width='100%' padding='8px'>
						<SkeletonShape width='35px' height='35px' radius={SONG_RADIUS} />
						<Flex width='100%' d='column' ai="flex-start" gap={4}>
							<SkeletonShape width='70%' height='14px' />
							<SkeletonShape width='120px' height='10px' />
						</Flex>
					</Flex>
				</SkeletonShape>
			</VerticalSongStyled>
			<HorizontalSongStyled>
				<SkeletonShape width='100%' height='46px' radius='10px'>
					<Flex width='100%' gap={20} padding='6px'>
						<SkeletonShape width='35px' height='35px' radius='6px' />
						<SkeletonShape width='25%' height='18px' radius='6px' />
						<SkeletonShape width='25%' height='18px' radius='6px' />
						<SkeletonShape width='20%' height='18px' radius='6px' />
						<SkeletonShape width='18%' height='18px' radius='6px' />
					</Flex>
				</SkeletonShape>
			</HorizontalSongStyled>
		</SongSkeletonStyled>
	)
}
