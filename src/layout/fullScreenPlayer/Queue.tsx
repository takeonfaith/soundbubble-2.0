import { TQueue } from '../../entities/song/model/types';
import { PlaneSongList } from '../../entities/song/ui/planeList';
import { Divider } from '../../shared/components/divider';
import { QueueOrigin } from './QueueOrigin';
import { QueueStyled } from './styles';

type Props = { queue: TQueue | null };

export const Queue = ({ queue }: Props) => {
    return (
        <QueueStyled>
            <QueueOrigin queue={queue} />
            <Divider />
            <PlaneSongList queue={queue} />
        </QueueStyled>
    );
};
