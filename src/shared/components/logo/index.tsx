import LogoImage from 'shared/assets/Logo3.svg';
import { LogoStyled, LogoText, LogoWrapper } from './styles';

type Props = {
    short?: boolean;
    size?: string;
    appLike?: boolean;
};

export const Logo = ({ size, appLike, short = false }: Props) => {
    return (
        <LogoWrapper size={size} className={`logo ${appLike ? 'appLike' : ''}`}>
            <LogoStyled
                size={size}
                src={LogoImage}
                className={`logo`}
                alt="Logo"
            />{' '}
            {!short && <LogoText to={'/discover'}>Soundbubble</LogoText>}
        </LogoWrapper>
    );
};
