import { forwardRef, LegacyRef } from 'react';
import { SongState, TLyric } from '../../entities/song/model/types';
import { Lyric } from './styles';

type Props = {
    lyric: TLyric;
    state: SongState | null;
    currentLyricIndex: number;
    index: number;
    shouldCalculateLyrics: boolean;
    noKaraoke: boolean;
    handleClickLyrics: (startTime: number | 'undefined') => () => void;
};

export const LyricItem = forwardRef(
    (
        {
            lyric,
            noKaraoke,
            index,
            currentLyricIndex,
            shouldCalculateLyrics,
            handleClickLyrics,
        }: Props,
        ref: LegacyRef<HTMLDivElement>
    ) => {
        const isCurrent = index === currentLyricIndex;

        const farFromCurrent =
            index + 1 < currentLyricIndex || index - 1 > currentLyricIndex;

        const className = noKaraoke
            ? 'ordinary'
            : isCurrent
            ? 'current'
            : farFromCurrent
            ? 'farFromCurrent'
            : '';

        return (
            <Lyric
                ref={
                    shouldCalculateLyrics
                        ? isCurrent && !noKaraoke
                            ? ref
                            : undefined
                        : undefined
                }
                className={`lyric-item ${className}`}
                key={lyric.text + index}
                onClick={handleClickLyrics(lyric.startTime)}
            >
                {lyric.text}
            </Lyric>
        );
    }
);
