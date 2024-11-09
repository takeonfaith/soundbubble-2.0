import { IconPaperclip } from '@tabler/icons-react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { ChatButtons, ChatInputArea, ChatTextArea, SendButton } from './styles';
import { createMessageObject } from '../../../../entities/chat/lib/createMessageObject';
import { chatModel } from '../../../../entities/chat/model';
import { userModel } from '../../../../entities/user/model';
import { popupModel } from '../../../../layout/popup/model';
import { Button } from '../../../../shared/components/button';
import { DefaultContextMenuStyled } from '../../../../shared/components/defaultContextMenu';
import { Flex } from '../../../../shared/components/flex';
import { ENTITIES_ICONS } from '../../../../shared/constants/icons';

const AttachmentContextMenuStyled = styled(DefaultContextMenuStyled)`
    padding: 4px;
    gap: 4px;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.pageBackground3};

    button {
        padding: 8px;
        border-radius: 4px;
        gap: 10px;

        svg {
            opacity: 1;
            width: 18px;
            height: 18px;
        }

        &.blue {
            svg {
                color: ${({ theme }) => theme.scheme.blue.action};
            }
        }

        &.red {
            svg {
                color: ${({ theme }) => theme.scheme.red.action};
            }
        }

        &.purple {
            svg {
                color: ${({ theme }) => theme.scheme.purple.action};
            }
        }
    }
`;

export const ChatBottom = () => {
    const { currentChatId } = chatModel.useChats();
    const [currentUser] = userModel.useUser();

    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChangeValue = (value: string) => {
        setValue(value);
    };

    const handleSendMessage = () => {
        if (value.trim().length === 0 || !currentUser?.uid) return;
        if (currentChatId) {
            const message = createMessageObject(currentUser?.uid, {
                message: value,
            });

            chatModel.events.sendMessage({ chatIds: [currentChatId], message });
        }
        setValue('');
        inputRef.current?.focus();
    };

    const handleClickClip = (e: Evt<'btn'>) => {
        e.stopPropagation();
        popupModel.events.open({
            e,
            content: (
                <AttachmentContextMenuStyled>
                    <Button className="blue">
                        {ENTITIES_ICONS.song}
                        Songs
                    </Button>
                    <Button className="red">
                        {ENTITIES_ICONS.album}
                        Album
                    </Button>
                    <Button className="purple">
                        {ENTITIES_ICONS.author}
                        Author
                    </Button>
                </AttachmentContextMenuStyled>
            ),
            height: 136,
            width: 170,
        });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey === false) {
            e.preventDefault();
            handleSendMessage();
        }
    };

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
                    Send
                </SendButton>
            </ChatButtons>
        </ChatInputArea>
    );
};
