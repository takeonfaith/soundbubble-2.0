import { PlaylistItem } from '../../entities/playlist/ui';
import { songModel } from '../../entities/song/model';
import { TQueueStore } from '../../entities/song/model/types';
import { PlaneSongList } from '../../entities/song/ui/planeList';
import { TUser } from '../../entities/user/model/types';
import { UserItem } from '../../entities/user/ui';
import { Divider } from '../../shared/components/divider';
import getUID from '../../shared/funcs/getUID';
import { QueueStyled } from './styles';

type UserProps = {
    uid?: string;
    displayName?: string | null;
    photoURL?: string | null;
    imageColors?: string[];
    isAuthor?: boolean;
};

const createUser = ({
    uid,
    displayName,
    photoURL,
    imageColors,
    isAuthor,
}: UserProps): TUser => ({
    uid: uid ?? getUID(),
    imageColors: imageColors ?? [],
    photoURL: photoURL ?? 'https://via.placeholder.com/150',
    isAuthor: isAuthor ?? false,
    displayName: displayName ?? 'Test User',
    isVerified: true,
    online: 0,
    lastSongPlayed: '',
    addedPlaylists: [],
    addedAuthors: [],
    addedSongs: [],
    ownPlaylists: [],
    lastQueue: {
        image: '',
        name: '',
        songsList: [],
        source: '',
    },
    numberOfListenersPerMonth: 0,
    subscribers: 0,
});

type Props = { queue: TQueueStore };

const QueueOrigin = ({ queue }: Props) => {
    if (queue.url?.includes('author')) {
        const uid = queue.url.split('/author/').pop();

        return (
            <UserItem
                onClick={() => songModel.fullscreen.close()}
                orientation="horizontal"
                user={createUser({
                    uid,
                    displayName: queue.name,
                    photoURL: queue.image,
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
