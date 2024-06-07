import { useEffect, useRef } from 'react';
import { songModel } from '../../entities/song/model';
import { Lyric, LyricLoadingAnimation, LyricsStyled } from './styles';

export const Lyrics = () => {
	const currentLyricRef = useRef<HTMLDivElement>(null);
	const [{ lyrics, currentLyricIndex }, shouldCalculateLyrics] = songModel.lyrics.useLyrics();
	const { state } = songModel.useSong()

	const handleClickLyrics = (startTime: number | string) => {
		return () => {
			if (!isNaN(+startTime)) {
				songModel.playblack.setLastRangeValue(+startTime);
				songModel.lyrics.calculateCurrentLyric(+startTime);
			}
		};
	};

	useEffect(() => {
		if (currentLyricRef.current) {
			currentLyricRef.current.scrollIntoView({
				'behavior': 'smooth',
				block: 'end',
			});
		}
	}, [currentLyricIndex]);

	useEffect(() => {
		songModel.lyrics.setShouldCalculateLyrics(true)

		return () => {
			songModel.lyrics.setShouldCalculateLyrics(false)
		}
	}, [])

	if (!lyrics) return "No lyrics available"

	return <LyricsStyled>
		{lyrics.map((lyric, index) => {
			const noKaraoke = state === "pause" || isNaN(+lyric.startTime);
			const isCurrent = index === currentLyricIndex;
			const farFromCurrent =
				index + 1 < currentLyricIndex || index - 1 > currentLyricIndex;
			const isLoading = lyric.text === "@loading";
			const duration =
				(lyrics[index + 1]?.startTime ?? lyric.startTime) - lyric.startTime;
			const className = noKaraoke
				? "ordinary"
				: isCurrent
					? "current"
					: farFromCurrent
						? "farFromCurrent"
						: "";

			return (
				<Lyric
					ref={shouldCalculateLyrics ? isCurrent && !noKaraoke ? currentLyricRef : undefined : undefined}
					className={className}
					key={lyric.text + index}
					onClick={handleClickLyrics(lyric.startTime)}
				>
					{!isLoading ? (
						lyric.text
					) : (
						<LyricLoadingAnimation
							className={isCurrent && state === 'playing' ? "current" : ""}
							$duration={duration}
						>
							<span></span>
							<span></span>
							<span></span>
						</LyricLoadingAnimation>
					)}
				</Lyric>
			);
		})}
	</LyricsStyled>
}