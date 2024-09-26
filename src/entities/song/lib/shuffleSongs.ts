import { TSong } from '../model/types';

export const shuffleSongs = (songs: TSong[]): TSong[] => {
    const shuffledSongs = songs.slice();

    for (let i = shuffledSongs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledSongs[i], shuffledSongs[j]] = [
            shuffledSongs[j],
            shuffledSongs[i],
        ];
    }

    return shuffledSongs;
};
