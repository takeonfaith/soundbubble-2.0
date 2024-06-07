import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { TPlaylist } from "../../entities/playlist/model/types";
import { PlaylistItem } from "../../entities/playlist/ui";
import { songModel } from "../../entities/song/model";
import { TSong } from "../../entities/song/model/types";
import { SongItem } from "../../entities/song/ui";
import { TUser } from "../../entities/user/model/types";
import { UserItem } from "../../entities/user/ui";
import { getEntityType } from "../../features/searchWithHints/lib/getEntityType";
import { THint } from "../../features/searchWithHints/types";
import { ENTITIES_ICONS } from "../../shared/constants/icons";
import { useHandleSongPlay } from "../../shared/hooks/useHandleSongPlay";
import { TopAuthorCard } from "./TopAuthorCard";

const SearchResultStyled = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 30px;
  max-width: 650px;
`

type Props = { result: THint[] }

export const SearchResult = ({ result }: Props) => {
	const [params] = useSearchParams();
	const location = useLocation()
	const { currentSong, state, loaded } = songModel.useSong();
	const queue = {
		listName: "Search",
		listIcon: ENTITIES_ICONS.song,
		listUrl: location.pathname,
		songs: result.filter((el) => getEntityType(el) === 'song') as TSong[]
	}
	const { handlePlay } = useHandleSongPlay(queue)

	if (result.length === 0) return null

	const first = result[0]

	const dic: Record<keyof typeof ENTITIES_ICONS, (...props: any[]) => React.ReactNode> = {
		song: (song: TSong, index: number, isCurrent: boolean) => <SongItem
			song={song}
			playing={isCurrent && state === "playing"}
			loading={isCurrent && state === "loading"}
			loaded={isCurrent && loaded}
			index={index}
			onClick={handlePlay} />,
		author: (user: TUser) => <UserItem user={user} orientation="horizontal" />,
		user: (user: TUser) => <UserItem user={user} orientation="horizontal" />,
		playlist: (playlist: TPlaylist) => <PlaylistItem orientation="horizontal" playlist={playlist} />,
		album: (playlist: TPlaylist) => <PlaylistItem orientation="horizontal" playlist={playlist} />
	}

	const isAuthor = 'isAuthor' in first && first.isAuthor && params.get('type') === 'author'

	return <SearchResultStyled>
		{!isAuthor && <h3 style={{ fontWeight: 300, marginBottom: '10px' }}>Result</h3>}
		{isAuthor && <TopAuthorCard author={first} />}
		{result.map((item, index) => {
			const type = getEntityType(item)
			if (isAuthor && index === 0) return null

			if (type === 'song') {
				const isCurrent = (item as TSong).id === currentSong?.id;

				return dic[type](item as TSong, index, isCurrent)
			}

			return dic[type](item)
		})}
	</SearchResultStyled>
}
