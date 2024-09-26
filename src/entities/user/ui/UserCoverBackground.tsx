import { styled } from 'styled-components';
import { getBackground } from '../lib/getBackground';

export const ChatBackgroundStyled = styled.div<{
    $background: string;
    $width?: string;
}>`
    width: ${({ $width }) => $width ?? '50px'};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: ${({ $background }) => $background};
    color: #fff;

    font-size: calc(${({ $width }) => $width ?? '50px'} / 3);

    @media (max-width: 768px) {
        width: ${({ $width }) => $width ?? '55px'};
    }
`;

type Props = {
    name: string | undefined | null;
    width?: string;
};

export const UserCoverBackground = ({ name, width }: Props) => {
    if (!name) return null;

    const abbr =
        name?.split(' ').length === 1
            ? name[0].toUpperCase() + name[1].toUpperCase()
            : name
                  ?.split(' ')
                  .map((l) => l[0]?.toUpperCase())
                  .join('');
    const background = getBackground(abbr);

    return (
        <ChatBackgroundStyled $background={background} $width={width}>
            {abbr}
        </ChatBackgroundStyled>
    );
};
