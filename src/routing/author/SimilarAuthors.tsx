import { useRef } from 'react'
import { TSong } from '../../entities/song/model/types'
import { userModel } from '../../entities/user/model'
import { Flex } from '../../shared/components/flex'
import { useIsOnScreen } from '../../shared/hooks/useIsOnScreen'
import { SimilarAuthorsStyled } from './styles'
import { TUser } from '../../entities/user/model/types'
import { UserItem } from '../../entities/user/ui'
import { UserSkeleton } from '../../entities/user/ui/Skeleton'

type Props = {
	songs: TSong[]
	currentPageUser: TUser | null
}

export const SimilarAuthors = ({ songs, currentPageUser }: Props) => {
	const ref = useRef<HTMLDivElement>(null)
	const { similarAuthors, similarAuthorsLoading } = userModel.useUserPage()
	useIsOnScreen(ref, () => {
		if (similarAuthors.length === 0) {
			userModel.events.loadSimilarAuthors(songs)
		}
	})

	return (
		<SimilarAuthorsStyled ref={ref}>
			<h3>Similar Authors</h3>
			<Flex gap={30}>
				{similarAuthors.map((author) => {
					if (author.uid === currentPageUser?.uid) return null

					return <UserItem user={author} key={author.uid} />
				})}
				{similarAuthorsLoading && <>
					<UserSkeleton />
					<UserSkeleton />
					<UserSkeleton />
					<UserSkeleton />
					<UserSkeleton />
					<UserSkeleton />
				</>}
			</Flex>
		</SimilarAuthorsStyled>
	)
}