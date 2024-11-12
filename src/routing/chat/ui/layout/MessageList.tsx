import { getSendStatus } from '../../../../entities/chat/lib/getSendStatus';
import { TCache, TMessage } from '../../../../entities/chat/model/types';
import { TUser } from '../../../../entities/user/model/types';
import { MessageItem } from '../message/MessageItem';
import { SystemMessageItemStyled } from './styles';

type Props = {
    chatId: string;
    messages: TMessage[];
    participants: string[];
    currentUser: TUser | null;
    isSystemMessage: boolean;
    cache: TCache;
    handleSeenMessage: (messageId: string) => void;
};

export const MessageList = ({
    chatId,
    messages,
    participants,
    currentUser,
    cache,
    handleSeenMessage,
    isSystemMessage,
}: Props) => {
    if (!currentUser) return null;

    return (
        <>
            {messages.map((message, i) => {
                const isMine = message.sender === currentUser?.uid;
                const sendStatus = getSendStatus(message, participants);

                const isNotSeen = !message.seenBy?.includes(
                    currentUser?.uid ?? ''
                );
                if (isSystemMessage) {
                    return (
                        <SystemMessageItemStyled key={message.id}>
                            {message.message}
                        </SystemMessageItemStyled>
                    );
                }

                return (
                    <MessageItem
                        sendStatus={sendStatus}
                        chatId={chatId}
                        isFirst={i === 0}
                        cache={cache}
                        key={message.id}
                        isPrevByTheSameSender={i !== messages.length - 1}
                        message={message}
                        isMine={isMine}
                        isNotSeen={!!isNotSeen}
                        onSeen={handleSeenMessage}
                    />
                );
            })}
        </>
    );
};
