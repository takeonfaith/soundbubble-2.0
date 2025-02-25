import { useUnit } from 'effector-react';
import { useMemo } from 'react';
import { createQueueObject } from '../../../entities/song/lib/createQueueObject';
import { GridSongList } from '../../../entities/song/ui/gridList';
import { TUser } from '../../../entities/user/model/types';
import { translate } from '../../../i18n';
import { Flex } from '../../../shared/components/flex';
import { NavigationTitle } from '../../../shared/components/navigationTitle';
import { SkeletonPageAnimation } from '../../../shared/components/skeleton/SkeletonPageAnimation';
import { TIME_IN_MS } from '../../../shared/constants/time';
import { useUrlParamId } from '../../../shared/hooks/useUrlParamId';
import {
    $albums,
    $pageAuthor,
    $topSongs,
    getAuthorPageById,
    loadAuthorPageFx,
} from '../model';
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
    const [currentPageUser, loading, songs, albums] = useUnit([
        $pageAuthor,
        loadAuthorPageFx.pending,
        $topSongs,
        $albums,
    ]);
    const userPageData = userData ?? currentPageUser;

    const lastSongs = useMemo(() => {
        return songs.filter((s) => {
            return (
                new Date().getTime() - new Date(s.releaseDate).getTime() <=
                TIME_IN_MS.month
            );
        });
    }, [songs]);

    useUrlParamId({
        page: 'author',
        onChangeId: (id) => {
            if (id) {
                getAuthorPageById({
                    userId: id,
                });
            }
        },
    });

    // useEffect(() => {
    //     return () => {
    //         resetUserPage();
    //     };
    // }, []);

    const queue = createQueueObject({
        id: userPageData?.uid,
        name: userPageData?.displayName,
        imageUrl: userPageData?.photoURL,
        url: `/author/${userPageData?.uid}`,
        songs,
    });

    const lastSongsQueue = createQueueObject({
        id: userPageData?.uid,
        name: userPageData?.displayName,
        imageUrl: userPageData?.photoURL,
        url: `/author/${userPageData?.uid}`,
        songs: lastSongs,
    });

    return (
        <AuthorPageWrapper>
            <SkeletonPageAnimation
                color={userPageData?.imageColors[0] ?? 'grey'}
                loading={loading}
                skeleton={<SkeletonLoading />}
            >
                <AuthorPageTop author={userPageData} queue={queue} />
                <Flex width="100%" height="100%" gap={0} d="column">
                    {!!lastSongs.length && (
                        <SongsStyled>
                            <div className="title">
                                <h3>New Songs</h3>
                            </div>

                            <GridSongList queue={lastSongsQueue} />
                        </SongsStyled>
                    )}
                    <SongsStyled
                        style={{
                            marginBottom:
                                albums.length === 0 && !loading
                                    ? 'var(--page-padding)'
                                    : '',
                        }}
                    >
                        <div className="title">
                            <NavigationTitle
                                showNavigation={songs.length > MAX_SONGS}
                                to={`/author/${userPageData?.uid}/songs`}
                            >
                                <h3>{translate('top_songs')}</h3>
                            </NavigationTitle>
                        </div>

                        <GridSongList queue={queue} maxSongs={MAX_SONGS} />
                    </SongsStyled>
                    <Playlists
                        playlists={albums}
                        uid={userPageData?.uid}
                        title={translate('top_albums')}
                    />
                    {!loading && (
                        <SimilarAuthors
                            songs={songs}
                            currentPageUser={currentPageUser}
                        />
                    )}
                </Flex>
            </SkeletonPageAnimation>
        </AuthorPageWrapper>
    );
};
