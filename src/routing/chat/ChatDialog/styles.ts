import { styled } from 'styled-components';
import { LastMessageSentTimeStyled } from '../../../entities/chat/ui/styles';
import { Input } from '../../../shared/components/input';
import { Button } from '../../../shared/components/button';

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
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`;

export const MessageBubble = styled.div<{
    $isFirst: boolean;
}>`
    padding: 8px 10px;
    padding-bottom: 4px;
    border-radius: 8px 10px 10px 12px;
    background-color: ${({ theme }) => theme.colors.input};
    max-width: 500px;
    font-size: 0.9rem;
    font-weight: 200;
    position: relative;
    display: flex;
    align-items: flex-end;
    gap: 10px;

    &::before {
        content: '';
        display: block;
        position: absolute;
        background: ${({ theme }) => theme.colors.input};
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
        background: ${({ theme }) => theme.colors.pageBackground};
        width: 15px;
        height: 21px;
        border-radius: 0 0 20px 0;
        bottom: 2px;
        left: -15px;
    }

    &.mine {
        background-color: ${({ theme }) => theme.scheme.blue.mild};

        &::before {
            background-color: ${({ theme }) => theme.scheme.blue.mild};
        }
    }

    &.isPrevByTheSameSender {
        border-radius: ${({ $isFirst }) =>
            $isFirst ? '14px 14px 14px 8px' : '8px 14px 14px 8px'};

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
`;

export const ChatInput = styled(Input)`
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 30px;
    padding: 16px;
`;

export const ChatInputArea = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    width: 100%;
    height: 80px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
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
    z-index: 1;
    background: ${({ theme }) => theme.colors.pageBackground2};
    margin: 10px auto;
    width: 160px;

    @media (max-width: 768px) {
        font-size: 0.7rem;
        width: 118px;
        background: ${({ theme }) => theme.colors.pageBackground};
        padding: 4px;
        color: ${({ theme }) => theme.scheme.grey.text};
    }
`;

export const MessageSecton = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    padding: 6px 15px;
    width: 100%;

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
    width: 100%;
`;

export const UserAvatarStyled = styled.div`
    position: sticky;
    bottom: 20px;
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
    opacity: 0.6;
`;

export const AttachmentStyled = styled.div`
    width: 320px;
`;

export const SendButton = styled(Button)`
    min-width: 35px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    color: #fff;
`;

export const ScrollToChatBottomButton = styled(Button)`
    position: fixed;
    bottom: 170px;
    right: 20px;
    width: 40px;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.pageBackground2};

    span {
        position: absolute;
        transform: translate(14px, 14px);
    }
`;
