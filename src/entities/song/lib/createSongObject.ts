import getUID from '../../../shared/funcs/getUID';
import { TSong } from '../model/types';

export const createSongObject = (songFields: Partial<TSong>): TSong => {
    return {
        name: '',
        id: getUID(),
        releaseDate: new Date().toString(),
        songSrc: '',
        lyrics: [],
        listens: 0,
        cover: '',
        authors: [],
        imageColors: [],
        duration: 0,
        moods: [],
        langs: [],
        genres: [],
        ...songFields,
    };
};
