import { TChat, THeavyMedia } from '../model/types';

export const getHeavyMediaIdsFromChats = (chats: TChat[]): THeavyMedia => {
    return chats.reduce(
        (acc, chat) => {
            if (chat.lastMessage) {
                acc.songIds.push(...chat.lastMessage.attachedSongs);
                acc.playlistIds.push(...chat.lastMessage.attachedAlbums);
                acc.userIds.push(...chat.lastMessage.attachedAuthors);
            }

            acc.userIds.push(...chat.participants);

            return acc;
        },
        { songIds: [], playlistIds: [], userIds: [] } as THeavyMedia
    );
};
