import { forwardRef, LegacyRef } from 'react';
import { TLyric } from '../../entities/song/model/types';
import { Lyric } from './styles';
import { SLOW_SONGS_FACTOR } from '../../shared/constants';

type Props = {
    lyric: TLyric;
    nextLyric: TLyric;
    currentTime: number;
    index: number;
    currentLyricIndex: number;
    noKaraoke: boolean;
    isSlowVersion: boolean;
    shouldCalculateLyrics: boolean;
    handleClickLyrics: (startTime: number | string) => () => void;
};

export const LyricLoading = forwardRef(
    (
        {
            currentTime,
            lyric,
            nextLyric,
            index,
            currentLyricIndex,
            noKaraoke,
            isSlowVersion,
            handleClickLyrics,
            shouldCalculateLyrics,
        }: Props,
        ref: LegacyRef<HTMLDivElement>
    ) => {
        const nextStartTime =
            nextLyric?.startTime !== 'undefined'
                ? (nextLyric?.startTime as number)
                : 0;
        const startTime =
            lyric?.startTime !== 'undefined' ? lyric?.startTime : 0;
        const isCurrent = index === currentLyricIndex;
        const duration = isSlowVersion
            ? (nextStartTime - startTime) / SLOW_SONGS_FACTOR
            : nextStartTime - startTime;
        const percent = isCurrent
            ? ((currentTime % (index === 0 ? nextStartTime : startTime)) /
                  duration) *
              100
            : 0;

        const farFromCurrent =
            index + 1 < currentLyricIndex || index - 1 > currentLyricIndex;

        const className = noKaraoke
            ? 'ordinary'
            : isCurrent
            ? 'current'
            : farFromCurrent
            ? 'farFromCurrent'
            : '';

        if (noKaraoke) return null;

        return (
            <Lyric
                className={className}
                ref={
                    shouldCalculateLyrics
                        ? isCurrent && !noKaraoke
                            ? ref
                            : undefined
                        : undefined
                }
                onClick={handleClickLyrics(startTime)}
            >
                <div
                    className="outer"
                    style={{
                        padding: '4px',
                        background: '#ffffff2e',
                        width: '200px',
                        borderRadius: '10px',
                    }}
                >
                    <div
                        className="progress"
                        style={{
                            width: `${percent}%`,
                            height: '10px',
                            background: '#fff',
                            transition: '0.1s width linear',
                            borderRadius: '10px',
                        }}
                    ></div>
                </div>
            </Lyric>
        );
    }
);
