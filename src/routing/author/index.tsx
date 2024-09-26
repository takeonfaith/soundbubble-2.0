import { useEffect } from 'react';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';
import { GridSongList } from '../../entities/song/ui/gridList';
import { userModel } from '../../entities/user/model';
import { TUser } from '../../entities/user/model/types';
import { NavigationTitle } from '../../shared/components/navigationTitle';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { AuthorPageTop } from './AuthorPageTop';
import { Playlists } from './Playlists';
import { SimilarAuthors } from './SimilarAuthors';
import { SkeletonLoading } from './Skeleton';
import { MAX_SONGS } from './constants';
import { AuthorPageWrapper, SongsStyled } from './styles';

type Props = {
    userData?: TUser | null;
};

export const AuthorPage = ({ userData }: Props) => {
    const [{ user: currentPageUser, songs }, loading] = userModel.useUserPage();
    const userPageData = userData ?? currentPageUser;

    useUrlParamId({
        page: 'author',
        onChangeId: (id) => {
            if (id) {
                userModel.events.getUserPage(id);
            }
        },
    });

    useEffect(() => {
        return () => {
            userModel.events.resetUserPage();
        };
    }, []);

    const queue = createQueueObject({
        name: userPageData?.displayName,
        imageUrl: userPageData?.photoURL,
        url: `/author/${userPageData?.uid}`,
        songs,
    });

    return (
        <AuthorPageWrapper>
            <SkeletonPageAnimation
                color={userPageData?.imageColors[0] ?? 'grey'}
                loading={!currentPageUser || loading}
                skeleton={<SkeletonLoading />}
            >
                <AuthorPageTop author={userPageData} queue={queue} />
                <SongsStyled>
                    <div className="title">
                        <NavigationTitle
                            showNavigation={songs.length > MAX_SONGS}
                            to={`/author/${userPageData?.uid}/songs`}
                        >
                            <h3>Top Songs</h3>
                        </NavigationTitle>
                    </div>
                    <GridSongList queue={queue} />
                </SongsStyled>
                <Playlists uid={userPageData?.uid} title="Top Albums" />
                {!loading && (
                    <SimilarAuthors
                        songs={songs}
                        currentPageUser={currentPageUser}
                    />
                )}
            </SkeletonPageAnimation>
        </AuthorPageWrapper>
    );
};
