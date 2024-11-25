import { useState } from 'react';
import { GlobalSearch } from '../../features/globalSearch';
import styled from 'styled-components';
import { userModel } from '../../entities/user/model';
import { Flex } from '../../shared/components/flex';
import { SongItem } from '../../entities/song/ui';
import { TSong } from '../../entities/song/model/types';
import { CheckIcon } from '../../shared/components/checkIcon';
import { TPlaylist } from '../../entities/playlist/model/types';

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
    const [value, setValue] = useState('');
    const [library] = userModel.useSongLibrary();

    if (!playlist) return null;

    return (
        <AddSongsToPlaylistModalStyled>
            <GlobalSearch queryValue={value} where={'songs'} showTabs={false} />
            <Flex d="column" width="100%" gap={2} padding="20px 0">
                {library.map((song) => {
                    const isInPlaylist = !!playlist.songs.find(
                        (s) => s === song.id
                    );
                    return (
                        <SongItem
                            song={song}
                            playing={false}
                            loading={false}
                            loaded={false}
                            index={0}
                            onClick={function (
                                song: TSong,
                                index: number
                            ): void {
                                throw new Error('Function not implemented.');
                            }}
                        >
                            <CheckIcon checked={isInPlaylist} />
                        </SongItem>
                    );
                })}
            </Flex>
        </AddSongsToPlaylistModalStyled>
    );
};
