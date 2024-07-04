import { IconMessagePlus, IconSearch } from "@tabler/icons-react"
import { Route, Routes } from "react-router"
import styled, { useTheme } from "styled-components"
import { chatModel } from "../../entities/chat/model"
import { ChatItem } from "../../entities/chat/ui/ChatItem"
import { CreateChatModal } from "../../features/createChatModal"
import { modalModel } from "../../layout/modal/model"
import { Button } from "../../shared/components/button"
import { Flex } from "../../shared/components/flex"
import { Input } from "../../shared/components/input"
import { SkeletonPageAnimation } from "../../shared/components/skeleton/SkeletonPageAnimation"
import { ChatDialog } from "./ChatDialog/ChatDialog"
import { ChatsSkeleton } from "./ChatsSkeleton"

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
	background: ${({ theme }) => theme.colors.pageBackground};
	border-right: 1px solid ${({ theme }) => theme.colors.border};
`

const ChatContent = styled.div`
	width: 100%;
`



export const ChatPage = () => {
	const { chats, loadingChats, chatData, lastMessage, loadingChatData, unreadCounts, currentChatId } = chatModel.useChats()
	const theme = useTheme()
	chatModel.useLoadChats()

	const handleCreateChat = () => {
		modalModel.events.open({
			title: 'Create chat with friends',
			content: <CreateChatModal />
		})
	}

	return (
		<ChatPageStyled>
			<ListOfChats>
				<Flex padding="20px 25px 10px 25px" width="100%" gap={10}>
					<Input icon={<IconSearch />} placeholder="Search for chats..." />
					<Button onClick={handleCreateChat} $width="48px"><IconMessagePlus size={20} /></Button>
				</Flex>
				<SkeletonPageAnimation background={theme.colors.pageBackground2} loading={loadingChats || loadingChatData} skeleton={<ChatsSkeleton />}>
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
