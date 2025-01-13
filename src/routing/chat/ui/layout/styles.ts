import { styled } from 'styled-components';
import { LastMessageSentTimeStyled } from '../../../../entities/chat/ui/styles';
import { Button } from '../../../../shared/components/button';
import { Textarea } from '../../../../shared/components/textarea';
import { MAX_CHAT_WIDTH } from '../../constants';

export const MessageWrapper = styled.div`
    height: 100%;
    padding-bottom: 4px;
`;

export const MessageSender = styled.div`
    font-size: 0.7rem;
    margin-left: 10px;
    color: ${({ theme }) => theme.scheme.grey.text};
    font-weight: 300;
`;

export const MessageStyled = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    position: relative;

    &.new {
        animation: messageAppear 0.15s forwards;

        @keyframes messageAppear {
            0% {
                opacity: 0;
                top: 30px;
            }
            100% {
                opacity: 1;
                top: 0px;
            }
        }
    }
`;

export const MessageBubble = styled.div<{
    $isFirst: boolean;
}>`
    padding: 8px 10px;
    padding-bottom: 4px;
    border-radius: 8px 10px 10px 12px;
    background-color: ${({ theme }) => theme.colors.pageBackground};
    max-width: 500px;
    font-size: 0.9rem;
    font-weight: 200;
    position: relative;
    display: flex;
    align-items: flex-end;
    gap: 10px;
    box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.input};

    &::before {
        content: '';
        display: block;
        position: absolute;
        background: ${({ theme }) => theme.colors.pageBackground};
        width: 23px;
        height: 20px;
        bottom: 2px;
        left: -15px;
        border-radius: 100%;
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        background: ${({ theme }) => theme.colors.chatBackground};
        width: 15px;
        height: 21px;
        border-radius: 0 0 20px 0;
        bottom: 2px;
        left: -15px;
    }

    &.mine {
        background-color: ${({ theme }) => theme.scheme.blue.mild};
        box-shadow: none;
        border-radius: 10px 8px 12px 10px;

        &::before {
            background-color: ${({ theme }) => theme.scheme.blue.mild};
            transform: scaleX(-1) scaleY(-1);
            left: auto;
            right: -15px;
        }

        &::after {
            transform: scaleX(-1);
            left: auto;
            right: -15px;
        }
    }

    &.isPrevByTheSameSender {
        border-radius: ${({ $isFirst }) =>
            $isFirst ? '14px 14px 14px 8px' : '8px 14px 14px 8px'};

        &.mine {
            border-radius: ${({ $isFirst }) =>
                $isFirst ? '14px 14px 8px 14px' : '14px 8px 8px 14px'};
        }

        &::before {
            display: none;
        }
    }

    @media (max-width: 768px) {
        max-width: 88%;

        &::after {
            width: 12px;
            left: -12px;
        }

        &::before {
            width: 14px;
            height: 14px;
            left: -9px;
        }
    }
`;

export const DateAndSeenIcon = styled(LastMessageSentTimeStyled)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 8px;
    font-size: 0.65rem;
    white-space: nowrap;

    svg {
        width: 14px;
        height: 14px;
    }
`;

export const ChatDialogStyled = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    @media (max-width: 768px) {
        height: 100dvh;
    }
`;

export const ChatMessagesStyled = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.chatBackground};
    background-image: radial-gradient(
        ${({ theme }) => theme.colors.skeleton} 1px,
        transparent 0
    );
    background-size: 20px 20px;
    background-position: 0px 0px;
    align-items: center;
    position: relative;

    &.shift-to-first-unread {
        scroll-padding-bottom: 60vh;
    }
`;

export const ChatInputArea = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 90%;
    min-height: 60px;
    max-width: ${MAX_CHAT_WIDTH};
    max-height: 100px;
    position: absolute;
    bottom: 0;
    overflow: hidden;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors.pageBackground};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 14px;
    z-index: 10;
    padding: 0 10px;

    &:focus-visible {
        outline: 1px solid ${({ theme }) => theme.scheme.blue.main};
    }

    @media (max-width: 768px) {
        width: 95%;
    }
`;

export const ChatButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

export const ChatTextArea = styled(Textarea)`
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 18px 0px;
    background: ${({ theme }) => theme.colors.pageBackground};

    &:focus {
        outline: none;
    }
`;

export const MessagesDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border-radius: 30px;
    font-weight: 300;
    font-size: 0.8rem;
    position: sticky;
    top: 0px;
    z-index: 2;
    background: ${({ theme }) => theme.colors.pageBackground};
    border: 1px solid ${({ theme }) => theme.colors.border};
    margin: 10px auto;
    width: 160px;

    @media (max-width: 768px) {
        font-size: 0.7rem;
        width: 120px;
        background: ${({ theme }) => theme.colors.pageBackground};
        padding: 4px;
        color: ${({ theme }) => theme.scheme.grey.text};
    }
`;

export const MessageSecton = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    padding: 6px 28px;
    width: 100%;
    max-width: calc(${MAX_CHAT_WIDTH} + 56px);

    &.mine {
        flex-direction: row-reverse;
    }

    @media (max-width: 1350px) {
        padding: 6px 30px;
    }

    @media (max-width: 768px) {
        padding: 6px 10px;
    }
`;

export const AvatarSection = styled.div`
    width: 50px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transition: 0.2s;
`;

export const MessagesSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: fit-content;

    &.system {
        width: 100%;
    }

    &.mine {
        align-items: flex-end;
    }
`;

export const UserAvatarStyled = styled.div`
    position: sticky;
    bottom: 80px;
    transition: 0.2s;
`;

export const ChatHeaderStyled = styled.div`
    height: 65px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    @media (hover: hover) {
        &:hover {
            background: ${({ theme }) => theme.colors.hover};
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
        padding: 0 16px;
    }
`;

export const SystemMessageItemStyled = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 10px 20px;
    font-weight: 300;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.greyText2};
    z-index: 1;

    &.bg {
        background: ${({ theme }) => theme.colors.pageBackground};
    }
`;

export const AttachmentStyled = styled.div`
    width: 320px;
`;

export const SendButton = styled(Button)`
    min-width: 35px;
    width: 85px;
    height: 35px;
    color: #fff;
`;

export const ScrollToChatBottomButton = styled(Button)`
    position: fixed;
    bottom: 180px;
    right: 4%;
    width: 40px;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.pageBackground};
    border: 1px solid ${({ theme }) => theme.colors.border};

    span {
        position: absolute;
        transform: translate(14px, 14px);
    }
`;
