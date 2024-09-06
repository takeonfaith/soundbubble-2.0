import { PlaylistItem } from '../../entities/playlist/ui';
import { songModel } from '../../entities/song/model';
import { TQueueStore } from '../../entities/song/model/types';
import { PlaneSongList } from '../../entities/song/ui/planeList';
import { createUserObject } from '../../entities/user/lib/createUserObject';
import { UserItem } from '../../entities/user/ui';
import { Divider } from '../../shared/components/divider';
import { QueueStyled } from './styles';

type Props = { queue: TQueueStore };

const QueueOrigin = ({ queue }: Props) => {
    if (queue.url?.includes('author')) {
        const uid = queue.url.split('/author/').pop();

        return (
            <UserItem
                onClick={() => songModel.fullscreen.close()}
                orientation="horizontal"
                user={createUserObject({
                    uid,
                    displayName: queue.name ?? undefined,
                    photoURL: queue.image ?? undefined,
                    isAuthor: true,
                })}
            />
        );
    }

    if (queue.url?.includes('playlist')) {
        return (
            <PlaylistItem
                orientation="horizontal"
                playlist={{
                    name: queue.name ?? '',
                    songs: [],
                    subscribers: 0,
                    listens: 0,
                    isPrivate: false,
                    isAlbum: false,
                    imageColors: [],
                    image: queue.image ?? '',
                    id: queue.url.split('/playlist/').at(-1) ?? '',
                    creationDate: '',
                    authors: [],
                }}
            />
        );
    }
};

export const Queue = ({ queue }: Props) => {
    return (
        <QueueStyled>
            <QueueOrigin queue={queue} />
            <Divider />
            <PlaneSongList
                songs={queue.songs}
                listName={null}
                listIcon={undefined}
                listUrl={null}
            />
        </QueueStyled>
    );
};
