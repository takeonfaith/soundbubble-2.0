import { IconPaperclip } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
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
import getUID from '../../../../shared/funcs/getUID';
import { modalModel } from '../../../../layout/modal/model';
import { AttachEntityToChatModal } from './attach/AttachEntityToChatModal';

const AttachmentContextMenuStyled = styled(DefaultContextMenuStyled)`
    gap: 4px;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.pageBackground3};

    button {
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
            console.log({ isTyping, amITyping });

            if (isTyping && !amITyping) {
                chatModel.events.updateIsTyping(true);
            } else if (!isTyping && amITyping) {
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
        popupModel.events.open({
            e,
            content: (
                <AttachmentContextMenuStyled>
                    <Button
                        className="blue"
                        onClick={() =>
                            modalModel.events.open({
                                title: '',
                                content: <AttachEntityToChatModal />,
                                sizeY: 'l',
                            })
                        }
                    >
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
            height: 144,
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
                    Send
                </SendButton>
            </ChatButtons>
        </ChatInputArea>
    );
};
