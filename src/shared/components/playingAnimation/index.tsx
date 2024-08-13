import { PlayingAnimationStyled, PlayingAnimationItem } from './styles';

type Props = {
    playing: boolean;
    color: string;
};

export const PlayingAnimation = ({ playing, color }: Props) => {
    return (
        <PlayingAnimationStyled
            $color={color}
            className={`playing-animation ${playing ? 'playing' : ''}`}
        >
            <PlayingAnimationItem />
            <PlayingAnimationItem />
            <PlayingAnimationItem />
        </PlayingAnimationStyled>
    );
};
