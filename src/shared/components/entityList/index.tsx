import { TEntity } from '../../../entities/search/model/types';
import { TQueue } from '../../../entities/song/model/types';
import { getEntityItem } from './entityMap';

type Props = {
    entities: TEntity[];
    queue: Omit<TQueue, 'songs'>;
};

export const EntityList = ({ entities, queue }: Props) => {
    return (
        <>
            {entities.map((item) => {
                return getEntityItem(item, queue);
            })}
        </>
    );
};
