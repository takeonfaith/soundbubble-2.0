import React from 'react';
import styled from 'styled-components';
import { TUser } from '../../../../entities/user/model/types';
import { Flex } from '../../../../shared/components/flex';
import { TypingIndicator } from '../../../../shared/components/typingIndicator';

const TypingTextStyled = styled(Flex)``;

const TypingText = styled.div`
    font-size: 0.75rem;
    font-weight: 300;
    color: ${({ theme }) => theme.scheme.blue.action};
`;

type Props = {
    typing: TUser[];
    isGroupChat: boolean;
    children: React.ReactNode;
};

export const ChatTypingIndicator = ({
    typing,
    isGroupChat,
    children,
}: Props) => {
    if (typing.length > 0) {
        if (isGroupChat) {
            return (
                <Flex gap={8}>
                    <TypingText>
                        {typing.map(
                            (u, i) => (i !== 0 ? ', ' : '') + u?.displayName
                        )}{' '}
                        typing
                    </TypingText>
                    <TypingIndicator isTyping />
                </Flex>
            );
        }

        return (
            <TypingTextStyled gap={8}>
                <TypingText>Typing</TypingText>
                <TypingIndicator isTyping />
            </TypingTextStyled>
        );
    }

    return children;
};
