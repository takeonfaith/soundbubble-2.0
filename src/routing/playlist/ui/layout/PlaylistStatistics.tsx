import { TSong } from '../../../../entities/song/model/types';
import { translate } from '../../../../i18n';
import { Subtext } from '../../../../shared/components/subtext';
import { getPluralForm } from '../../../../shared/funcs/getPluralForm';
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
            {songs?.length ?? 0}{' '}
            {songs?.length &&
                `${getPluralForm(songs.length, {
                    one: translate('song_one'),
                    toFour: translate('songs_to_four'),
                    fromFive: translate('songs_from_five'),
                })}, `}
            {getTotalSongsDuration(songs)}
        </Subtext>
    );
};
