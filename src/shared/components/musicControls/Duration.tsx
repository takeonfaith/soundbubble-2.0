import { useMemo } from 'react';
import { getHumanDuration } from '../../../entities/song/lib/getHumanDuration';
import { Flex } from '../flex';
import { DurationText } from './styles';

type Props = {
    duration: number;
    currentTime: number;
};

export const Duration = ({ duration, currentTime }: Props) => {
    const { currentTimeStr, durationStr } = useMemo(
        () => ({
            currentTimeStr: getHumanDuration(currentTime),
            durationStr: getHumanDuration(duration),
        }),
        [duration, currentTime]
    );

    return (
        <Flex jc="space-between" width="100%" className="duration-numbers">
            <DurationText>{currentTimeStr}</DurationText>
            <DurationText>{durationStr}</DurationText>
        </Flex>
    );
};
