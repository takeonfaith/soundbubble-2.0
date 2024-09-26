import getUID from '../../../shared/funcs/getUID';
import { TPlaylist } from '../model/types';

export const createPlaylistObject = (props: Partial<TPlaylist>): TPlaylist => {
    return {
        id: getUID(),
        name: '',
        image: '',
        songs: [],
        imageColors: [],
        authors: [],
        isAlbum: false,
        isPrivate: false,
        listens: 0,
        subscribers: 0,
        creationDate: new Date().toString(),
        ...props,
    };
};
