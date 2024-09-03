import { MusicControls } from '@components/musicControls';
import { usePlayerMusicControls } from './hooks/usePlayerMusicControls';

export const PlayerMusicControls = () => {
    const controls = usePlayerMusicControls();

    return <MusicControls {...controls} />;
};
