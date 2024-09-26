import { getHumanDuration } from '../../entities/song/lib/getHumanDuration';
import { TSong } from '../../entities/song/model/types';

export const getTotalSongsDuration = (songs: TSong[] | null) => {
    const totalDuration = songs?.reduce((acc, song) => {
        acc += song.duration;
        return acc;
    }, 0);

    return getHumanDuration(totalDuration, 'text');
};
