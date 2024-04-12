import { IconArrowsShuffle } from '@tabler/icons-react';
import { playlistModel } from '../../entities/playlist/model';
import { PlaylistCover } from '../../entities/playlist/ui/PlaylistCover';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { Authors } from '../../shared/components/authors';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { PageTop } from '../../shared/components/pageTop';
import { PlayPauseIcon } from '../../shared/components/playPauseIcon';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { ButtonsStyled } from '../author/styles';
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
						<PlaylistCover size='200px' src={currentPlaylist?.image} color={currentPlaylist?.imageColors[0]} />
					)}
					colors={currentPlaylist?.imageColors}
					bottomButtons={
						<ButtonsStyled>
							<DefaultButton loading={false} onClick={() => null} style={{ background: '#262626', color: currentPlaylist?.imageColors?.[1] }}><PlayPauseIcon size={20} loading={false} playling={false} />Play</DefaultButton>
							<DefaultButton loading={false} onClick={() => null} style={{ background: '#262626', color: currentPlaylist?.imageColors?.[1] }}><IconArrowsShuffle size={20} />Shuffle</DefaultButton>
						</ButtonsStyled>
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
