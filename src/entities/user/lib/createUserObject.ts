import { Timestamp } from 'firebase/firestore';
import getUID from '../../../shared/funcs/getUID';
import { TUser } from '../model/types';

type UserProps = Partial<TUser> & {
    displayName: string;
};

export const createUserObject = (props: UserProps): TUser => ({
    uid: getUID(),
    imageColors: [],
    photoURL: '',
    isAuthor: false,
    isVerified: false,
    online: Date.now(),
    lastSongPlayed: '',
    addedPlaylists: [],
    addedAuthors: [],
    addedSongs: [],
    regDate: Timestamp.now(),
    ownPlaylists: [],
    numberOfListenersPerMonth: 0,
    subscribers: 0,
    ...props,
});
