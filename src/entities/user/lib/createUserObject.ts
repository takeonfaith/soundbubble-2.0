import getUID from '../../../shared/funcs/getUID';
import { TUser } from '../model/types';

type UserProps = Partial<TUser>;

export const createUserObject = ({
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
