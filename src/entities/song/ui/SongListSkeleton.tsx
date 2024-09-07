import { Flex } from '../../../shared/components/flex';
import { SongSkeleton } from './Skeleton';

type Props = {
    quantity?: number;
    padding?: string;
};

export const SongListSkeleton = ({ padding, quantity = 15 }: Props) => {
    return (
        <Flex gap={4} d="column" width="100%" padding={padding}>
            {Array.from(Array(quantity)).map((_, i) => (
                <SongSkeleton key={i} />
            ))}
        </Flex>
    );
};
