import { TLoadQueue, TQueue } from '../../entities/song/model/types';
import { PlayButton } from '../../routing/playlist/ui/controls/PlayButton';
import { ShuffleButton } from '../../routing/playlist/ui/controls/ShuffleButton';
import { SlowButton } from '../../routing/playlist/ui/controls/SlowButton';

type Props = {
    queue: TLoadQueue | TQueue;
    color: string;
};

export const ControlButtons = ({ queue, color }: Props) => {
    return (
        <>
            <PlayButton primaryColor={color} queue={queue} short={false} />
            <SlowButton queue={queue} primaryColor={color} />
            <ShuffleButton queue={queue} />
        </>
    );
};
