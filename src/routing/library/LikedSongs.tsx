import { IconMusicOff } from '@tabler/icons-react';
import { SongListSkeleton } from '../../entities/song/ui/SongListSkeleton';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { userModel } from '../../entities/user/model';
import { LoginButton } from '../../features/loginButton';
import { PageMessage } from '../../shared/components/pageMessage';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';

export const LikedSongs = () => {
    const [library, loading] = userModel.useSongLibrary();
    const [{ data }] = userModel.useUser();

    return (
        <ContentWrapper>
            <SkeletonPageAnimation
                loading={loading}
                skeleton={
                    <Flex padding='20px' width='100%'>
                        <SongListSkeleton quantity={20} />
                    </Flex>
                }
            >
                <VerticalSongsList
                    listName="Library"
                    listIcon={''}
                    listUrl="/library"
                    songs={library}
                />
                {!data && (
                    <PageMessage
                        icon={IconMusicOff}
                        title={'Need to log in'}
                        description={'To listen to your favorite songs'}
                    >
                        <LoginButton />
                    </PageMessage>
                )}
                {data && !library.length && (
                    <PageMessage
                        icon={IconMusicOff}
                        title="No songs added to library"
                        description="You can add them from search!"
                    />
                )}
            </SkeletonPageAnimation>
        </ContentWrapper>
    );
};
