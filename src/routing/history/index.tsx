import { IconHistory } from "@tabler/icons-react"
import styled from "styled-components"
import { historyModel } from "../../entities/history/model"
import { SongSkeleton } from "../../entities/song/ui/Skeleton"
import { VerticalSongsList } from "../../entities/song/ui/verticalList"
import { Header } from "../../layout/header"
import { Flex } from "../../shared/components/flex"
import { SkeletonPageAnimation } from "../../shared/components/skeleton/SkeletonPageAnimation"

const SkeletonLoading = () => {
	return <Flex d="column" width="100%" height="100%" padding="20px 50px">
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
}

const HistoryPageStyled = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
`

const ContentStyled = styled.div`
   padding: 20px 50px;
   height: 100%;
   width: 100%;
`

export const HistoryPage = () => {
	const [history, loading] = historyModel.useHistory()

	historyModel.useLoadHistory()

	return (
		<HistoryPageStyled>
			<Header />
			<SkeletonPageAnimation color="" loading={loading} skeleton={<SkeletonLoading />}>
				<ContentStyled>
					<VerticalSongsList songs={history} listName={"History"} listIcon={<IconHistory />} listUrl={'/history'} />
				</ContentStyled>
			</SkeletonPageAnimation>
		</HistoryPageStyled>
	)
}
