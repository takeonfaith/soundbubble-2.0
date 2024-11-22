import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { SongItem } from '..';
import { ArrowButton } from '../../../../shared/components/horizontalList/styles';
import { useScrollList } from '../../../../shared/components/horizontalList/useScrollList';
import useCurrentDevice from '../../../../shared/hooks/useCurrentDevice';
import { useSongPlay } from '../../hooks/useSongPlay';
import { TQueue, TSong } from '../../model/types';
import { GridSongListStyled, GridWrapper } from './styles';

type Props = {
    queue: TQueue;
    children?: (songs: TSong[]) => React.ReactNode;
};

export const GridSongList = (props: Props) => {
    const { queue, children } = props;
    const { isMobile } = useCurrentDevice();
    const maxGridRows = isMobile ? 4 : 3;
    const { songs } = queue;
    const songProps = useSongPlay({ queue });
    const items = children?.(songs) ?? (
        <>
            {songs.map((song, index) => {
                return (
                    <SongItem
                        index={index}
                        key={song.id + index}
                        song={song}
                        {...songProps}
                        loading={songProps.getLoading(song)}
                        playing={songProps.getPlaying(song)}
                    />
                );
            })}
        </>
    );

    const {
        scrollElementRef,
        className,
        handleScroll,
        handleScrollLeft,
        handleScrollRight,
    } = useScrollList({ children: items });

    return (
        <GridWrapper className={className}>
            <ArrowButton className="left" onClick={handleScrollLeft}>
                <IconArrowLeft />
            </ArrowButton>
            <GridSongListStyled
                className="grid-list"
                onScroll={handleScroll}
                ref={scrollElementRef}
                columns={isMobile ? Math.ceil(songs.length / maxGridRows) : 3}
                rows={songs.length > maxGridRows ? maxGridRows : songs.length}
            >
                {items}
            </GridSongListStyled>
            <ArrowButton className="right" onClick={handleScrollRight}>
                <IconArrowRight />
            </ArrowButton>
        </GridWrapper>
    );
};
