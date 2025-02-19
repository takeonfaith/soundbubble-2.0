import { IconHeartFilled, IconMusicOff } from '@tabler/icons-react';
import { useTheme } from 'styled-components';
import { playlistModel } from '../../entities/playlist/model';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';
import { SongListSkeleton } from '../../entities/song/ui/SongListSkeleton';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { userModel } from '../../entities/user/model';
import { LoginButton } from '../../features/loginButton';
import { Flex } from '../../shared/components/flex';
import { PageMessage } from '../../shared/components/pageMessage';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { usePlaylistSearch } from '../playlist/hooks/usePlaylistSearch';
import { PageTop } from '../playlist/ui/layout/PageTop';
import { translate } from '../../i18n';

export const LikedSongs = () => {
    const [, , , searching] = playlistModel.usePlaylist();
    const [library, loading] = userModel.useSongLibrary();
    const [currentUser] = userModel.useUser();
    const theme = useTheme();

    const { visible } = usePlaylistSearch(searching, library);

    const queue = createQueueObject({
        name: 'Library',
        songs: visible,
        url: '',
        id: 'library',
    });

    if (!currentUser) {
        return (
            <PageMessage
                icon={IconMusicOff}
                title={translate('need_to_login')}
                description={translate('need_to_login_subtext')}
                className="with-header"
            >
                <LoginButton />
            </PageMessage>
        );
    }

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
                        queue={{ ...queue, songs: library }}
                        name={translate('liked_songs')}
                        icon={<IconHeartFilled />}
                        playlist={null}
                        hasHeader
                        isOwner={false}
                        searching={searching}
                        imageColors={[theme.scheme.blue.action]}
                    />
                )}
                <VerticalSongsList queue={queue} />
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
