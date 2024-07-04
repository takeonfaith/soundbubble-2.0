import styled, { useTheme } from 'styled-components';
import { Flex } from '../../../shared/components/flex';
import { SkeletonShape } from '../../../shared/components/skeleton';

const CoverSkeleton = styled(SkeletonShape)`
    --size: calc(100vw / 8 + 3px);

    @media (max-width: 1200px) {
        --size: calc(100vw / 6);
    }

    @media (max-width: 800px) {
        --size: calc(100vw / 2 - 30px);
    }

    width: var(--size);
    height: var(--size);
`;

export const PlaylistSkeleton = () => {
    const theme = useTheme();
    return (
        <Flex gap={12} ai="flex-start" d="column">
            <CoverSkeleton
                width="calc(100vw / 8)"
                height="calc(100vw / 8)"
                radius={theme.borderRadius.middle}
            />
            <Flex gap={7} ai="flex-start" d="column">
                <SkeletonShape width="120px" height="15px" radius="4px" />
                <SkeletonShape width="80px" height="12px" radius="3px" />
            </Flex>
        </Flex>
    );
};
