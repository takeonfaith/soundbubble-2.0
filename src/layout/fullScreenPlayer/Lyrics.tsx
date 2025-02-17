import { useUnit } from 'effector-react';
import { useEffect, useRef } from 'react';
import { songModel } from '../../entities/song/new-model';
import { $currentTime } from '../../entities/song/new-model/current-time';
import {
    lyricsModel,
    userEnabledKaraokeApi,
} from '../../entities/song/new-model/lyrics';
import { $isCurrentSongSlow } from '../../entities/song/new-model/slow-songs';
import { Flex } from '../../shared/components/flex';
import { Loading } from '../../shared/components/loading';
import { SwitchToggle } from '../../shared/components/switchToggle';
import { SLOW_SONGS_FACTOR } from '../../shared/constants';
import { LyricItem } from './LyricItem';
import { LyricLoading } from './LyricLoading';
import { LyricsStyled, ToggleButtonStyled } from './styles';
import { SongState } from '../../entities/song/model/types';

export const Lyrics = () => {
    const currentLyricRef = useRef<HTMLDivElement>(null);
    const [
        lyrics,
        loading,
        currentLyricIndex,
        shouldCalculateLyrics,
        isKaraoke,
        userEnabledKaraoke,
    ] = lyricsModel.useLyrics();
    const { currentSong, state } = songModel.useSong();
    const [currentTime, isSlowVersion] = useUnit([
        $currentTime,
        $isCurrentSongSlow,
    ]);
    const isEnabledKaraoke =
        isKaraoke && userEnabledKaraoke && state === SongState.playing;

    const handleClickLyrics = (startTime: number | string) => {
        return () => {
            if (!isNaN(+startTime)) {
                const time = isSlowVersion
                    ? +startTime / SLOW_SONGS_FACTOR
                    : +startTime;

                songModel.playback.setLastRangeValue(time);
                songModel.lyrics.calculateCurrentLyric(time);
            }
        };
    };

    useEffect(() => {
        if (currentLyricRef.current && isEnabledKaraoke) {
            currentLyricRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        }
    }, [currentLyricIndex, isEnabledKaraoke]);

    useEffect(() => {
        lyricsModel.events.loadLyrics(undefined);
        songModel.lyrics.isLyricsVisibleNowApi.set(true);

        return () => {
            songModel.lyrics.isLyricsVisibleNowApi.set(false);
        };
    }, []);

    //  if (!lyrics) return 'No lyrics available';

    return (
        <LyricsStyled>
            {loading && (
                <Flex width="100%" jc="center" height="100%">
                    <Loading />
                </Flex>
            )}
            {isKaraoke && (
                <ToggleButtonStyled>
                    <SwitchToggle
                        checked={userEnabledKaraoke}
                        onChange={(e) =>
                            userEnabledKaraokeApi.set(e.currentTarget.checked)
                        }
                        primaryColor={currentSong?.imageColors[0]}
                        size="s"
                    />
                    Karaoke
                </ToggleButtonStyled>
            )}
            {lyrics.map((lyric, index) => {
                const isLoading = lyric.text === '@loading';

                if (isLoading) {
                    return (
                        <LyricLoading
                            isSlowVersion={isSlowVersion}
                            currentTime={currentTime}
                            lyric={lyric}
                            nextLyric={lyrics[index + 1]}
                            index={index}
                            currentLyricIndex={currentLyricIndex}
                            noKaraoke={!isEnabledKaraoke}
                            handleClickLyrics={handleClickLyrics}
                            shouldCalculateLyrics={shouldCalculateLyrics}
                        />
                    );
                }

                return (
                    <LyricItem
                        ref={currentLyricRef}
                        lyric={lyric}
                        key={index}
                        state={state}
                        currentLyricIndex={currentLyricIndex}
                        index={index}
                        noKaraoke={!isEnabledKaraoke}
                        shouldCalculateLyrics={shouldCalculateLyrics}
                        handleClickLyrics={handleClickLyrics}
                    />
                );
            })}
        </LyricsStyled>
    );
};
