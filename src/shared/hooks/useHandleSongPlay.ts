import { songModel } from '../../entities/song/model';
import { TQueueStore, TSong } from '../../entities/song/model/types';

type Props = {
	listName: string | null;
	listIcon: React.ReactNode;
	listUrl: string | null;
	songs: TSong[];
}

export const useHandleSongPlay = (props: Props) => {
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

	return { handlePlay }
}