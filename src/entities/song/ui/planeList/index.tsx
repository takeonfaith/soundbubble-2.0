import React from 'react';
import { SongItem } from '..';
import { useSongPlay } from '../../hooks/useSongPlay';
import { TQueue, TSong } from '../../model/types';

type Props = {
    queue: TQueue | null;
    showSerialNumber?: number;
    isEditing?: boolean;
    children?: React.ReactNode;
    onClick?: (item: TSong, e: Evt<'div'>) => void;
    onRemove?: (song: TSong) => void;
    leftContent?: (song: TSong) => React.ReactNode;
};

export const PlaneSongList = (props: Props) => {
    const songProps = useSongPlay(props);
    const { queue, children, leftContent } = props;

    if (!queue) return null;

    const { songs } = queue;

    return (
        <>
            {songs.map((song, index) => {
                return (
                    <SongItem
                        index={index}
                        key={song.id + index}
                        song={song}
                        playing={songProps.getPlaying(song)}
                        loading={songProps.getLoading(song)}
                        leftContent={leftContent?.(song)}
                        {...songProps}
                    >
                        {children}
                    </SongItem>
                );
            })}
        </>
    );
};
