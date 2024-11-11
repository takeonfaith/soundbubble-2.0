import { THeavyMedia, TMessage } from '../model/types';

export const getHeavyMediaIdsFromMessages = (
    messages: TMessage[]
): THeavyMedia => {
    return messages.reduce(
        (acc, message) => {
            acc.songIds.push(...message.attachedSongs);
            acc.playlistIds.push(...message.attachedAlbums);
            acc.userIds.push(...message.attachedAuthors);
            return acc;
        },
        { songIds: [], playlistIds: [], userIds: [] } as THeavyMedia
    );
};
