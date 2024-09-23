import { useEffect } from 'react';
import { TQueueStore } from '../../entities/song/model/types';
import { GridSongList } from '../../entities/song/ui/gridList';
import { getLastSeen } from '../../entities/user/lib/getLastSeen';
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
    const [{ data: currentUser }] = userModel.useUser();
    const userPageData = userData ?? currentPageUser;
    const [friends] = userModel.useFriends();
    const isFriend = !!friends.find((f) => f.uid === currentPageUser?.uid);
    const { status } = getLastSeen(currentPageUser?.online);
    const [isAuthor, isAdmin, isPageOwner] = [
        userPageData?.isAuthor ?? false,
        userPageData?.isAdmin ?? false,
        currentUser?.uid === userPageData?.uid,
    ];

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

    const queueInfo: TQueueStore = {
        name: userPageData?.displayName ?? 'Author',
        image: userPageData?.photoURL,
        url: `/author/${userPageData?.uid}`,
        songs: songs.slice(0, MAX_SONGS),
    };

    return (
        <AuthorPageWrapper>
            <SkeletonPageAnimation
                color={userPageData?.imageColors[0] ?? 'grey'}
                loading={!currentPageUser || loading}
                skeleton={<SkeletonLoading />}
            >
                <AuthorPageTop author={userPageData} queueInfo={queueInfo} />
                <SongsStyled>
                    <div className="title">
                        <NavigationTitle
                            showNavigation={songs.length > MAX_SONGS}
                            to={`/author/${userPageData?.uid}/songs`}
                        >
                            <h3>Top Songs</h3>
                        </NavigationTitle>
                    </div>
                    <GridSongList
                        {...queueInfo}
                        songs={songs.slice(0, MAX_SONGS)}
                    />
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
