import { useState } from 'react';
import { useNavigate } from 'react-router';
import { TChatData, TMessage } from '../../../../entities/chat/model/types';
import { playlistModel } from '../../../../entities/playlist/model';
import { TPlaylist } from '../../../../entities/playlist/model/types';
import { PlaylistItem } from '../../../../entities/playlist/ui';
import { PlaylistCover } from '../../../../entities/playlist/ui/PlaylistCover';
import { confirmModel } from '../../../../layout/confirm/model';
import { DefaultButton } from '../../../../shared/components/button/DefaultButton';
import { Subtext } from '../../../../shared/components/subtext';
import { PlaylistInvitationStyled } from './styles';

type Props = {
    message: TMessage;
    isMine: boolean;
    chatData: TChatData;
    chatId: string;
};

const getSubtext = (isMine: boolean, message: TMessage) => {
    const hasExpired =
        new Date().getTime() - INVITATION_EXPIRE_TIME_INTERVAL >
        message.sentTime;

    if (isMine) {
        return { subtext: 'Invitation to playlist sent', hasExpired };
    }

    if (hasExpired) {
        return { subtext: 'Invitation has expired', hasExpired };
    }

    if (message.playlistInvitation?.accepted) {
        return { subtext: "You've accepted the invitation!", hasExpired };
    }

    return { subtext: "You've been invited to join this playlist", hasExpired };
};

// 3 days
const INVITATION_EXPIRE_TIME_INTERVAL = 259_200_000;

export const PlaylistInvitation = ({
    chatId,
    message,
    isMine,
    chatData,
}: Props) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { subtext, hasExpired } = getSubtext(isMine, message);

    if (!message.playlistInvitation?.id) return null;

    const showButton =
        !isMine && !hasExpired && !message.playlistInvitation.accepted;
    const playlist = chatData[message.playlistInvitation.id] as TPlaylist;

    const handleAccept = () => {
        confirmModel.events.open({
            icon: (
                <PlaylistCover
                    src={playlist.image}
                    size={'60px'}
                    colors={playlist.imageColors}
                    isAlbum={playlist.isAlbum}
                />
            ),
            iconColor: 'green',
            text: `Are you sure you want to join ${playlist.name
                .split(' ')
                .join('\xa0')}?`,
            subtext: 'You will be able to edit playlist ',
            onAccept: () => {
                setLoading(true);
                confirmModel.events.close();
                playlistModel.events.acceptInvitation({
                    playlist,
                    chatId,
                    messageId: message.id,
                    onSuccess: () => {
                        setLoading(false);
                        navigate(`/playlist/${message.playlistInvitation?.id}`);
                    },
                });
            },
        });
    };

    console.log('rerender');

    return (
        <PlaylistInvitationStyled $colors={playlist?.imageColors ?? []}>
            <PlaylistItem playlist={playlist} />
            <Subtext
                style={{
                    fontSize: '1rem',
                    maxWidth: '250px',
                    textAlign: 'center',
                    paddingBottom: !showButton ? '20px' : '0px',
                }}
            >
                {subtext}
            </Subtext>
            {showButton && (
                <DefaultButton
                    className="primary"
                    width="100%"
                    onClick={handleAccept}
                    disabled={!playlist}
                    primaryColor={playlist?.imageColors[0] ?? '#e0e0e0'}
                    loading={loading}
                >
                    Accept invitation
                </DefaultButton>
            )}
        </PlaylistInvitationStyled>
    );
};
