import { IconLink } from '@tabler/icons-react';
import styled from 'styled-components';
import { isValidHttpUrl } from '../../../shared/funcs/isValidHttpUrl';

const MessageLinkStyled = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: ${({ theme }) => theme.scheme.blue.main};
    padding: 4px;
    background: ${({ theme }) => theme.scheme.blue.transparent2};
    border-radius: 6px;
`;

type Props = {
    message: string;
};

export const MessageText = ({ message }: Props) => {
    const splittedMessage = message.split(' ');

    return (
        <>
            {splittedMessage.map((word, i) => {
                if (isValidHttpUrl(word)) {
                    return (
                        <MessageLinkStyled
                            href={word}
                            target="_blank"
                            rel="noreferrer"
                            key={word + i}
                        >
                            <IconLink size={18} />
                            {word.slice(8, word.length)}
                        </MessageLinkStyled>
                    );
                }

                return word + ' ';
            })}
        </>
    );
};
