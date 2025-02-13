import { IconLock, IconWorld } from '@tabler/icons-react';
import { playlistModel } from '../../../../entities/playlist/model';
import { TPlaylist } from '../../../../entities/playlist/model/types';
import { Button } from '../../../../shared/components/button';
import { DefaultContextMenuStyled } from '../../../../shared/components/defaultContextMenu';

type Props = { playlist: TPlaylist | null; isOwner: boolean };

export const MakePrivateContext = ({ playlist, isOwner }: Props) => {
    const handlePrivate = () => {
        if (isOwner) {
            playlistModel.events.updatePlaylist({
                update: {
                    isPrivate: !playlist?.isPrivate,
                },
            });
        }
    };

    return (
        <DefaultContextMenuStyled>
            <Button onClick={handlePrivate}>
                {playlist?.isPrivate ? (
                    <>
                        <IconWorld /> Make publuc
                    </>
                ) : (
                    <>
                        <IconLock /> Make private
                    </>
                )}
            </Button>
        </DefaultContextMenuStyled>
    );
};
