import { useRef } from 'react';
import { useTheme } from 'styled-components';
import { TSong } from '../../entities/song/model/types';
import { userModel } from '../../entities/user/model';
import { TUser } from '../../entities/user/model/types';
import { UserItem } from '../../entities/user/ui';
import { UserSkeleton } from '../../entities/user/ui/Skeleton';
import { HorizontalList } from '../../shared/components/horizontalList';
import { NavigationTitle } from '../../shared/components/navigationTitle';
import { useIsOnScreen } from '../../shared/hooks/useIsOnScreen';
import { MAX_SIMILAR_AUTHORS } from './constants';
import { SimilarAuthorsStyled } from './styles';

type Props = {
    songs: TSong[];
    currentPageUser: TUser | null;
};

export const SimilarAuthors = ({ songs, currentPageUser }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const theme = useTheme();
    const [similarAuthors, similarAuthorsLoading] =
        userModel.authorPage.useSimilarAuthors();
    useIsOnScreen(ref, () => {
        if (similarAuthors.length === 0) {
            userModel.events.loadSimilarAuthors(songs);
        }
    });

    if (!similarAuthorsLoading && similarAuthors.length === 1) return null;

    return (
        <SimilarAuthorsStyled ref={ref}>
            <div className="title">
                <NavigationTitle
                    showNavigation={similarAuthors.length > MAX_SIMILAR_AUTHORS}
                    to={`/author/${currentPageUser?.uid}/similar-authors`}
                >
                    <h3>Similar Authors</h3>
                </NavigationTitle>
            </div>
            <HorizontalList overflowColor={theme.colors.pageBackground4}>
                {similarAuthors.slice(0, MAX_SIMILAR_AUTHORS).map((author) => {
                    if (author.uid === currentPageUser?.uid) return null;

                    return <UserItem user={author} key={author.uid} />;
                })}
            </HorizontalList>

            {similarAuthorsLoading && (
                <HorizontalList overflowColor={theme.colors.pageBackground2}>
                    <UserSkeleton />
                    <UserSkeleton />
                    <UserSkeleton />
                    <UserSkeleton />
                    <UserSkeleton />
                    <UserSkeleton />
                </HorizontalList>
            )}
        </SimilarAuthorsStyled>
    );
};
