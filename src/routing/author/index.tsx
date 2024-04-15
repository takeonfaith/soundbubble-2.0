import { PlaylistItem } from '../../entities/playlist/ui'
import { GridSongList } from '../../entities/song/ui/gridList'
import { userModel } from '../../entities/user/model'
import { TUser } from '../../entities/user/model/types'
import { UserCover } from '../../entities/user/ui/UserCover'
import { Flex } from '../../shared/components/flex'
import { PageTop } from '../../shared/components/pageTop'
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation'
import { useUrlParamId } from '../../shared/hooks/useUrlParamId'
import { BottomButtons } from './BottomButtons'
import { SimilarAuthors } from './SimilarAuthors'
import { SkeletonLoading } from './Skeleton'
import { AuthorPageStyled, ContentWrapperStyled, SongsStyled } from './styles'

type Props = {
	userData: TUser | null
}

export const AuthorPage = ({ userData }: Props) => {
	const { user, songs, playlists, loading } = userModel.useUserPage()
	const { data } = userModel.useUser()
	const userPageData = userData ?? user

	const [isAuthor, isAdmin, isPageOwner] = [userPageData?.isAuthor ?? false, userPageData?.isAdmin ?? false, (data?.uid === userPageData?.uid) ?? false]

	useUrlParamId({
		page: 'author', onChangeId: (id) => {
			userModel.events.loadUserPageFx(id)
		}
	})

	const queueInfo = {
		listName: userPageData?.displayName ?? 'Author',
		listIcon: userPageData?.photoURL,
		listUrl: `/author/${userPageData?.uid}`,
		songs: songs.slice(0, 9),
	}


	return (
		<SkeletonPageAnimation color={userPageData?.imageColors[0] ?? 'grey'} loading={loading} skeleton={<SkeletonLoading />}>
			<AuthorPageStyled>
				<PageTop
					id={userPageData?.uid}
					name={userPageData?.displayName}
					subtitle={<span style={{ fontWeight: '300', fontSize: '0.8rem', opacity: '0.6' }}>{userPageData?.isAuthor ? "Author" : 'User'}</span>}
					numberOfListenersPerMonth={userPageData?.numberOfListenersPerMonth}
					isVerified={userPageData?.isVerified}
					subscribers={userPageData?.subscribers}
					imageComponent={<UserCover isAuthor={isAuthor} color={userPageData?.imageColors[0]} src={userPageData?.photoURL} size='200px' />}
					colors={userPageData?.imageColors}
					bottomButtons={<BottomButtons user={userPageData} isAdmin={isAdmin} isPageOwner={isPageOwner} queueInfo={queueInfo} />}
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
				{!loading && <SimilarAuthors songs={songs} currentPageUser={userPageData} />}
			</AuthorPageStyled>
		</SkeletonPageAnimation>
	)
}
