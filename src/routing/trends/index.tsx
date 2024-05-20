import { IconSearch } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { SearchSuggestions, Songs, Users } from '../../database/sections'
import { TSong } from '../../entities/song/model/types'
import { VerticalSongsList } from '../../entities/song/ui/verticalList'
import { TUser } from '../../entities/user/model/types'
import { UserItem } from '../../entities/user/ui'
import { HintItem } from '../../features/searchWithHints/HintItem'
import { THint } from '../../features/searchWithHints/types'
import { Flex } from '../../shared/components/flex'
import { ENTITIES_ICONS } from '../../shared/constants/icons'
import { TrendBox, TrendsPageStyled } from './styles'

export const TrendsPage = () => {
	const [topSearches, setTopSearches] = useState<(THint | null)[]>([])
	const [topSongs, setTopSongs] = useState<TSong[]>([])
	const [topAuthorsByListenings, setTopAuthorsByListenings] = useState<TUser[]>([])

	useEffect(() => {
		SearchSuggestions.getTopSearches().then((topSearches) => {
			setTopSearches(topSearches)
		})
		Songs.getTopSongs().then((topSongs) => {
			setTopSongs(topSongs)
		})
		Users.getTopAuthorsByListenings().then((users) => {
			console.log(users);

			setTopAuthorsByListenings(users)
		})
	}, [])


	return (
		<TrendsPageStyled>
			<TrendBox>
				<Flex className='title' jc="space-between" width='100%'>
					<h3>Trending Searches</h3>
					<IconSearch />
				</Flex>
				<Flex d='column' gap={4} ai="flex-start" width='100%'>
					{topSearches.map((item) => {
						if (!item) return
						return <HintItem index={1} item={item} key={'id' in item ? item.id : item.uid} handleSubmitSuggestion={() => null} />
					})}
				</Flex>
			</TrendBox>
			<TrendBox>
				<Flex className='title' jc="space-between" width='100%'>
					<h3>Top songs</h3>
					{ENTITIES_ICONS.song}
				</Flex>
				<Flex d='column' gap={4} ai="flex-start" width='100%'>
					<VerticalSongsList songs={topSongs} listName={null} listIcon={undefined} listUrl={null} />
				</Flex>
			</TrendBox>
			<TrendBox>
				<Flex className='title' jc="space-between" width='100%'>
					<h3>Top authors</h3>
					{ENTITIES_ICONS.author}
				</Flex>
				<Flex d='column' gap={4} ai="flex-start" width='100%'>
					{topAuthorsByListenings.map((author) => {
						return <UserItem orientation='horizontal' user={author} key={author.uid} />
					})}
				</Flex>
			</TrendBox>
		</TrendsPageStyled>
	)
}
