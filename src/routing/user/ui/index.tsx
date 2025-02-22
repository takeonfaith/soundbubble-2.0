import { IconUserOff } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { createQueueObject } from '../../../entities/song/lib/createQueueObject';
import { GridSongList } from '../../../entities/song/ui/gridList';
import { TUser } from '../../../entities/user/model/types';
import { UserItem } from '../../../entities/user/ui';
import { translate } from '../../../i18n';
import { HorizontalList } from '../../../shared/components/horizontalList';
import { NavigationTitle } from '../../../shared/components/navigationTitle';
import { PageMessage } from '../../../shared/components/pageMessage';
import { SkeletonPageAnimation } from '../../../shared/components/skeleton/SkeletonPageAnimation';
import { Subtext } from '../../../shared/components/subtext';
import { useUrlParamId } from '../../../shared/hooks/useUrlParamId';
import { MAX_SONGS } from '../../author/ui/constants';
import { Playlists } from '../../author/ui/Playlists';
import { AuthorPageWrapper } from '../../author/ui/styles';
import {
    $addedSongs,
    $friends,
    $lastSongPlayed,
    $pageUser,
    $playlists,
    getUserPageById,
    loadUserPageFx,
} from '../model/user-page';
import { SkeletonLoading } from './SkeletonLoading';
import { SectionStyled } from './styles';
import { UserTop } from './UserTop';

type Props = {
    data?: TUser | null;
    loadingUser?: boolean;
};

export const UserPage = ({ data, loadingUser }: Props) => {
    const [user, loading, songs, playlists, friends, lastSongPlayed] = useUnit([
        $pageUser,
        loadUserPageFx.pending,
        $addedSongs,
        $playlists,
        $friends,
        $lastSongPlayed,
    ]);
    const userPageData = data ?? user;
    const id = useUrlParamId({
        page: 'user',
        onChangeId: (id) => {
            if (id) {
                if (!data) {
                    getUserPageById({
                        userId: id,
                    });
                }
            }
        },
    });

    const loadingData = loadingUser || loading || id !== user?.uid;

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
                            <h3>{translate('last_played_song')}</h3>
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
                                <h3>{translate('liked_songs')}</h3>
                            </NavigationTitle>
                        </div>
                        <GridSongList queue={queue} />
                    </SectionStyled>
                )}
                <Playlists
                    playlists={playlists}
                    title={translate('playlists')}
                    uid={userPageData?.uid}
                    isAuthor={false}
                />
                <SectionStyled>
                    <div className="title">
                        <NavigationTitle
                            showNavigation={songs.length > MAX_SONGS}
                            to={`/user/${userPageData?.uid}/friends`}
                        >
                            <h3>{translate('friends')}</h3>
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
