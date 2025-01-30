import { TQueue, TSong } from '@song/model/types';
import { PlaneSongList } from '../planeList';
import { Title, Titles } from './styles';

type Props = {
    queue: TQueue;
    showSerialNumber?: number;
    isEditing?: boolean;
    onRemove?: (song: TSong) => void;
};

export const VerticalSongsList = (props: Props) => {
    const {
        queue: { songs },
        showSerialNumber,
        isEditing,
    } = props;

    return (
        <>
            {!!songs.length && (
                <Titles
                    className={`titles ${
                        showSerialNumber || isEditing ? 'showSerialNumber' : ''
                    } `}
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
        </>
    );
};
