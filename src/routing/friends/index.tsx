import { IconMessage2, IconSearch } from '@tabler/icons-react'
import styled from 'styled-components'
import { userModel } from '../../entities/user/model'
import { UserItem } from '../../entities/user/ui'
import { Header } from '../../layout/header'
import { Button } from '../../shared/components/button'
import { DefaultButton } from '../../shared/components/button/DefaultButton'
import { Divider } from '../../shared/components/divider'
import { Flex } from '../../shared/components/flex'
import { Input } from '../../shared/components/input'
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation'
import { SkeletonLoading } from '../author/Skeleton'

const FriendsStyled = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const ContentStyled = styled.div`
  padding: 20px 50px;
  height: 100%;
  width: 100%;
`

export const FriendsPage = () => {
	const [friends, loading] = userModel.useFriends()

	return (
		<FriendsStyled>
			<Header />
			<SkeletonPageAnimation loading={loading} skeleton={<SkeletonLoading />}>
				<ContentStyled>
					<Flex gap={10} width='100%'>
						<Input placeholder='Search for friends...' icon={<IconSearch />} />
						<DefaultButton width='200px' appearance='primary'>Create group chat</DefaultButton>
					</Flex>
					<Divider />
					{friends.map((friend) => {
						return <UserItem showLastSeen user={friend} key={friend.uid} orientation='horizontal' >
							<Button $width='40px'>
								<IconMessage2 />
							</Button>
						</UserItem>
					})}
				</ContentStyled>
			</SkeletonPageAnimation>
		</FriendsStyled>
	)
}
