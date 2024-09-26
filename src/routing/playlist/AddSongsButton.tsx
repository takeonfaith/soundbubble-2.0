import styled from 'styled-components';
import { Button } from '../../shared/components/button';
import { IconPlus } from '@tabler/icons-react';
import { modalModel } from '../../layout/modal/model';
import { AddSongsToPlaylistModal } from './AddSongsToPlaylistModal';
import { TPlaylist } from '../../entities/playlist/model/types';

const AddSongsButtonStyled = styled(Button)`
    font-weight: 200;
    border-radius: 10px;
    font-size: 0.9rem;
    justify-content: flex-start;
    gap: 20px;
    padding: 8px;
    width: 100%;
	 padding: 8px;
`;

const IconWrapper = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.hover};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: ${({ theme }) => theme.scheme.blue.action};
    }
`;

type Props = {
    playlist: TPlaylist | null;
};

export const AddSongsButton = ({ playlist }: Props) => {
    const handleAddSongs = () => {
        modalModel.events.open({
            title: 'Add songs to playlist',
            content: <AddSongsToPlaylistModal playlist={playlist} />,
            sizeY: 'l',
        });
    };

    return (
        <AddSongsButtonStyled onClick={handleAddSongs}>
            <IconWrapper>
                <IconPlus size={22} />
            </IconWrapper>
            Add songs
        </AddSongsButtonStyled>
    );
};
