import { IconArrowLeft } from '@tabler/icons-react';
import { useEffect } from 'react';
import { useNavigate, useMatch } from 'react-router';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';
import { SongListSkeleton } from '../../entities/song/ui/SongListSkeleton';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { userModel } from '../../entities/user/model';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import {
    ContentWrapper,
    PageWrapper,
} from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';

export const UserSongs = () => {
    const [user] = userModel.userPage.useUserData();
    const [songs, loading] = userModel.userPage.useAllSongs();
    const navigate = useNavigate();
    const match = useMatch(`user/:id/songs`);
    const id = match?.params.id;

    useEffect(() => {
        if (id) {
            userModel.events.getUserPageById({
                userId: id,
                allSongs: true,
            });
        }
    }, [id]);

    const queue = createQueueObject({
        id: user?.uid,
        name: user?.displayName,
        url: `/user/${user?.uid}`,
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
                    <Flex gap={10} padding="20px 0">
                        <Button
                            $height="40px"
                            $width="40px"
                            onClick={() => navigate(`/user/${user?.uid}`)}
                        >
                            <IconArrowLeft size={20} />
                        </Button>
                        <h2>{user?.displayName} library</h2>
                    </Flex>
                    <VerticalSongsList queue={queue} />
                </SkeletonPageAnimation>
            </ContentWrapper>
        </PageWrapper>
    );
};
