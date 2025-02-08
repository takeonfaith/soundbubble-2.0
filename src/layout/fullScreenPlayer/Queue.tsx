import { TQueue } from '../../entities/song/model/types';
import { PlaneSongList } from '../../entities/song/ui/planeList';
import { Divider } from '../../shared/components/divider';
import { QueueOrigin } from './QueueOrigin';
import { QueueStyled } from './styles';

type Props = { queue: TQueue | null; onClick: () => void };

export const Queue = ({ queue, onClick }: Props) => {
    return (
        <QueueStyled>
            <QueueOrigin onClick={onClick} queue={queue} />
            <Divider />
            <PlaneSongList queue={queue} />
        </QueueStyled>
    );
};
