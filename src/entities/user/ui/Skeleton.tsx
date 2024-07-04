import styled from 'styled-components';
import { Flex } from '../../../shared/components/flex';
import { SkeletonShape } from '../../../shared/components/skeleton';

const UserCoverSkeleton = styled(SkeletonShape)`
    --size: calc(100vw / 10 - 17px);

    @media (max-width: 1200px) {
        --size: calc(100vw / 7 - 32px);
    }

    @media (max-width: 1000px) {
        --size: calc(100vw / 5 - 32px);
    }

    @media (max-width: 768px) {
        --size: calc(100vw / 3 - 27px);
    }

    width: var(--size);
    height: var(--size);
`;

export const UserSkeleton = () => {
    return (
        <Flex d="column" gap={10}>
            <UserCoverSkeleton
                radius="100%"
                width="calc(100vw / 11)"
                height="calc(100vw / 11)"
            />
            <Flex d="column" gap={4}>
                <SkeletonShape radius="4px" width="140px" height="20px" />
                <SkeletonShape radius="4px" width="80px" height="14px" />
            </Flex>
        </Flex>
    );
};
