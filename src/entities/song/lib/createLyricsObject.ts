import { TLyric } from '../model/types';

export const createLyricsObject = (lyrics: string): TLyric[] | null => {
    if (lyrics.length === 0) return null;

    return lyrics.split('\n').map((line) => {
        return {
            text: line.trim(),
            startTime: 'undefined',
        };
    });
};
