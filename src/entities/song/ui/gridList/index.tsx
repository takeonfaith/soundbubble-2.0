import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { SongItem } from '..';
import { ArrowButton } from '../../../../shared/components/horizontalList/styles';
import { useScrollList } from '../../../../shared/components/horizontalList/useScrollList';
import { useHandleSongPlay } from '../../../../shared/hooks/useHandleSongPlay';
import { songModel } from '../../model';
import { TSong } from '../../model/types';
import { GridSongListStyled, GridWrapper } from './styles';
import useCurrentDevice from '../../../../shared/hooks/useCurrentDevice';

type Props = {
    songs: TSong[];
    listName: string | null;
    listIcon: string | undefined;
    listUrl: string | null;
    children?: (songs: TSong[]) => React.ReactNode;
};

export const GridSongList = (props: Props) => {
    const { songs, children } = props;
    const { currentSong, state, loaded } = songModel.useSong();
    const { handlePlay } = useHandleSongPlay(props);
    const { isMobile } = useCurrentDevice();
    const maxGridRows = isMobile ? 4 : 3;
    const items = children?.(songs) ?? (
        <>
            {songs.map((song, index) => {
                const isCurrent = song.id === currentSong?.id;

                return (
                    <SongItem
                        onClick={handlePlay}
                        index={index}
                        key={song.id + index}
                        song={song}
                        playing={isCurrent && state === 'playing'}
                        loading={isCurrent && state === 'loading'}
                        loaded={isCurrent && loaded}
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
