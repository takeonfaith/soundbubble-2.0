import { Flex } from '../../../shared/components/flex';
import { SongSkeleton } from './Skeleton';

type Props = {
    quantity?: number;
};

export const SongListSkeleton = ({ quantity = 15 }: Props) => {
    return (
        <Flex gap={4} d="column" width="100%">
            {Array.from(Array(quantity)).map((_, i) => (
                <SongSkeleton key={i} />
            ))}
        </Flex>
    );
};
