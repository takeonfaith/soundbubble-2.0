import { useUnit } from 'effector-react';
import {
    addSongsToPlaylistsFx,
    playlistModel,
} from '../../entities/playlist/model';
import { TPlaylist } from '../../entities/playlist/model/types';
import { PlaylistItem } from '../../entities/playlist/ui';
import { TSong } from '../../entities/song/model/types';
import { userModel } from '../../entities/user/model';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { CheckIcon } from '../../shared/components/checkIcon';
import { Flex } from '../../shared/components/flex';
import { AddEntitiesUI } from '../addEntitiesUI';

type Props = {
    song: TSong | null;
};

export const AddSongToPlaylistModal = ({ song }: Props) => {
    const [playlists] = userModel.useOwnPlaylists();
    const [loading] = useUnit([addSongsToPlaylistsFx.pending]);

    const handleAdd = (playlists: TPlaylist[]) => {
        return () => {
            if (!song) return;

            playlistModel.events.addSongsToPlaylists({
                songs: [song],
                playlists,
                onSuccess: () => {
                    modalModel.events.close();
                },
            });
        };
    };

    return (
        <Flex width="100%" d="column" padding="0 18px">
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
                            <Button $width="45px">
                                <CheckIcon type="plus" checked={checked} />
                            </Button>
                        </PlaylistItem>
                    );
                }}
                renderButton={(playlists) => (
                    <>
                        <DefaultButton
                            appearance="primary"
                            onClick={handleAdd(playlists)}
                            loading={loading}
                        >
                            Save changes
                        </DefaultButton>
                    </>
                )}
                initiallyAddedItems={[]}
            />
        </Flex>
    );
};
