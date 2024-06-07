import { useState } from "react"
import { userModel } from "../../entities/user/model"
import { LimitedUser, UserItem } from "../../entities/user/ui"
import { UserCover } from "../../entities/user/ui/UserCover"
import { AddedItemsList } from "../../shared/components/addedItemsList"
import { Button } from "../../shared/components/button"
import { DefaultButton } from "../../shared/components/button/DefaultButton"
import { CheckIcon } from "../../shared/components/checkIcon"
import { Flex } from "../../shared/components/flex"
import { Input } from "../../shared/components/input"
import { THint } from "../searchWithHints/types"
import { BadgeStyled, ButtonWrapper } from "./styles"


type Props = {
	entity: THint | null
}

export const ShareModal = ({ entity }: Props) => {
	const [friends] = userModel.useFriends()
	const [visibleFriends, setVisibleFriends] = useState(friends)
	const [searchValue, setSearchValue] = useState('')
	const [addedFriends, setAddedFriends] = useState<string[]>([])

	const handleClick = (user: LimitedUser, e: Evt<'a'>) => {
		e.preventDefault()
		const isChosen = addedFriends.find(friend => friend === user.uid)
		if (isChosen) {
			setAddedFriends(prev => prev.filter(id => id !== user.uid))
		} else {
			setAddedFriends(prev => [...prev, user.uid])
			if (searchValue.length !== 0) {
				setSearchValue('')
				setVisibleFriends(friends)
			}
		}
	}

	const handleDeselectAll = () => {
		setVisibleFriends(friends)
		setAddedFriends([])
		setSearchValue('')
	}

	const handleShare = () => {
		console.log(entity);
	}

	return (
		<Flex d="column" height="600px" width="100%" padding="0 25px">
			<AddedItemsList
				inputPlaceholder={"Search for friends..."}
				added={addedFriends}
				allItems={friends}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				itemImage={(user) => <UserCover color={'grey'} src={user.photoURL} size={'18px'} isAuthor={user.isAuthor} />}
				itemName={(user) => user.displayName}
				setAdded={setAddedFriends}
				setVisibleItems={setVisibleFriends}
			/>
			<Flex jc="flex-end" width="100%">
				{addedFriends.length > 0 && <Button onClick={handleDeselectAll} $height="25px" $width="90px" style={{ fontSize: '0.8rem', opacity: '0.7' }}>Deselect all</Button>}
			</Flex>
			<Flex d="column" width="100%">
				{visibleFriends.map(user => {
					const checked = !!addedFriends.find(friend => friend === user.uid)
					return <UserItem showLastSeen as="button" onClick={handleClick} orientation="horizontal" user={user} key={user.uid} >
						<CheckIcon checked={checked} />
					</UserItem>
				})}
			</Flex>
			<ButtonWrapper className={addedFriends.length > 0 ? 'open' : ''}>
				<Input placeholder="Your Message" />
				<DefaultButton appearance='primary' onClick={handleShare}>
					Send
					<BadgeStyled>{addedFriends.length}</BadgeStyled>
				</DefaultButton>
			</ButtonWrapper>
		</Flex >
	)
}