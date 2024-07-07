import { Flex } from '../../../shared/components/flex';
import { TOrientation } from '../types';
import { UserSkeleton } from './Skeleton';

type Props = {
    quantity?: number;
    orientation?: TOrientation;
};

export const UserListSkeleton = ({ orientation, quantity = 15 }: Props) => {
    return (
        <Flex gap={10} d="column" width="100%">
            {Array.from(Array(quantity)).map((_, i) => (
                <UserSkeleton key={i} orientation={orientation} />
            ))}
        </Flex>
    );
};
