import { TChat } from '../../chat/model/types';
import { TPlaylist } from '../../playlist/model/types';
import { TSong } from '../../song/model/types';
import { TUser } from '../../user/model/types';

export type TEntity = TSong | TPlaylist | TUser | TChat;

export type TPlace = 'songs' | 'users' | 'playlists';

export type TSuggestion = {
    place: TPlace;
    rank: number;
    fullName: string;
    uid: string;
    variantsOfName: string[];
};
