import { PlaylistItem } from '../../entities/playlist/ui';
import { GridSongList } from '../../entities/song/ui/gridList';
import { getLastSeen } from '../../entities/user/lib/getLastSeen';
import { userModel } from '../../entities/user/model';
import { TUser } from '../../entities/user/model/types';
import { UserCover } from '../../entities/user/ui/UserCover';
import { UserStatus } from '../../entities/user/ui/UserStatus';
import { ShareModal } from '../../features/shareModal';
import { modalModel } from '../../layout/modal/model';
import { HorizontalList } from '../../shared/components/horizontalList';
import { PageTop } from '../../shared/components/pageTop';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { BottomButtons } from './BottomButtons';
import { SimilarAuthors } from './SimilarAuthors';
import { SkeletonLoading } from './Skeleton';
import { ContentWrapperStyled, SongsStyled } from './styles';

type Props = {
    userData?: TUser | null;
};

export const AuthorPage = ({ userData }: Props) => {
    const {
        user: currentPageUser,
        songs,
        playlists,
        loading,
    } = userModel.useUserPage();
    const [{ data: currentUser }] = userModel.useUser();
    const [friends] = userModel.useFriends();
    const userPageData = userData ?? currentPageUser;
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
                userModel.events.loadUserPageFx(id);
            }
        },
    });

    const queueInfo = {
        listName: userPageData?.displayName ?? 'Author',
        listIcon: userPageData?.photoURL,
        listUrl: `/author/${userPageData?.uid}`,
        songs: songs.slice(0, 9),
    };

    const handleClickShare = () => {
        modalModel.events.open({
            title: `Share ${currentPageUser?.displayName} with friends`,
            content: <ShareModal entity={currentPageUser} />,
        });
    };

    return (
        <PageWrapper>
            <SkeletonPageAnimation
                color={userPageData?.imageColors[0] ?? 'grey'}
                loading={loading}
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
                <ContentWrapperStyled>
                    <SongsStyled>
                        <h3>Top songs</h3>
                        <GridSongList {...queueInfo} />
                    </SongsStyled>
                    {playlists.length !== 0 && (
                        <SongsStyled>
                            <h3>Top Albums</h3>
                            <HorizontalList>
                                {playlists.map((playlist) => (
                                    <PlaylistItem
                                        playlist={playlist}
                                        key={playlist.id}
                                    />
                                ))}
                            </HorizontalList>
                        </SongsStyled>
                    )}
                </ContentWrapperStyled>
                {!loading && (
                    <SimilarAuthors
                        songs={songs}
                        currentPageUser={userPageData}
                    />
                )}
            </SkeletonPageAnimation>
        </PageWrapper>
    );
};
