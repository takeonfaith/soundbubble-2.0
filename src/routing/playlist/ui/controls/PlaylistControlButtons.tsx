import {
    IconArrowsShuffle,
    IconCircleCheck,
    IconDots,
    IconPencil,
    IconPlus,
    IconSearch,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { ToggleLike } from '../../../../entities/playlist/hooks/useTogglePlaylistLike';
import { playlistModel } from '../../../../entities/playlist/model';
import { TPlaylist } from '../../../../entities/playlist/model/types';
import { SongState, TQueue } from '../../../../entities/song/model/types';
import { songModel } from '../../../../entities/song/new-model';
import { userModel } from '../../../../entities/user/model';
import { modalModel } from '../../../../layout/modal/model';
import { Popup } from '../../../../layout/newpopup';
import { Button } from '../../../../shared/components/button';
import { Flex } from '../../../../shared/components/flex';
import { Loading } from '../../../../shared/components/loading';
import Popover from '../../../../shared/components/popover';
import { AddSongsToPlaylistModal } from '../editing/AddSongsToPlaylistModal';
import { Like } from './Like';
import { PlayButton } from './PlayButton';
import { PlaylistMoreContext } from './PlaylistMoreContext';
import { PlaylistSearch } from './PlaylistSearch';
import { SlowButton } from './SlowButton';

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
    const { state } = songModel.useSong();

    const noSongs = queue.songs.length === 0;
    const [buttonType, setButtonType] = useState<
        'play' | 'shuffle' | 'slow' | null
    >(null);
    const isAuthor = currentUser
        ? playlist?.authors.find((author) => author.uid === currentUser.uid)
        : false;

    useEffect(() => {
        if (state === SongState.playing) {
            setButtonType(null);
        }
    }, [state]);

    const handleEdit = () => {
        playlistModel.events.updateIsEditing(!isEditing);
    };

    const handleAddSongs = () => {
        modalModel.events.open({
            title: 'Add songs to playlist',
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
                        Done editing
                    </Button>
                </Flex>
            )}
            {!noSongs && !isEditing && (
                <Flex gap={10}>
                    <MainButtonsWrapper>
                        <PlayButton
                            queue={queue}
                            state={state}
                            primaryColor={primaryColor}
                        />
                        <SlowButton
                            primaryColor={primaryColor}
                            state={state}
                            queue={queue}
                        />
                    </MainButtonsWrapper>
                    <Popover content="Shuffle">
                        <Button
                            $width="45px"
                            $height="45px"
                            className="outline"
                            style={{ borderRadius: '30px' }}
                            onClick={() => {
                                setButtonType('shuffle');
                                songModel.controls.shufflePlayPause({ queue });
                            }}
                        >
                            {buttonType === 'shuffle' ? (
                                <Loading />
                            ) : (
                                <IconArrowsShuffle size={20} />
                            )}
                        </Button>
                    </Popover>
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
                    Add songs
                </Button>
            )}
            <Flex gap={6}>
                {isAuthor && !isEditing && !noSongs && (
                    <Button
                        $width="130px"
                        className="ghost"
                        style={{
                            fontWeight: noSongs ? '400' : '300',
                            color: noSongs ? '#fff' : undefined,
                        }}
                        onClick={handleAddSongs}
                        $primaryColor={primaryColor}
                    >
                        <IconPlus size={20} />
                        Add songs
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
                        Search
                    </Button>
                )}
                {isAuthor && !isEditing && (
                    <Button
                        $width="90px"
                        className="ghost"
                        style={{ fontWeight: '300' }}
                        onClick={handleEdit}
                    >
                        <IconPencil size={18} />
                        Edit
                    </Button>
                )}

                {playlist && !isEditing && (
                    <Popup
                        content={<PlaylistMoreContext playlist={playlist} />}
                    >
                        <Button
                            $width="90px"
                            className="ghost"
                            style={{ fontWeight: '300' }}
                        >
                            <IconDots size={18} />
                            More
                        </Button>
                    </Popup>
                )}
            </Flex>
        </Flex>
    );
};
