import { IconArrowsShuffle } from '@tabler/icons-react'
import { PlaylistItem } from '../../entities/playlist/ui'
import { songModel } from '../../entities/song/model'
import { GridSongList } from '../../entities/song/ui/gridList'
import { userModel } from '../../entities/user/model'
import { UserCover } from '../../entities/user/ui/UserCover'
import { DefaultButton } from '../../shared/components/button/DefaultButton'
import { Flex } from '../../shared/components/flex'
import { PageTop } from '../../shared/components/pageTop'
import { PlayPauseIcon } from '../../shared/components/play-pause-icon'
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation'
import { useHandleSongPlay } from '../../shared/hooks/useHandleSongPlay'
import { useUrlParamId } from '../../shared/hooks/useUrlParamId'
import { SimilarAuthors } from './SimilarAuthors'
import { SkeletonLoading } from './Skeleton'
import { AuthorPageStyled, ButtonsStyled, ContentWrapperStyled, SongsStyled } from './styles'

export const AuthorPage = () => {
	const { user, songs, playlists, loading } = userModel.useUserPage()
	const { state } = songModel.useSong()
	const { queue } = songModel.queue.useQueue()

	useUrlParamId({ page: 'author', onChangeId: (id) => userModel.events.loadUserPageFx(id) })
	const queueInfo = {
		listName: user?.displayName ?? 'Author',
		listIcon: user?.photoURL,
		listUrl: `/author/${user?.uid}`,
		songs: songs.slice(0, 9),
	}

	const { handlePlay } = useHandleSongPlay(queueInfo)

	return (
		<SkeletonPageAnimation color={user?.imageColors[0] ?? 'grey'} loading={loading} skeleton={<SkeletonLoading />}>
			<AuthorPageStyled>
				<PageTop
					id={user?.uid}
					name={user?.displayName}
					subtitle={<span style={{ fontWeight: '300', fontSize: '0.8rem', opacity: '0.6' }}>{user?.isAuthor ? "Author" : 'User'}</span>}
					numberOfListenersPerMonth={user?.numberOfListenersPerMonth}
					isVerified={user?.isVerified}
					subscribers={user?.subscribers}
					imageComponent={<UserCover isAuthor={user?.isAuthor} color={user?.imageColors[0]} src={user?.photoURL} size='200px' />}
					colors={user?.imageColors}
					playButtonLoading={false}
					shuffleButtonLoading={false}
					onPlay={() => handlePlay(songs[0], 0)}
					onShuffle={() => null}
					bottomButtons={
						<ButtonsStyled>
							<DefaultButton loading={state === 'loading' && queue.url === queueInfo.listUrl} onClick={() => handlePlay(songs[0], queue.currentSongIndex ?? 0)} style={{ background: '#262626', color: user?.imageColors?.[1] }}><PlayPauseIcon size={20} loading={state === 'loading' && queue.url === queueInfo.listUrl} playling={state === 'playing' && queue.url === queueInfo.listUrl} />Play</DefaultButton>
							<DefaultButton loading={false} onClick={() => null} style={{ background: '#262626', color: user?.imageColors?.[1] }}><IconArrowsShuffle size={20} />Shuffle</DefaultButton>
							{/* <DefaultButton width='95px' style={{ background: user?.imageColors[0] }}><IconHeart size={20}/></DefaultButton> */}
						</ButtonsStyled>
					}
				/>
				<ContentWrapperStyled>
					<SongsStyled>
						<h3>Top songs</h3>
						<GridSongList {...queueInfo} />
					</SongsStyled>
					{playlists.length !== 0 && <SongsStyled>
						<h3>Top Albums</h3>
						<Flex gap={14}>
							{playlists.map((playlist) => <PlaylistItem playlist={playlist} key={playlist.id} />)}
						</Flex>
					</SongsStyled>}
				</ContentWrapperStyled>
				{!loading && <SimilarAuthors songs={songs} currentPageUser={user} />}
			</AuthorPageStyled>
		</SkeletonPageAnimation>
	)
}
