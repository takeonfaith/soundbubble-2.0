import { Timestamp } from 'firebase/firestore';
import getUID from '../../../shared/funcs/getUID';
import { TUser } from '../model/types';

type UserProps = Partial<TUser>;

export const createUserObject = (props: UserProps): TUser => ({
    uid: getUID(),
    imageColors: [],
    photoURL: '',
    isAuthor: false,
    displayName: 'Test User',
    isVerified: true,
    online: 0,
    lastSongPlayed: '',
    addedPlaylists: [],
    addedAuthors: [],
    addedSongs: [],
    regDate: Timestamp.now(),
    ownPlaylists: [],
    lastQueue: {
        image: '',
        name: '',
        songsList: [],
        source: '',
    },
    numberOfListenersPerMonth: 0,
    subscribers: 0,
    ...props,
});
