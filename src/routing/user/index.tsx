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

export const UserPage = () => {
    const [{ user: currentPageUser, songs, lastSongPlayed, friends }, loading] =
        userModel.useUserPage();

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

    const queueInfo = {
        listName: currentPageUser?.displayName ?? 'Author',
        listIcon: currentPageUser?.photoURL,
        listUrl: `/author/${currentPageUser?.uid}`,
        songs: songs.slice(0, MAX_SONGS),
    };

    console.log(loading);

    return (
        <AuthorPageWrapper>
            <SkeletonPageAnimation
                skeleton={<SkeletonLoading />}
                loading={!currentPageUser || loading}
            >
                <UserTop />
                {lastSongPlayed && (
                    <SectionStyled>
                        <div className="title">
                            <h3>Last played song</h3>
                        </div>
                        <GridSongList {...queueInfo} songs={[lastSongPlayed]} />
                    </SectionStyled>
                )}
                {songs.length > 0 && (
                    <SectionStyled>
                        <div className="title">
                            <NavigationTitle
                                showNavigation={songs.length > MAX_SONGS}
                                to={`/author/${currentPageUser?.uid}/songs`}
                            >
                                <h3>Added songs</h3>
                            </NavigationTitle>
                        </div>
                        <GridSongList
                            {...queueInfo}
                            songs={songs.slice(0, MAX_SONGS)}
                        />
                    </SectionStyled>
                )}
                <Playlists title="Playlists" uid={currentPageUser?.uid} />
                <SectionStyled>
                    <div className="title">
                        <NavigationTitle
                            showNavigation={songs.length > MAX_SONGS}
                            to={`/author/${currentPageUser?.uid}/songs`}
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
