import { IconUserOff } from '@tabler/icons-react';
import { useEffect } from 'react';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';
import { GridSongList } from '../../entities/song/ui/gridList';
import { userModel } from '../../entities/user/model';
import { TUser } from '../../entities/user/model/types';
import { UserItem } from '../../entities/user/ui';
import { HorizontalList } from '../../shared/components/horizontalList';
import { NavigationTitle } from '../../shared/components/navigationTitle';
import { PageMessage } from '../../shared/components/pageMessage';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { Subtext } from '../../shared/components/subtext';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { MAX_SONGS } from '../author/constants';
import { Playlists } from '../author/Playlists';
import { AuthorPageWrapper } from '../author/styles';
import { SkeletonLoading } from './SkeletonLoading';
import { SectionStyled } from './styles';
import { UserTop } from './UserTop';

type Props = {
    data?: TUser | null;
    loadingUser?: boolean;
};

export const UserPage = ({ data, loadingUser }: Props) => {
    const [currentPageUser, loading] = userModel.userPage.useUserData();
    const [songs] = userModel.userPage.useTopSongs();
    const [playlists] = userModel.userPage.usePlaylists();
    const [lastSongPlayed] = userModel.userPage.useLastSongPlayed();
    const [friends] = userModel.userPage.useFriends();
    const userPageData = data ?? currentPageUser;
    const id = useUrlParamId({
        page: 'user',
        onChangeId: (id) => {
            if (id) {
                if (!data) {
                    userModel.events.getUserPageById({
                        userId: id,
                    });
                }
            }
        },
    });

    const loadingData = loadingUser || loading || id !== currentPageUser?.uid;

    console.log(playlists);

    useEffect(() => {
        return () => {
            userModel.events.resetUserPage();
        };
    }, []);

    const queue = createQueueObject({
        name: userPageData?.displayName,
        songs: songs.slice(0, MAX_SONGS),
        imageUrl: userPageData?.photoURL,
        url: `/user/${userPageData?.uid}`,
    });

    if (!loadingData && !userPageData) {
        return (
            <PageMessage
                icon={IconUserOff}
                title={'No user found'}
                description={''}
            />
        );
    }

    return (
        <AuthorPageWrapper>
            <SkeletonPageAnimation
                skeleton={<SkeletonLoading />}
                loading={loadingData}
            >
                <UserTop user={userPageData} />
                {lastSongPlayed && (
                    <SectionStyled>
                        <div className="title">
                            <h3>Last played song</h3>
                        </div>
                        <GridSongList
                            queue={{ ...queue, songs: [lastSongPlayed] }}
                        />
                    </SectionStyled>
                )}
                {songs.length > 0 && (
                    <SectionStyled>
                        <div className="title">
                            <NavigationTitle
                                showNavigation={songs.length > MAX_SONGS}
                                to={`/user/${userPageData?.uid}/songs`}
                            >
                                <h3>Added songs</h3>
                            </NavigationTitle>
                        </div>
                        <GridSongList queue={queue} />
                    </SectionStyled>
                )}
                <Playlists
                    playlists={playlists}
                    title="Playlists"
                    uid={userPageData?.uid}
                />
                <SectionStyled>
                    <div className="title">
                        <NavigationTitle
                            showNavigation={songs.length > MAX_SONGS}
                            to={`/author/${userPageData?.uid}/songs`}
                        >
                            <h3>Friends</h3>
                        </NavigationTitle>
                    </div>
                    <HorizontalList>
                        {!friends?.length && <Subtext>No friends</Subtext>}
                        {friends?.map((friend) => (
                            <UserItem
                                user={friend}
                                key={friend.uid}
                                orientation="vertical-small"
                            />
                        ))}
                    </HorizontalList>
                </SectionStyled>
            </SkeletonPageAnimation>
        </AuthorPageWrapper>
    );
};
