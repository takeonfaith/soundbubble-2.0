import { songModel } from "@song/model";
import { useEffect, useRef } from "react";
import { TQueueStore } from "../../entities/song/model/types";
import { PlaneSongList } from "../../entities/song/ui/planeList";
import { Flex } from "../../shared/components/flex";
import { Lyric, LyricLoadingAnimation, Lyrics, RightSide } from "./styles";
import { TRightSideType } from "./types";
import { UserItem } from "../../entities/user/ui";
import { Divider } from "../../shared/components/divider";

const Queue = ({ queue }: { queue: TQueueStore }) => {
  return <Flex d="column" gap={4} width="100%">

    {queue.url?.includes('author') ? <UserItem onClick={() => songModel.fullscreen.close()} orientation="horizontal" user={{
      displayName: queue.name ?? '',
      uid: queue.url.split('/author/')[1],
      imageColors: [],
      photoURL: queue.icon as string,
      isVerified: true,
      isAuthor: true
    }} /> : null}
    <Divider />
    <PlaneSongList songs={queue.songs} listName={null} listIcon={undefined} listUrl={null} />
  </Flex>
}

type Props = {
  type: TRightSideType
}

export const FullScreenPlayerRightSide = ({ type }: Props) => {
  // const { songs, name, icon, url } = songModel.queue.useQueue();
  const { state } = songModel.useSong();
  const { lyrics, currentLyricIndex } = songModel.lyrics.useLyrics();
  const { queue } = songModel.queue.useQueue()
  const currentLyricRef = useRef<HTMLDivElement>(null);

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
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentLyricIndex]);

  if (type === null) return null

  return (
    <RightSide className={type !== null ? 'visible' : ''}>
      {type === 'lyrics' && <Lyrics>
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
              ref={isCurrent && !noKaraoke ? currentLyricRef : undefined}
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
      </Lyrics>}
      {type === 'queue' && <Queue queue={queue} />}
    </RightSide>
  );
};
