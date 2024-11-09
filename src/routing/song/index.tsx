import { useState } from 'react';
import { Database } from '../../database';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';
import { TSong } from '../../entities/song/model/types';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { PlaylistPageContent } from '../playlist/PlaylistPageContent';

export const SongPage = () => {
    const [song, setSong] = useState<TSong | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const name = `${song?.name ?? ''} - Single`;

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
                setError(null);
                Database.Songs.getSongByUid(id)
                    .then((song) => {
                        console.log(song);
                        setSong(song);
                        setLoading(false);
                        if (!song) {
                            setError('Not found!');
                        }
                    })
                    .catch((err) => setError(err));
            }
        },
    });

    const handleLike = () => {
        // Add your like logic here
    };

    return (
        <PlaylistPageContent
            playlist={null}
            isLoadingEditing={false}
            authors={song?.authors}
            loading={loading}
            imageUrl={song?.cover}
            imageColors={song?.imageColors}
            error={error}
            queue={queue}
            name={name}
            isOwner={false}
            currentPlaylistSongs={null}
            isEditing={false}
            handleRemoveSong={function (song: TSong): void {
                throw new Error('Function not implemented.');
            }}
        />
    );
};
