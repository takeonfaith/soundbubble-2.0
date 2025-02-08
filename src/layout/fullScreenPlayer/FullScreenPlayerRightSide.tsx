import { songModel } from '@song/new-model';
import { Lyrics } from './Lyrics';
import { Queue } from './Queue';
import { RightSide } from './styles';
import { TRightSideType } from './types';
import { fullscreenPlayerApi } from '../../entities/song/new-model/fullscreen-player';

type Props = {
    type: TRightSideType;
};

export const FullScreenPlayerRightSide = ({ type }: Props) => {
    const { queue } = songModel.useSong();

    if (type === null) return null;

    return (
        <RightSide className={type !== null ? 'visible' : ''}>
            {type === 'lyrics' && <Lyrics />}
            {type === 'queue' && (
                <Queue
                    onClick={() => fullscreenPlayerApi.close()}
                    queue={queue}
                />
            )}
        </RightSide>
    );
};
