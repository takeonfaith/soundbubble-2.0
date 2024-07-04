import { songModel } from '../../entities/song/model';
import { TQueueStore } from '../../entities/song/model/types';
import { PlaneSongList } from '../../entities/song/ui/planeList';
import { TUser } from '../../entities/user/model/types';
import { UserItem } from '../../entities/user/ui';
import { Divider } from '../../shared/components/divider';
import getUID from '../../shared/funcs/getUID';
import { QueueStyled } from './styles';

const createUser = ({
    displayName,
    photoURL,
    imageColors,
    isAuthor,
}: {
    displayName?: string | null;
    photoURL?: string;
    imageColors?: string[];
    isAuthor?: boolean;
}): TUser => ({
    uid: getUID(),
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

export const Queue = ({ queue }: Props) => {
    return (
        <QueueStyled>
            {queue.url?.includes('author') ? (
                <UserItem
                    onClick={() => songModel.fullscreen.close()}
                    orientation="horizontal"
                    user={createUser({ displayName: queue.name })}
                />
            ) : null}
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
