import styled from 'styled-components';

const NoMessagesTextStyled = styled.div`
    position: absolute;
    top: calc(50% - 60px);
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.6;
    padding: 8px 12px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.hover};
    font-size: 0.9rem;
    font-weight: 300;
`;

export const NoMessagesText = () => {
    return <NoMessagesTextStyled>Chat is empty</NoMessagesTextStyled>;
};
