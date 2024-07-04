import { useEffect, useRef, useState } from "react"
import { getSendStatus } from "../../../entities/chat/lib/getSendStatus"
import { TChatData, TMessage } from "../../../entities/chat/model/types"
import { TPlaylist } from "../../../entities/playlist/model/types"
import { PlaylistItem } from "../../../entities/playlist/ui"
import { TSong } from "../../../entities/song/model/types"
import { SongItem } from "../../../entities/song/ui"
import { TUser } from "../../../entities/user/model/types"
import { UserItem } from "../../../entities/user/ui"
import { getEntityType } from "../../../features/searchWithHints/lib/getEntityType"
import { popupModel } from "../../../layout/popup/model"
import { Flex } from "../../../shared/components/flex"
import { MessageContextMenu } from "./MessageContextMenu"
import { MessageSentStatus } from "./MessageSentStatus"
import { AttachmentStyled, DateAndSeenIcon, MessageBubble, MessageSender, MessageStyled, MessageWrapper } from "./styles"
import { IconExclamationCircle } from "@tabler/icons-react"
import { MessageText } from "./MessageText"
import { TEntity } from "../../../entities/search/model/types"

type Props = {
	message: TMessage
	isMine: boolean
	chatData: TChatData
	isPrevByTheSameSender: boolean
	isFirst: boolean
	isNotSeen: boolean
	onSeen: (messageId: string) => void
}

const renderAttachments = (attachments: string[], chatData: TChatData) => {
	return attachments.map(s => {
		const entity = chatData[s] as TEntity

		if (!entity) return null

		const type = getEntityType(entity)
		if (type === 'user' || type === 'author') {
			return <UserItem user={entity as TUser} key={s} orientation="horizontal" />
		}

		if (type === 'album' || type === 'playlist') {
			return <PlaylistItem playlist={entity as TPlaylist} key={s} orientation="horizontal" />
		}

		return <SongItem song={entity as TSong} key={s} playing={false} loading={false} loaded={false} index={0} onClick={() => null} />
	})

}

export const MessageItem = ({ message, isNotSeen, isMine, chatData, isPrevByTheSameSender, isFirst, onSeen }: Props) => {
	const sendStatus = getSendStatus(message)
	const showAttachments = message.attachedSongs.length || message.attachedAlbums.length || message.attachedAuthors.length
	const [isVisible, setIsVisible] = useState(false);
	const targetRef = useRef(null);

	useEffect(() => {
		const el = targetRef.current
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{
				root: null, // viewport
				rootMargin: '0px', // no margin
				threshold: 0.5, // 50% of target visible
			}
		);

		if (el) {
			observer.observe(el);
		}

		// Clean up the observer
		return () => {
			if (el) {
				observer.unobserve(el);
			}
		};

	}, []);

	useEffect(() => {
		if (isVisible && isNotSeen) {
			onSeen(message.id)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible, isNotSeen])


	const handleContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation()
		e.preventDefault()
		popupModel.events.open({
			content: <MessageContextMenu />,
			height: 96,
			e
		})
	}


	return <MessageStyled ref={targetRef}>
		{!isMine && isFirst && <MessageSender>{(chatData[message.sender] as TUser)?.displayName}</MessageSender>}
		<Flex width="100%" gap={10}>
			<MessageBubble $isFirst={isFirst} $background={isMine ? (chatData[message.sender] as TUser)?.imageColors[1] : ''} onContextMenu={handleContextMenu} className={(isMine ? 'mine' : '') + (isPrevByTheSameSender ? ' isPrevByTheSameSender' : "")}>
				<Flex d="column" ai="flex-start">
					<MessageWrapper>
						<MessageText message={message.message} />
						{!!showAttachments && <AttachmentStyled>
							{renderAttachments(message.attachedSongs, chatData)}
							{renderAttachments(message.attachedAlbums, chatData)}
							{renderAttachments(message.attachedAuthors, chatData)}
						</AttachmentStyled>}
					</MessageWrapper>
				</Flex>
				<DateAndSeenIcon>
					<span>
						{new Date(message.sentTime).toLocaleTimeString('ru-RU', { 'hour': '2-digit', minute: '2-digit' })}
					</span>
					<MessageSentStatus isMine={isMine} sendStatus={sendStatus} />
				</DateAndSeenIcon>
			</MessageBubble>
			{sendStatus === 'Error' && <IconExclamationCircle color="red" size={20} />}
		</Flex>
	</MessageStyled>
}