import { SongListSkeleton } from '../../../entities/song/ui/SongListSkeleton';
import { Flex } from '../../../shared/components/flex';
import { ContentWrapper } from '../../../shared/components/pageWrapper';
import { SkeletonShape } from '../../../shared/components/skeleton';

export const Skeleton = () => {
    return (
        <ContentWrapper>
            <Flex d="column" width="100%" gap={30}>
                <Flex width="100%" gap={12}>
                    <SkeletonShape className='skeleton' height="250px" width="33%" />
                    <SkeletonShape className='skeleton' height="250px" width="33%" />
                    <SkeletonShape className='skeleton' height="250px" width="33%" />
                </Flex>
                <SongListSkeleton quantity={20} />
            </Flex>
        </ContentWrapper>
    );
};
