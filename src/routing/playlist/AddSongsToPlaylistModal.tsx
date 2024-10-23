import styled from 'styled-components';
import { TPlaylist } from '../../entities/playlist/model/types';
import { SongItem } from '../../entities/song/ui';
import { userModel } from '../../entities/user/model';
import { AddEntitiesUI } from '../../features/addEntitiesUI';
import { Button } from '../../shared/components/button';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { CheckIcon } from '../../shared/components/checkIcon';
import { modalModel } from '../../layout/modal/model';
import {
    addSongsToPlaylistsFx,
    playlistModel,
} from '../../entities/playlist/model';
import { TSong } from '../../entities/song/model/types';
import { useUnit } from 'effector-react';

const AddSongsToPlaylistModalStyled = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 0px;
`;

type Props = {
    playlist: TPlaylist | null;
};

export const AddSongsToPlaylistModal = ({ playlist }: Props) => {
    const [library] = userModel.useSongLibrary();
    const [isAdding] = useUnit([addSongsToPlaylistsFx.pending]);

    if (!playlist) return null;

    const handleSave = (songs: TSong[]) => {
        return () => {
            playlistModel.events.addSongsToPlaylists({
                songs,
                playlists: [playlist],
                onSuccess: () => {
                    modalModel.events.close();
                },
            });
        };
    };

    return (
        <AddSongsToPlaylistModalStyled>
            <AddEntitiesUI
                entities={library}
                initiallyAddedItems={[]}
                inputPlaceholder={'Search for songs'}
                renderItem={(song, checked, onClick) => (
                    <SongItem
                        song={song}
                        playing={false}
                        loading={false}
                        index={0}
                        onClick={onClick}
                    >
                        <Button $width="40px">
                            <CheckIcon checked={checked} type={'plus'} />
                        </Button>
                    </SongItem>
                )}
                renderButton={(addedSongs) => {
                    return (
                        <DefaultButton
                            appearance="primary"
                            loading={isAdding}
                            onClick={handleSave(addedSongs)}
                        >
                            Save changes
                        </DefaultButton>
                    );
                }}
            />
        </AddSongsToPlaylistModalStyled>
    );
};
