import { IconHeartFilled, IconMusicOff } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
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
import { normalizeString } from '../../shared/funcs/normalizeString';
import { PageTop } from '../playlist/ui/layout/PageTop';

export const LikedSongs = () => {
    const [, , , searching] = playlistModel.usePlaylist();
    const [library, loading] = userModel.useSongLibrary();
    const [currentUser] = userModel.useUser();
    const [librarySongs, setLibrarySongs] = useState(library);
    const theme = useTheme();

    const queue = createQueueObject({
        name: 'Library',
        songs: librarySongs,
        url: '',
        id: 'library',
    });

    useEffect(() => {
        if (searching.value.length > 0) {
            setLibrarySongs(
                (library ?? []).filter((s) =>
                    normalizeString(s.name).includes(
                        normalizeString(searching.value)
                    )
                )
            );
        } else {
            setLibrarySongs(library ?? []);
        }
    }, [library, searching.value]);

    if (!currentUser) {
        return (
            <PageMessage
                icon={IconMusicOff}
                title={'Need to log in'}
                description={'To listen to your favorite songs'}
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
                        name="Liked Songs"
                        icon={<IconHeartFilled />}
                        playlist={null}
                        hasHeader
                        isOwner={false}
                        searching={searching}
                        imageColors={[theme.scheme.blue.action]}
                    />
                )}
                <VerticalSongsList queue={queue} />
            </SkeletonPageAnimation>
            {/* <AddButton /> */}
        </ContentWrapper>
    );
};
