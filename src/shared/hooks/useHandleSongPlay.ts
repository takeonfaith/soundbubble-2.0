import { useCallback } from 'react';
import { songModel } from '../../entities/song/model';
import { TQueueStore, TSong } from '../../entities/song/model/types';

type Props = {
    listName: string | null;
    listIcon: string | undefined;
    listUrl: string | null;
    songs: TSong[];
};

export const useHandleSongPlay = (props: Props) => {
    const { play } = songModel.useControls();

    const handlePlay = useCallback(
        (song: TSong, index: number) => {
            
            const queue: TQueueStore | undefined = {
                currentSongIndex: index,
                name: props.listName,
                image: props.listIcon,
                url: props.listUrl,
                songs: props.songs,
                shuffle: false,
            };

            play(song, queue);
        },
        [play, props.listIcon, props.listName, props.listUrl, props.songs]
    );

    return { handlePlay };
};
