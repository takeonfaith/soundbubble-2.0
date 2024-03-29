import React from 'react'
import { SongItem } from '..';
import { songModel } from '../../model';
import { TSong, TQueueStore } from '../../model/types';

type Props = {
	songs: TSong[];
	listName: string | null;
	listIcon: React.ReactNode;
	listUrl: string | null;
}

export const PlaneSongList = (props: Props) => {
	const { currentSong, state, loaded } = songModel.useSong();
	const { songs } = props;
	const { play } = songModel.useControls();

	const handlePlay = (song: TSong, index: number) => {
		const queue: TQueueStore | undefined = {
			currentSongIndex: index,
			name: props.listName,
			icon: props.listIcon,
			url: props.listUrl,
			songs: props.songs,
			shuffle: false,
		};

		play(song, queue);
	};

	return (
		<>{songs.map((song, index) => {
			const isCurrent = song.id === currentSong?.id;

			return (
				<SongItem
					onClick={handlePlay}
					index={index}
					key={song.id + index}
					song={song}
					playing={isCurrent && state === "playing"}
					loading={isCurrent && state === "loading"}
					loaded={isCurrent && loaded}
				/>
			);
		})}</>
	)
}