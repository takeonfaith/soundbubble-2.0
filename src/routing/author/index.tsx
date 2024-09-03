import { useEffect } from 'react';
import { GridSongList } from '../../entities/song/ui/gridList';
import { getLastSeen } from '../../entities/user/lib/getLastSeen';
import { userModel } from '../../entities/user/model';
import { TUser } from '../../entities/user/model/types';
import { UserCover } from '../../entities/user/ui/UserCover';
import { UserStatus } from '../../entities/user/ui/UserStatus';
import { ShareModal } from '../../features/shareModal';
import { modalModel } from '../../layout/modal/model';
import { NavigationTitle } from '../../shared/components/navigationTitle';
import { PageTop } from '../../shared/components/pageTop';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { BottomButtons } from './BottomButtons';
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

    const queueInfo = {
        listName: userPageData?.displayName ?? 'Author',
        listIcon: userPageData?.photoURL,
        listUrl: `/author/${userPageData?.uid}`,
        songs: songs.slice(0, MAX_SONGS),
    };

    const handleClickShare = () => {
        modalModel.events.open({
            title: `Share ${currentPageUser?.displayName} with friends`,
            content: <ShareModal entity={currentPageUser} />,
        });
    };

    return (
        <AuthorPageWrapper>
            <SkeletonPageAnimation
                color={userPageData?.imageColors[0] ?? 'grey'}
                loading={!currentPageUser || loading}
                skeleton={<SkeletonLoading />}
            >
                <PageTop
                    handleClickShare={handleClickShare}
                    id={userPageData?.uid}
                    name={userPageData?.displayName}
                    subtitle={
                        <UserStatus
                            color={currentPageUser?.imageColors[1]}
                            isAuthor={isAuthor}
                            status={status}
                            showLastSeen={isFriend || currentUser?.isAdmin}
                        />
                    }
                    numberOfListenersPerMonth={
                        userPageData?.numberOfListenersPerMonth
                    }
                    isVerified={userPageData?.isVerified}
                    subscribers={userPageData?.subscribers}
                    imageComponent={
                        <UserCover
                            isAuthor={isAuthor}
                            colors={userPageData?.imageColors}
                            src={userPageData?.photoURL}
                            size="200px"
                        />
                    }
                    colors={userPageData?.imageColors}
                    bottomButtons={
                        <BottomButtons
                            buttonColor={userPageData?.imageColors[1]}
                            isAdmin={isAdmin}
                            isPageOwner={isPageOwner}
                            queueInfo={queueInfo}
                        />
                    }
                />
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
