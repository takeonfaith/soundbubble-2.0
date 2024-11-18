import { getSendStatus } from '../../../../entities/chat/lib/getSendStatus';
import { TCache, TMessage } from '../../../../entities/chat/model/types';
import { TUser } from '../../../../entities/user/model/types';
import { MessageItem } from '../message/MessageItem';

type Props = {
    chatId: string;
    messages: TMessage[];
    participants: string[];
    currentUser: TUser | null;
    cache: TCache;
    handleSeenMessage: (messageId: string) => void;
};

export const MessageList = ({
    chatId,
    messages,
    currentUser,
    cache,
    handleSeenMessage,
}: Props) => {
    if (!currentUser) return null;

    return (
        <>
            {messages.map((message, i) => {
                const isMine = message.sender === currentUser?.uid;
                const sendStatus = getSendStatus(message);

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
                        onSeen={handleSeenMessage}
                    />
                );
            })}
        </>
    );
};
