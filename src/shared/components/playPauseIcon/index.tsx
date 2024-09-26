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

export const PlayPauseIcon = ({ loading, playling, size }: Props) => {
    return (
        <>
            {loading ? (
                <Loading />
            ) : playling ? (
                <IconPlayerPauseFilled size={size} />
            ) : (
                <IconPlayerPlayFilled size={size} />
            )}
        </>
    );
};
