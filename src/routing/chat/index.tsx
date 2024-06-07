import { IconMessagePlus, IconSearch } from "@tabler/icons-react"
import { Route, Routes } from "react-router"
import styled, { useTheme } from "styled-components"
import { chatModel } from "../../entities/chat/model"
import { ChatItem } from "../../entities/chat/ui/ChatItem"
import { ChatItemSkeleton } from "../../entities/chat/ui/ChatItemSkeleton"
import { DefaultButton } from "../../shared/components/button/DefaultButton"
import { Flex } from "../../shared/components/flex"
import { Input } from "../../shared/components/input"
import { SkeletonPageAnimation } from "../../shared/components/skeleton/SkeletonPageAnimation"
import { ChatDialog } from "./ChatDialog/ChatDialog"

const ChatPageStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;


const ListOfChats = styled.div`
	min-width: 380px;
	max-width: 380px;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	background: ${({ theme }) => theme.colors.pageBackground2};
	border-right: 1px solid ${({ theme }) => theme.colors.border};
`

const ChatContent = styled.div`
	width: 100%;
`

const SkeletonLoading = () => {
	return <Flex d="column" gap={16} padding="16px 0">
		<ChatItemSkeleton />
		<ChatItemSkeleton />
		<ChatItemSkeleton />
		<ChatItemSkeleton />
		<ChatItemSkeleton />
		<ChatItemSkeleton />
		<ChatItemSkeleton />
		<ChatItemSkeleton />
		<ChatItemSkeleton />
		<ChatItemSkeleton />
		<ChatItemSkeleton />
		<ChatItemSkeleton />
		<ChatItemSkeleton />
		<ChatItemSkeleton />
		<ChatItemSkeleton />
		<ChatItemSkeleton />
	</Flex>
}

export const ChatPage = () => {
	const { chats, loadingChats, chatData, lastMessage, loadingChatData, unreadCounts, currentChatId } = chatModel.useChats()
	const theme = useTheme()
	chatModel.useLoadChats()

	return (
		<ChatPageStyled>
			<ListOfChats>
				<Flex padding="20px 25px 10px 25px" width="100%" gap={10}>
					<Input icon={<IconSearch />} placeholder="Search for chats..." />
					<DefaultButton appearance='ghost' width="48px"><IconMessagePlus size={20} /></DefaultButton>
				</Flex>
				<SkeletonPageAnimation background={theme.colors.pageBackground2} loading={loadingChats || loadingChatData} skeleton={<SkeletonLoading />}>
					<Flex d="column" gap={0} width="100%" height="100%" padding="10px 0">
						{chats.map((chat) => {
							return <>
								<ChatItem isSelected={currentChatId === chat.id} unreadCount={unreadCounts[chat.id]} lastMessage={lastMessage[chat.id]} chatData={chatData} chat={chat} key={chat.id} />
							</>
						})}
					</Flex>
				</SkeletonPageAnimation>
			</ListOfChats>
			<ChatContent>
				<Routes>
					<Route path=":id" element={<ChatDialog />} />
				</Routes>
			</ChatContent>
		</ChatPageStyled>
	)
}
