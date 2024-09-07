import { TLyric } from '../model/types';

export const createLyricsObject = (lyrics: string): TLyric[] => {
    return lyrics.split('\n').map((line) => {
        return {
            text: line.trim(),
            startTime: 'undefined',
        };
    });
};
