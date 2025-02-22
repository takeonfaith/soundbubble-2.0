import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { useMatch } from 'react-router';
import { createQueueObject } from '../../../../entities/song/lib/createQueueObject';
import { SongListSkeleton } from '../../../../entities/song/ui/SongListSkeleton';
import { VerticalSongsList } from '../../../../entities/song/ui/verticalList';
import { translate } from '../../../../i18n';
import {
    ContentWrapper,
    PageWrapper,
} from '../../../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../../../shared/components/skeleton/SkeletonPageAnimation';
import { AuthorPageHeader } from '../../../author/ui/pages/AuthorPageHeader';
import {
    $addedSongs,
    $pageUser,
    getUserPageById,
    loadUserPageFx,
} from '../../model/user-page';
import { PlaylistControlButtons } from '../../../playlist/ui/controls/PlaylistControlButtons';
import { playlistModel } from '../../../../entities/playlist/model';
import { usePlaylistSearch } from '../../../playlist/hooks/usePlaylistSearch';

export const UserSongs = () => {
    const [user, loading, songs] = useUnit([
        $pageUser,
        loadUserPageFx.pending,
        $addedSongs,
    ]);
    const [, , , searching] = playlistModel.usePlaylist();
    const { visible } = usePlaylistSearch(searching, songs);
    const match = useMatch(`user/:id/songs`);
    const id = match?.params.id;

    useEffect(() => {
        if (id) {
            getUserPageById({
                userId: id,
                allSongs: true,
            });
        }
    }, [id]);

    const queue = createQueueObject({
        id: user?.uid,
        name: user?.displayName,
        url: `/user/${user?.uid}`,
        songs: visible,
        imageUrl: user?.photoURL,
    });

    return (
        <PageWrapper>
            <ContentWrapper>
                <SkeletonPageAnimation
                    loading={loading}
                    skeleton={<SongListSkeleton padding="20px" quantity={20} />}
                >
                    <AuthorPageHeader
                        author={user}
                        title={translate('liked')}
                        isAuthor={false}
                    >
                        <PlaylistControlButtons
                            queue={queue}
                            playlist={null}
                            searching={searching}
                            primaryColor={user?.imageColors[0]}
                        />
                    </AuthorPageHeader>
                    <VerticalSongsList queue={queue} />
                </SkeletonPageAnimation>
            </ContentWrapper>
        </PageWrapper>
    );
};
