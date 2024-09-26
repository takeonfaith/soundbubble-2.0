import { TQueue } from '@song/model/types';
import { PlaneSongList } from '../planeList';
import { SongsVerticalListStyled, Title, Titles } from './styles';

type Props = {
    queue: TQueue;
    showSerialNumber?: boolean;
};

export const VerticalSongsList = (props: Props) => {
    const {
        queue: { songs },
        showSerialNumber,
    } = props;

    return (
        <SongsVerticalListStyled>
            {!!songs.length && (
                <Titles
                    className={props.showSerialNumber ? 'showSerialNumber' : ''}
                >
                    <Title
                        style={{
                            fontSize: '0.9rem',
                            height: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '4px',
                        }}
                    >
                        {showSerialNumber ? '#' : ''}
                    </Title>
                    <Title>Name</Title>
                    <Title>Author</Title>
                    <Title>Listenings</Title>
                </Titles>
            )}
            <PlaneSongList {...props} />
        </SongsVerticalListStyled>
    );
};
