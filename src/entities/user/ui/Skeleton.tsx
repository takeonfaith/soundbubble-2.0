import styled from 'styled-components';
import { Flex } from '../../../shared/components/flex';
import { SkeletonShape } from '../../../shared/components/skeleton';
import { TOrientation } from '../types';

const UserCoverSkeleton = styled(SkeletonShape)<{
    width: string;
    height: string;
}>`
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

    width: ${({ width }) => width ?? 'var(--size)'};
    height: ${({ height }) => height ?? 'var(--size)'};
`;

type Props = {
    orientation?: TOrientation;
    size?: string;
};

export const UserSkeleton = ({ size, orientation = 'vertical' }: Props) => {
    if (orientation === 'horizontal') {
        return (
            <Flex gap={10} width="100%">
                <SkeletonShape radius="100%" width="40px" height="40px" />
                <Flex d="column" gap={4} ai="flex-start">
                    <SkeletonShape radius="4px" width="200px" height="14px" />
                    <SkeletonShape radius="4px" width="80px" height="10px" />
                </Flex>
            </Flex>
        );
    }

    return (
        <Flex d="column" gap={10} width={size}>
            <UserCoverSkeleton
                radius="100%"
                width={size ?? 'calc(100vw / 11)'}
                height={size ?? 'calc(100vw / 11)'}
            />
            <Flex d="column" gap={4}>
                <SkeletonShape radius="4px" width="140px" height="20px" />
                <SkeletonShape radius="4px" width="80px" height="14px" />
            </Flex>
        </Flex>
    );
};
