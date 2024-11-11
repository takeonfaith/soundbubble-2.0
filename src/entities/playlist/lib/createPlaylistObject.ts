import getUID from '../../../shared/funcs/getUID';
import { TAuthor } from '../../song/model/types';
import { TPlaylist, TUploadPlaylist } from '../model/types';

export const createPlaylistObject = (
    author: TAuthor,
    props: Partial<TUploadPlaylist>
): TPlaylist => ({
    id: getUID(),
    name: '',
    image: '',
    songs: [],
    imageColors: [],
    authors: [author],
    authorIds: [author.uid],
    isAlbum: false,
    isPrivate: false,
    listens: 0,
    subscribers: 0,
    creationDate: new Date().toString(),
    ownerId: author.uid,
    lastEditedTime: Date.now(),
    ...props,
});
