import { useEffect, useState } from 'react';
import { TSong } from '../../../entities/song/model/types';
import { normalizeString } from '../../../shared/funcs/normalizeString';

export const usePlaylistSearch = (
    searching: {
        isSearching: boolean;
        value: string;
    },
    currentPlaylistSongs: TSong[]
) => {
    const [found, setFound] = useState<TSong[]>([]);

    useEffect(() => {
        if (searching.value.length !== 0) {
            setFound(
                currentPlaylistSongs.filter(({ name }) => {
                    return normalizeString(name).includes(
                        normalizeString(searching.value)
                    );
                })
            );
        }
    }, [currentPlaylistSongs, searching.value]);

    return {
        visible: searching.value.length !== 0 ? found : currentPlaylistSongs,
    };
};
