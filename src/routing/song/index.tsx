import { useState } from 'react';
import { Database } from '../../database';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';
import { TSong } from '../../entities/song/model/types';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { PlaylistPageContent } from '../playlist/PlaylistPageContent';
import { createPlaylistObject } from '../../entities/playlist/lib/createPlaylistObject';

export const SongPage = () => {
    const [song, setSong] = useState<TSong | null>(null);
    const [loading, setLoading] = useState(true);
    const name = `${song?.name ?? ''} - Single`;
    const playlist = song
        ? createPlaylistObject(song?.authors[0], {
              name,
              image: song?.cover,
              songs: song ? [song.id] : [],
              authors: song?.authors,
              authorIds: song?.authors.map((author) => author.uid),
              imageColors: song.imageColors,
              listens: song.listens,
              subscribers: 0,
              id: song.id,
          })
        : null;

    const queue = createQueueObject({
        id: song?.id ?? '',
        songs: song ? [song] : [],
        url: `/song/${song?.id}`,
        name,
        imageUrl: song?.cover ?? '',
    });

    useUrlParamId({
        page: 'song',
        onChangeId: (id) => {
            if (id) {
                setLoading(true);
                Database.Songs.getSongByUid(id)
                    .then((song) => {
                        console.log(song);
                        setSong(song);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        },
    });

    return (
        <PlaylistPageContent
            playlist={playlist}
            isLoadingEditing={false}
            authors={song?.authors}
            loading={loading}
            imageUrl={song?.cover}
            imageColors={song?.imageColors}
            queue={queue}
            name={name}
            isOwner={false}
            currentPlaylistSongs={null}
            isEditing={false}
            handleRemoveSong={() => null}
        />
    );
};
