import { TSong } from '../../../../entities/song/model/types';
import { Subtext } from '../../../../shared/components/subtext';
import { getTotalSongsDuration } from '../../../../shared/funcs/getTotalSongsDuration';

type Props = {
    songs: TSong[] | null;
};
export const PlaylistStatistics = ({ songs }: Props) => {
    if ((songs?.length ?? 0) === 0) return null;

    return (
        <Subtext
            style={{
                fontSize: '0.85rem',
                opacity: '0.4',
            }}
        >
            {songs?.length ?? 0} songs, {getTotalSongsDuration(songs)}
        </Subtext>
    );
};
