import { songModel } from '../../entities/song/model';
import { Lyrics } from '../fullScreenPlayer/Lyrics';
import { LyricsWrapper } from './styles';

export const CompactLyrics = () => {
    const { currentSong } = songModel.useSong();

    return (
        <LyricsWrapper $colors={currentSong?.imageColors}>
            <Lyrics />
        </LyricsWrapper>
    );
};
