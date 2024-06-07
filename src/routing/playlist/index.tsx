import { playlistModel } from '../../entities/playlist/model';
import { PlaylistCover } from '../../entities/playlist/ui/PlaylistCover';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { Authors } from '../../shared/components/authors';
import { Flex } from '../../shared/components/flex';
import { PageTop } from '../../shared/components/pageTop';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { BottomButtons } from '../author/BottomButtons';
import { SkeletonLoading } from './Skeleton';
import { PlaylistPageSongs, PlaylistPageStyled, PlaylistSimilar } from './styles';

export const PlaylistPage = () => {

	const { currentPlaylist, currentPlaylistSongs, loading } = playlistModel.usePlaylist()
	useUrlParamId({ page: 'playlist', onChangeId: (id) => playlistModel.events.loadPlaylist(id) })

	return (
		<SkeletonPageAnimation color='' loading={loading} skeleton={<SkeletonLoading />}>
			<PlaylistPageStyled>
				<PageTop
					id={''}
					name={currentPlaylist?.name}
					subtitle={<Flex gap={3}>
						{<span style={{ fontSize: '0.8rem', fontWeight: '300', opacity: '0.6' }}>{currentPlaylist?.isAlbum ? "Album" : "Playlist"} / </span>}
						<Authors width='fit-content' authors={currentPlaylist?.authors} />
					</Flex>}
					numberOfListenersPerMonth={currentPlaylist?.listens}
					subscribers={currentPlaylist?.subscribers}
					imageComponent={(
						<PlaylistCover size='200px' isAlbum={currentPlaylist?.isAlbum ?? false} src={currentPlaylist?.image} color={currentPlaylist?.imageColors[0]} />
					)}
					isPrivate={currentPlaylist?.isPrivate}
					colors={currentPlaylist?.imageColors}
					bottomButtons={
						<BottomButtons buttonColor={currentPlaylist?.imageColors[0]} isAdmin={false} isPageOwner={false} queueInfo={{
							listName: currentPlaylist?.name ?? '',
							listIcon: undefined,
							listUrl: `/playlist/${currentPlaylist?.id ?? ''}`,
							songs: currentPlaylistSongs ?? []
						}} />
					}
				/>
				<PlaylistPageSongs>
					<VerticalSongsList songs={currentPlaylistSongs ?? []} listName={currentPlaylist?.name ?? ''} listIcon={currentPlaylist?.image ?? ''} listUrl={`/playlist/${currentPlaylist?.id ?? ''}`} />
				</PlaylistPageSongs>
				<PlaylistSimilar>

				</PlaylistSimilar>
			</PlaylistPageStyled>
		</SkeletonPageAnimation>
	)
}
