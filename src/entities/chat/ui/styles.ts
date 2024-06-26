import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const ChatItemStyled = styled(Link)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 25px;
    padding-right: 8px;
    gap: 12px;
    background: ${({ theme }) => theme.colors.pageBackground2};

    &.selected {
        background: ${({ theme }) => theme.colors.blue.transparent};
    }

    &:hover {
        filter: brightness(0.95);
    }
`;

export const ChatTitle = styled.div`
    font-size: 0.9rem;
    font-weight: 300;
`;

export const LastMessageStyled = styled.span`
    height: 32px;
    overflow: hidden;
    display: inline-flex;
    flex-wrap: wrap;
    column-gap: 6px;
    font-size: 0.8rem;
    font-weight: 200;
    opacity: 0.5;
`;

export const LastMessageAttachmentStyled = styled.div`
    display: inline-flex;
    height: fit-content;
    align-items: center;
    gap: 2px;

    svg {
        display: inline;
        width: 14px;
        height: 14px;
    }
`;

export const SenderStyled = styled.span`
    font-size: 0.8rem;
    font-weight: 200;
    opacity: 0.5;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-flex;
    margin-right: 4px;
`;

export const LastMessageSentTimeStyled = styled.div`
    font-size: 0.7rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 4px;

    span {
        opacity: 0.4;
    }

    svg {
        width: 16px;
        height: 16px;
        opacity: 1;
        color: ${({ theme }) => theme.colors.blue.main};
    }
`;
