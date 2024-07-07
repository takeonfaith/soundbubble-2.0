import { SongListSkeleton } from '../../entities/song/ui/SongListSkeleton';
import { Flex } from '../../shared/components/flex';
import { SkeletonShape } from '../../shared/components/skeleton';

export const SearchSkeleton = () => {
    return (
        <Flex gap={8} d="column" ai="flex-start" width="100%" height="fit-content">
            <SkeletonShape width="70px" height="20px" radius="4px" />
            <SongListSkeleton />
        </Flex>
    );
};
