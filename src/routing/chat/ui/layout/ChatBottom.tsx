import { IconArrowUp, IconPaperclip } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import { createMessageObject } from '../../../../entities/chat/lib/createMessageObject';
import { chatModel } from '../../../../entities/chat/model';
import { userModel } from '../../../../entities/user/model';
import { modalModel } from '../../../../layout/modal/model';
import { Button } from '../../../../shared/components/button';
import { Flex } from '../../../../shared/components/flex';
import getUID from '../../../../shared/funcs/getUID';
import { AttachEntityToChatModal } from './attach/AttachEntityToChatModal';
import { ChatButtons, ChatInputArea, ChatTextArea, SendButton } from './styles';

export const ChatBottom = () => {
    const [currentChat] = chatModel.useCurrentChat();
    const [, loading] = chatModel.useMessages();
    const [currentUser] = userModel.useUser();
    const [amITyping] = chatModel.useTyping();
    const isInChat = currentUser
        ? currentChat?.participants.includes(currentUser.uid)
        : false;

    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChangeValue = (value: string) => {
        setValue(value);
        const isTyping = value.length > 0;
        if (currentUser) {
            console.log(isTyping, !amITyping);

            if (isTyping && !amITyping) {
                chatModel.events.updateIsTyping(true);
            } else if (!isTyping && amITyping) {
                console.log('');

                chatModel.events.updateIsTyping(false);
            }
        }
    };

    useEffect(() => {
        if (!loading) {
            setValue('');
            inputRef.current?.focus();
        }
    }, [currentChat?.id, loading]);

    const handleSendMessage = () => {
        if (value.trim().length === 0 || !currentUser?.uid) return;
        if (currentChat?.id && isInChat) {
            const id = getUID();
            chatModel.events.sendMessage({
                chats: [currentChat],
                message: () =>
                    createMessageObject({
                        id,
                        sender: currentUser?.uid,
                        participants: currentChat.participants,
                        message: value,
                    }),
            });
            chatModel.events.updateIsTyping(false);
        }
        setValue('');
        inputRef.current?.focus();
    };

    const handleClickClip = (e: Evt<'btn'>) => {
        e.stopPropagation();
        modalModel.events.open({
            title: 'Attach',
            content: <AttachEntityToChatModal />,
            sizeY: 'l',
        });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey === false) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    if (!isInChat) return null;

    return (
        <ChatInputArea
            style={{ height: `${60 + Math.floor(value.length / 50) * 20}px` }}
        >
            <Flex>
                <Button $width="35px" $height="35px" onClick={handleClickClip}>
                    <IconPaperclip size={20} />
                </Button>
            </Flex>
            <ChatTextArea
                disabled={loading}
                ref={inputRef}
                onKeyDown={handleKeyDown}
                placeholder="Type something..."
                value={value}
                onChange={handleChangeValue}
            />
            <ChatButtons>
                <SendButton
                    disabled={value.length === 0}
                    onClick={handleSendMessage}
                    className="primary"
                >
                    <IconArrowUp size={20} />
                </SendButton>
            </ChatButtons>
        </ChatInputArea>
    );
};
