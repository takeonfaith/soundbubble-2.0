import { useEffect } from 'react';
import { GridSongList } from '../../entities/song/ui/gridList';
import { userModel } from '../../entities/user/model';
import { UserItem } from '../../entities/user/ui';
import { HorizontalList } from '../../shared/components/horizontalList';
import { NavigationTitle } from '../../shared/components/navigationTitle';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { Subtext } from '../../shared/components/subtext';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { MAX_SONGS } from '../author/constants';
import { Playlists } from '../author/Playlists';
import { AuthorPageWrapper } from '../author/styles';
import { SkeletonLoading } from './SkeletonLoading';
import { SectionStyled } from './styles';
import { UserTop } from './UserTop';
import { TUser } from '../../entities/user/model/types';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';

type Props = {
    data?: TUser | null;
};

export const UserPage = ({ data }: Props) => {
    const [{ user: currentPageUser, songs, lastSongPlayed, friends }, loading] =
        userModel.useUserPage();
    const userPageData = data ?? currentPageUser;

    useUrlParamId({
        page: 'user',
        onChangeId: (id) => {
            if (id) {
                console.log(id);

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
        songs: songs.slice(0, MAX_SONGS),
        imageUrl: userPageData?.photoURL,
        url: `/user/${userPageData?.uid}`,
    });

    return (
        <AuthorPageWrapper>
            <SkeletonPageAnimation
                skeleton={<SkeletonLoading />}
                loading={!userPageData || loading}
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
                                to={`/author/${userPageData?.uid}/songs`}
                            >
                                <h3>Added songs</h3>
                            </NavigationTitle>
                        </div>
                        <GridSongList queue={queue} />
                    </SectionStyled>
                )}
                <Playlists title="Playlists" uid={userPageData?.uid} />
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
