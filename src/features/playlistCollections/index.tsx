import { PlaylistCollectionItemStyled } from './styles';

type Props = {
    title: string;
    background: string;
};

export const PlaylistCollectionItem = ({ title, background }: Props) => {
    return (
        <PlaylistCollectionItemStyled to="/" background={background}>
            <h3>{title}</h3>
            <span className='emoji'>💸</span>
        </PlaylistCollectionItemStyled>
    );
};
