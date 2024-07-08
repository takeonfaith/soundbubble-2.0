import { useRef } from 'react';
import { TSong } from '../../entities/song/model/types';
import { userModel } from '../../entities/user/model';
import { TUser } from '../../entities/user/model/types';
import { UserItem } from '../../entities/user/ui';
import { UserSkeleton } from '../../entities/user/ui/Skeleton';
import { HorizontalList } from '../../shared/components/horizontalList';
import { useIsOnScreen } from '../../shared/hooks/useIsOnScreen';
import { SimilarAuthorsStyled } from './styles';
import { Flex } from '../../shared/components/flex';

type Props = {
    songs: TSong[];
    currentPageUser: TUser | null;
};

export const SimilarAuthors = ({ songs, currentPageUser }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const { similarAuthors, similarAuthorsLoading } = userModel.useUserPage();
    useIsOnScreen(ref, () => {
        if (similarAuthors.length === 0) {
            userModel.events.loadSimilarAuthors(songs);
        }
    });

    if (!similarAuthorsLoading && similarAuthors.length === 1) return null;

    return (
        <SimilarAuthorsStyled ref={ref}>
            <h3>Similar Authors</h3>
            <HorizontalList>
                {similarAuthors.map((author) => {
                    if (author.uid === currentPageUser?.uid) return null;

                    return <UserItem user={author} key={author.uid} />;
                })}
            </HorizontalList>

            {similarAuthorsLoading && (
                <Flex gap={20}>
                    <UserSkeleton />
                    <UserSkeleton />
                    <UserSkeleton />
                    <UserSkeleton />
                    <UserSkeleton />
                    <UserSkeleton />
                </Flex>
            )}
        </SimilarAuthorsStyled>
    );
};
