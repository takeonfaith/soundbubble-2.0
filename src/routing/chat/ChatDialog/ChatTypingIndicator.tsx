import React from 'react'
import { Flex } from '../../../shared/components/flex'
import { Subtext } from '../../../shared/components/subtext'
import { TypingIndicator } from '../../../shared/components/typingIndicator'
import { TUser } from '../../../entities/user/model/types'

type Props = {
	typing: TUser[]
	isGroupChat: boolean
	children: React.ReactNode
}

export const ChatTypingIndicator = ({ typing, isGroupChat, children }: Props) => {
	if (isGroupChat && typing.length > 0) {
		return <Flex gap={8}>
			<Subtext>{typing.map((u, i) => (i !== 0 ? ', ' : '') + u?.displayName)} typing</Subtext>
			<TypingIndicator isTyping />
		</Flex>
	}

	if (typing.length > 0) {
		return (
			<Flex gap={8}>
				<Subtext>
					Typing
				</Subtext>
				<TypingIndicator isTyping />
			</Flex>
		)
	}

	return children
}