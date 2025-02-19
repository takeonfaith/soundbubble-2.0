import { styled } from 'styled-components';

export const ChatSearchStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 2px 20px;
    padding-bottom: 10px;
`;

export const DesktopWrapperStyled = styled.div`
    display: block;
    position: sticky;
    top: 0;
    z-index: 10;
    background: ${({ theme }) => theme.colors.pageBackground};
    padding-top: 20px;

    h2 {
        font-weight: 400;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const ListOfChats = styled.div`
    min-width: 380px;
    max-width: 380px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.pageBackground};
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    overflow-y: auto;

    @media (max-width: 768px) {
        width: 100%;
        max-width: none;
        overflow-y: hidden;
        display: none;

        &.no-chat {
            display: flex;
        }
    }
`;

export const ChatListStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0 20px;
    padding-bottom: 20px;
    gap: 4px;
`;
