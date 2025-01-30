import { useEffect } from 'react';
import { useMatch, useNavigate } from 'react-router';
import { createQueueObject } from '../../../entities/song/lib/createQueueObject';
import { SongListSkeleton } from '../../../entities/song/ui/SongListSkeleton';
import { VerticalSongsList } from '../../../entities/song/ui/verticalList';
import { userModel } from '../../../entities/user/model';
import {
    ContentWrapper,
    PageWrapper,
} from '../../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../../shared/components/skeleton/SkeletonPageAnimation';
import { Flex } from '../../../shared/components/flex';
import { Button } from '../../../shared/components/button';
import { IconArrowLeft } from '@tabler/icons-react';
import { PlaylistControlButtons } from '../../playlist/ui/controls/PlaylistControlButtons';
import { UserCover } from '../../../entities/user/ui/UserCover';
import styled from 'styled-components';
import { playlistModel } from '../../../entities/playlist/model';

const AuthorSongsHeader = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 14px;
    padding: 20px 0;
    position: sticky;
    top: 0px;
    background: ${({ theme }) => theme.colors.pageBackground};
    z-index: 10;
`;

export const AuthorSongs = () => {
    const [, , , searching] = playlistModel.usePlaylist();

    const [user] = userModel.authorPage.useAuthorPage();
    const [songs, loading] = userModel.authorPage.useAllSongs();
    const navigate = useNavigate();
    const match = useMatch(`author/:id/songs`);
    const id = match?.params.id;

    useEffect(() => {
        if (id) {
            userModel.events.getAuthorPageById({
                userId: id,
                allSongs: true,
            });
        }
    }, [id]);

    const queue = createQueueObject({
        id: user?.uid,
        name: user?.displayName,
        url: `/author/${user?.uid}/songs`,
        songs,
        imageUrl: user?.photoURL,
    });

    return (
        <PageWrapper>
            <ContentWrapper>
                <SkeletonPageAnimation
                    loading={loading}
                    skeleton={<SongListSkeleton padding="20px" quantity={20} />}
                >
                    <AuthorSongsHeader>
                        <Flex gap={14}>
                            <Button
                                $height="40px"
                                $width="40px"
                                style={{ borderRadius: '100%' }}
                                onClick={() => navigate(`/author/${user?.uid}`)}
                            >
                                <IconArrowLeft size={20} />
                            </Button>
                            <Flex gap={10}>
                                <UserCover
                                    isAuthor
                                    size="30px"
                                    src={user?.photoURL}
                                    colors={user?.imageColors}
                                />
                                <h2>{user?.displayName} songs</h2>
                            </Flex>
                        </Flex>
                        <PlaylistControlButtons
                            playlist={null}
                            queue={queue}
                            searching={searching}
                            primaryColor={user?.imageColors[0]}
                        />
                    </AuthorSongsHeader>
                    <VerticalSongsList showSerialNumber={0} queue={queue} />
                </SkeletonPageAnimation>
            </ContentWrapper>
        </PageWrapper>
    );
};
