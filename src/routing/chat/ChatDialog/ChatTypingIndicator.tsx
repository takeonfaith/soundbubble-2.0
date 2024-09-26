import React from 'react';
import { Flex } from '../../../shared/components/flex';
import { Subtext } from '../../../shared/components/subtext';
import { TypingIndicator } from '../../../shared/components/typingIndicator';
import { TUser } from '../../../entities/user/model/types';
import styled from 'styled-components';

const TypingTextStyled = styled(Flex)``;

const TypingText = styled.div`
    font-size: 0.75rem;
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
    if (isGroupChat && typing.length > 0) {
        return (
            <Flex gap={8}>
                <Subtext>
                    {typing.map(
                        (u, i) => (i !== 0 ? ', ' : '') + u?.displayName
                    )}{' '}
                    typing
                </Subtext>
                <TypingIndicator isTyping />
            </Flex>
        );
    }

    if (typing.length > 0) {
        return (
            <TypingTextStyled gap={8}>
                <TypingText>Typing</TypingText>
                <TypingIndicator isTyping />
            </TypingTextStyled>
        );
    }

    return children;
};
