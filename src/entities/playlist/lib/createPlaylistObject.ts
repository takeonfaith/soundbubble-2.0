import getUID from '../../../shared/funcs/getUID';
import { TUser } from '../../user/model/types';
import { TUploadPlaylist } from '../model/types';

type Props = {
    name: string;
    authors: TUser[];
    image?: File | null;
    imageColors?: string[];
    songs?: string[];
    isAlbum?: boolean;
};

export const createPlaylistObject = ({
    name,
    image,
    imageColors,
    authors,
    songs,
    isAlbum,
}: Props): TUploadPlaylist => {
    return {
        id: getUID(),
        name,
        image: image ?? null,
        songs: songs ?? [],
        imageColors: imageColors ?? [],
        authors: authors.map((data) => ({
            displayName: data?.displayName,
            uid: data?.uid,
            photoURL: data?.photoURL,
        })),
        isAlbum: isAlbum ?? false,
        isPrivate: false,
        listens: 0,
        subscribers: 0,
        creationDate: new Date().toString(),
    };
};
