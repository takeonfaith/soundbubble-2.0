import { IconArrowUp, IconCirclePlus } from '@tabler/icons-react';
import { Button } from '../../../shared/components/button';
import { ChatInput, ChatInputArea, SendButton } from './styles';
import { useRef, useState } from 'react';
import { chatModel } from '../../../entities/chat/model';
import { createMessageObject } from '../../../entities/chat/lib/createMessageObject';
import { userModel } from '../../../entities/user/model';

export const ChatBottom = () => {
    const { currentChatId } = chatModel.useChats();
    const [currentUser] = userModel.useUser();

    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChangeValue = (e: Evt<'input'>) => {
        setValue(e.currentTarget.value);
    };

    const handleSendMessage = () => {
        if (value.trim().length === 0 || !currentUser?.uid) return;
        if (currentChatId) {
            const message = createMessageObject(currentUser?.uid, {
                message: value,
            });

            chatModel.events.sendMessage({ chatId: currentChatId, message });
        }
        setValue('');
        inputRef.current?.focus();
    };

    return (
        <ChatInputArea>
            <Button $width="40px" style={{ minWidth: '40px' }}>
                <IconCirclePlus />
            </Button>
            <ChatInput
                ref={inputRef}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSendMessage();
                    }
                }}
                placeholder="Type something"
                value={value}
                onChange={handleChangeValue}
            />
            {value.length !== 0 && (
                <SendButton
                    $height="35px"
                    onClick={handleSendMessage}
                    className="primary"
                >
                    <IconArrowUp size={23} />
                </SendButton>
            )}
        </ChatInputArea>
    );
};
