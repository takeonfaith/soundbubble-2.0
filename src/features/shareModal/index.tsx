import { userModel } from "../../entities/user/model"
import { UserItem } from "../../entities/user/ui"
import { UserSkeleton } from "../../entities/user/ui/Skeleton"
import { DefaultButton } from "../../shared/components/button/DefaultButton"
import { Flex } from "../../shared/components/flex"
import { SkeletonPageAnimation } from "../../shared/components/skeleton/SkeletonPageAnimation"

const SkeletonLoading = () => {
	return <Flex>
		<UserSkeleton />
		<UserSkeleton />
		<UserSkeleton />
		<UserSkeleton />
		<UserSkeleton />
	</Flex>
}

export const ShareModal = () => {
	const [friends, loading] = userModel.useFriends()
	return (
		<Flex d="column" height="100%" width="100%" gap={10}>
			<SkeletonPageAnimation color="" loading={loading} skeleton={<SkeletonLoading />}>
				{friends.map(user => <UserItem orientation="horizontal" user={user} key={user.uid} />)}
			</SkeletonPageAnimation>
			<DefaultButton appearance='primary' >Send</DefaultButton>
		</Flex>
	)
}