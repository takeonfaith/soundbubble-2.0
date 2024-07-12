import { TSong } from '@song/model/types';
import { PlaneSongList } from '../planeList';
import { SongsVerticalListStyled, Title, Titles } from './styles';

type Props = {
    songs: TSong[];
    listName: string | null;
    listIcon: string | undefined;
    listUrl: string | null;
};

export const VerticalSongsList = (props: Props) => {
    return (
        <SongsVerticalListStyled>
            {!!props.songs.length && (
                <Titles>
                    <Title></Title>
                    <Title>Name</Title>
                    <Title>Author</Title>
                    <Title>Listenings</Title>
                </Titles>
            )}
            <PlaneSongList {...props} />
        </SongsVerticalListStyled>
    );
};
