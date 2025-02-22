import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { useMatch } from 'react-router';
import { playlistModel } from '../../../../entities/playlist/model';
import { createQueueObject } from '../../../../entities/song/lib/createQueueObject';
import { SongListSkeleton } from '../../../../entities/song/ui/SongListSkeleton';
import { VerticalSongsList } from '../../../../entities/song/ui/verticalList';
import {
    ContentWrapper,
    PageWrapper,
} from '../../../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../../../shared/components/skeleton/SkeletonPageAnimation';
import { usePlaylistSearch } from '../../../playlist/hooks/usePlaylistSearch';
import { PlaylistControlButtons } from '../../../playlist/ui/controls/PlaylistControlButtons';
import {
    $pageAuthor,
    $topSongs,
    getAuthorPageById,
    loadAllAuthorSongsFx,
} from '../../model';
import { AuthorPageHeader } from './AuthorPageHeader';

export const AuthorSongs = () => {
    const [, , , searching] = playlistModel.usePlaylist();

    const [author, songs, loading] = useUnit([
        $pageAuthor,
        $topSongs,
        loadAllAuthorSongsFx.pending,
    ]);
    const match = useMatch(`author/:id/songs`);
    const id = match?.params.id;
    const { visible } = usePlaylistSearch(searching, songs);

    useEffect(() => {
        if (id) {
            getAuthorPageById({
                userId: id,
                allSongs: true,
            });
        }
    }, [id]);

    const queue = createQueueObject({
        id: author?.uid,
        name: author?.displayName,
        url: `/author/${author?.uid}/songs`,
        songs: visible,
        imageUrl: author?.photoURL,
    });

    return (
        <PageWrapper>
            <ContentWrapper>
                <SkeletonPageAnimation
                    loading={loading}
                    skeleton={<SongListSkeleton padding="20px" quantity={20} />}
                >
                    <AuthorPageHeader title="songs" author={author}>
                        <PlaylistControlButtons
                            playlist={null}
                            queue={queue}
                            searching={searching}
                            primaryColor={author?.imageColors[0]}
                        />
                    </AuthorPageHeader>
                    <VerticalSongsList showSerialNumber={0} queue={queue} />
                </SkeletonPageAnimation>
            </ContentWrapper>
        </PageWrapper>
    );
};
