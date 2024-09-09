import { playlistModel } from '../../entities/playlist/model';
import { PlaylistItem } from '../../entities/playlist/ui';
import { TSong } from '../../entities/song/model/types';
import { userModel } from '../../entities/user/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { CheckIcon } from '../../shared/components/checkIcon';
import { Flex } from '../../shared/components/flex';
import { AddEntitiesUI } from '../addEntitiesUI';

type Props = {
    song: TSong | null;
};

export const AddSongToPlaylistModal = ({ song }: Props) => {
    const [playlists] = userModel.useOwnPlaylists();
    // const [loading] = playlistModel.useAddingSongToPlaylists()

    const handleAdd = (playlistIds: string[]) => {
        if (!song) return;

        playlistModel.events.addSongToPlaylists({
            songId: song.id,
            playlistIds,
        });
    };

    return (
        <Flex width="100%" d="column" padding="0 25px">
            <AddEntitiesUI
                entities={playlists}
                inputPlaceholder={'Search for playlists...'}
                renderItem={(playlist, checked, onClick) => {
                    return (
                        <PlaylistItem
                            as="div"
                            playlist={playlist}
                            onClick={onClick}
                            key={playlist.id}
                            orientation="horizontal"
                        >
                            <CheckIcon checked={checked} />
                        </PlaylistItem>
                    );
                }}
                renderButton={(playlists) => (
                    <>
                        <DefaultButton
                            appearance="primary"
                            onClick={() =>
                                handleAdd(playlists.map((p) => p.id))
                            }
                        >
                            Save changes
                        </DefaultButton>
                    </>
                )}
            />
        </Flex>
    );
};
