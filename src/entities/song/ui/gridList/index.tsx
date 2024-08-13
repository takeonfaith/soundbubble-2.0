import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { SongItem } from '..';
import { ArrowButton } from '../../../../shared/components/horizontalList/styles';
import { useScrollList } from '../../../../shared/components/horizontalList/useScrollList';
import { useHandleSongPlay } from '../../../../shared/hooks/useHandleSongPlay';
import { songModel } from '../../model';
import { TSong } from '../../model/types';
import { GridSongListStyled, GridWrapper } from './styles';

type Props = {
    songs: TSong[];
    listName: string | null;
    listIcon: string | undefined;
    listUrl: string | null;
};

export const GridSongList = (props: Props) => {
    const { songs } = props;
    const { currentSong, state, loaded } = songModel.useSong();
    const { handlePlay } = useHandleSongPlay(props);
    const children = (
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
    } = useScrollList({ children });

    return (
        <GridWrapper className={className}>
            <ArrowButton className="left" onClick={handleScrollLeft}>
                <IconArrowLeft />
            </ArrowButton>
            <GridSongListStyled className='grid-list' onScroll={handleScroll} ref={scrollElementRef}>
                {children}
            </GridSongListStyled>
            <ArrowButton className="right" onClick={handleScrollRight}>
                <IconArrowRight />
            </ArrowButton>
        </GridWrapper>
    );
};
