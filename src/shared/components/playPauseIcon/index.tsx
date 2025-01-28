import {
    IconPlayerPauseFilled,
    IconPlayerPlayFilled,
} from '@tabler/icons-react';
import { Loading } from '../loading';

type Props = {
    loading: boolean;
    playling: boolean;
    size?: number;
};

export const PlayPauseIcon = ({ loading, playling, size = 20 }: Props) => {
    return (
        <>
            {loading ? (
                <Loading size={size / 1.1} />
            ) : playling ? (
                <IconPlayerPauseFilled size={size} />
            ) : (
                <IconPlayerPlayFilled size={size} />
            )}
        </>
    );
};
