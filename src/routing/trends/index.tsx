import { IconMicrophone, IconMicrophone2, IconSearch } from '@tabler/icons-react'
import { Flex } from '../../shared/components/flex'
import { TrendBox, TrendsPageStyled } from './styles'

export const TrendsPage = () => {
	return (
		<TrendsPageStyled>
			<TrendBox>
				<Flex jc="space-between" width='100%'>
					<h3>Trending Searches</h3>
					<IconSearch size={18} />
				</Flex>
			</TrendBox>
			<TrendBox>
				<Flex jc="space-between" width='100%'>
					<h3>Top songs</h3>
					<IconMicrophone size={18} />
				</Flex>
			</TrendBox>
			<TrendBox>
				<Flex jc="space-between" width='100%'>
					<h3>Top authors</h3>
					<IconMicrophone2 size={18} />
				</Flex>
			</TrendBox>
		</TrendsPageStyled>
	)
}
