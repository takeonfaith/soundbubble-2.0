import { IconHeartFilled, IconMusicOff } from '@tabler/icons-react';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';
import { SongListSkeleton } from '../../entities/song/ui/SongListSkeleton';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { userModel } from '../../entities/user/model';
import { LoginButton } from '../../features/loginButton';
import { Flex } from '../../shared/components/flex';
import { PageMessage } from '../../shared/components/pageMessage';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { PageTop } from '../playlist/PageTop';

export const LikedSongs = () => {
    const [library, loading] = userModel.useSongLibrary();
    const [currentUser] = userModel.useUser();

    const queue = createQueueObject({
        name: 'Library',
        songs: library,
        url: '',
        id: 'library',
    });

    return (
        <ContentWrapper>
            <SkeletonPageAnimation
                loading={loading}
                skeleton={
                    <Flex padding="20px" width="100%">
                        <SongListSkeleton quantity={20} />
                    </Flex>
                }
            >
                {currentUser && (
                    <PageTop
                        authors={[currentUser]}
                        queue={queue}
                        name="Liked Songs"
                        icon={<IconHeartFilled />}
                        playlist={null}
                        hasHeader
                    />
                )}
                <VerticalSongsList queue={queue} />
                {!currentUser && (
                    <PageMessage
                        icon={IconMusicOff}
                        title={'Need to log in'}
                        description={'To listen to your favorite songs'}
                    >
                        <LoginButton />
                    </PageMessage>
                )}
                {currentUser && !library.length && (
                    <PageMessage
                        icon={IconMusicOff}
                        title="No songs added to library"
                        description="You can add them from search!"
                    />
                )}
            </SkeletonPageAnimation>
            {/* <AddButton /> */}
        </ContentWrapper>
    );
};
