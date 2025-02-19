import {
    IconCircleCheck,
    IconDots,
    IconPencil,
    IconPlus,
    IconSearch,
} from '@tabler/icons-react';
import { styled } from 'styled-components';
import { ToggleLike } from '../../../../entities/playlist/hooks/useTogglePlaylistLike';
import { playlistModel } from '../../../../entities/playlist/model';
import { TPlaylist } from '../../../../entities/playlist/model/types';
import { TQueue } from '../../../../entities/song/model/types';
import { userModel } from '../../../../entities/user/model';
import { modalModel } from '../../../../layout/modal/model';
import { Popup } from '../../../../layout/newpopup';
import { Button } from '../../../../shared/components/button';
import { Flex } from '../../../../shared/components/flex';
import { AddSongsToPlaylistModal } from '../editing/AddSongsToPlaylistModal';
import { Like } from './Like';
import { PlayButton } from './PlayButton';
import { PlaylistMoreContext } from './PlaylistMoreContext';
import { PlaylistSearch } from './PlaylistSearch';
import { ShuffleButton } from './ShuffleButton';
import { SlowButton } from './SlowButton';
import { translate } from '../../../../i18n';

export const MainButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    outline: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 24px;
`;

type Props = {
    playlist: TPlaylist | null;
    queue: TQueue;
    primaryColor?: string;
    isEditing?: boolean;
    searching:
        | {
              isSearching: boolean;
              value: string;
          }
        | undefined;
    likeModel?: (playlist: TPlaylist | null) => ToggleLike;
};

export const PlaylistControlButtons = ({
    playlist,
    isEditing,
    searching,
    queue,
    primaryColor,
    likeModel,
}: Props) => {
    const [currentUser] = userModel.useUser();

    const noSongs = queue.songs.length === 0;
    const isAuthor = currentUser
        ? playlist?.authors.find((author) => author.uid === currentUser.uid)
        : false;

    const handleEdit = () => {
        playlistModel.events.updateIsEditing(!isEditing);
    };

    const handleAddSongs = () => {
        modalModel.events.open({
            title: translate('add_songs_to_playlist'),
            content: <AddSongsToPlaylistModal playlist={playlist} />,
            sizeY: 'l',
        });
    };

    if (searching?.isSearching) {
        return <PlaylistSearch searching={searching} />;
    }

    return (
        <Flex width="fit-content" gap={20}>
            {isEditing && (
                <Flex>
                    <Button
                        className="primary"
                        $width="150px"
                        style={{ color: '#fff' }}
                        $primaryColor={primaryColor}
                        onClick={handleEdit}
                    >
                        <IconCircleCheck size={20} />
                        {translate('done_editing')}
                    </Button>
                </Flex>
            )}
            {!noSongs && !isEditing && (
                <Flex gap={10}>
                    <MainButtonsWrapper>
                        <PlayButton
                            queue={queue}
                            primaryColor={primaryColor}
                            showPlayingAnimation
                        />
                        <SlowButton primaryColor={primaryColor} queue={queue} />
                    </MainButtonsWrapper>
                    <ShuffleButton queue={queue} />
                </Flex>
            )}
            {isAuthor && !isEditing && noSongs && (
                <Button
                    $width="130px"
                    className="primary"
                    style={{
                        fontWeight: noSongs ? '400' : '300',
                        color: noSongs ? '#fff' : undefined,
                    }}
                    onClick={handleAddSongs}
                    $primaryColor={primaryColor ?? 'grey'}
                >
                    <IconPlus size={20} />
                    {translate('add_songs')}
                </Button>
            )}
            <Flex gap={6}>
                {isAuthor && !isEditing && !noSongs && (
                    <Button
                        $width="fit-content"
                        className="ghost"
                        style={{
                            fontWeight: noSongs ? '400' : '300',
                            color: noSongs ? '#fff' : undefined,
                            padding: '0 10px',
                        }}
                        onClick={handleAddSongs}
                        $primaryColor={primaryColor}
                    >
                        <IconPlus size={20} />
                        {translate('add_songs')}
                    </Button>
                )}
                {playlist && !isAuthor && (
                    <Like playlist={playlist} likeModel={likeModel} />
                )}
                {!isEditing && !noSongs && (
                    <Button
                        $width="100px"
                        className="ghost"
                        style={{ fontWeight: '300' }}
                        onClick={() =>
                            playlistModel.events.updateIsSearching(true)
                        }
                    >
                        <IconSearch size={18} />
                        {translate('search')}
                    </Button>
                )}
                {isAuthor && !isEditing && (
                    <Button
                        $width="fit-content"
                        className="ghost"
                        style={{ fontWeight: '300', padding: '0 10px' }}
                        onClick={handleEdit}
                    >
                        <IconPencil size={18} />
                        {translate('edit')}
                    </Button>
                )}

                {playlist && !isEditing && (
                    <Popup
                        content={
                            <PlaylistMoreContext
                                songs={queue.songs}
                                playlist={playlist}
                            />
                        }
                    >
                        <Button
                            $width="90px"
                            className="ghost"
                            style={{ fontWeight: '300' }}
                        >
                            <IconDots size={18} />
                            {translate('more')}
                        </Button>
                    </Popup>
                )}
            </Flex>
        </Flex>
    );
};
