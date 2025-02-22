import { memo } from 'react';
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
    maxSeenAtInCurrentChat: number | null;
    myLastReadAt: number | null;
    handleSeenMessage: (sentTime: number) => void;
};

export const MessageList = memo(
    ({
        chatId,
        messages,
        currentUser,
        cache,
        handleSeenMessage,
        maxSeenAtInCurrentChat,
        myLastReadAt,
    }: Props) => {
        if (!currentUser) return null;

        return (
            <>
                {messages.map((message, i) => {
                    const isMine = message.sender === currentUser?.uid;

                    const sendStatus = getSendStatus(
                        message,
                        isMine,
                        maxSeenAtInCurrentChat,
                        myLastReadAt
                    );

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
    }
);

MessageList.displayName = 'MessageList';
