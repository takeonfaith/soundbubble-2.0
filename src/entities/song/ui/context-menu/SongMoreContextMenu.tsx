import {
    IconChevronRight,
    IconEditCircle,
    IconHeart,
    IconHeartBroken,
    IconInfoCircle,
    IconPlaylistAdd,
    IconSparkles,
    IconSquareRoundedPlus,
    IconTrash,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import { AddSongToPlaylistModal } from '../../../../features/addSongToPlaylistModal';
import { ShareButton } from '../../../../features/shareButton';
import { BadgeStyled } from '../../../../features/shareModal/styles';
import { translate } from '../../../../i18n';
import { confirmModel } from '../../../../layout/confirm/model';
import { modalModel } from '../../../../layout/modal/model';
import { Popup } from '../../../../layout/newpopup';
import { useLoadingToast } from '../../../../layout/toast/hooks/useLoadingToast';
import { Server } from '../../../../server';
import { Button } from '../../../../shared/components/button';
import { DefaultContextMenuStyled } from '../../../../shared/components/defaultContextMenu';
import { Divider } from '../../../../shared/components/divider';
import { Flex } from '../../../../shared/components/flex';
import { Loading } from '../../../../shared/components/loading';
import Popover from '../../../../shared/components/popover';
import { SwitchToggle } from '../../../../shared/components/switchToggle';
import { ENTITIES_ICONS } from '../../../../shared/constants/icons';
import { NO_ACCOUNT_FOR_ACTION } from '../../../../shared/constants/texts';
import { userModel } from '../../../user/model';
import { useToggleLike } from '../../hooks/useToggleLike';
import { TSong } from '../../model/types';
import { songModel } from '../../new-model';
import { slowSongsApi, useIsSlowVersion } from '../../new-model/slow-songs';
import { AuthorsModal } from '../AuthorsModal';
import { EditSongModal } from '../EditSongModal';
import { SongInfo } from '../SongInfo';
import { AddToPlaylistsContextMenu } from './AddToPlaylistsContextMenu';
import { AuthorsContextMenu } from './AuthorsContextMenu';

const SlowButton = styled(Button)`
    justify-content: space-between !important;

    & svg {
        color: ${({ theme }) => theme.scheme.pink.action} !important;
    }
`;

type Props = {
    song: TSong | null | undefined;
    onRemove?: (song: TSong) => void;
};

export const SongMoreContextMenu = ({ song, onRemove }: Props) => {
    const [currentUser] = userModel.useUser();
    const [library] = userModel.useSongLibrary();
    const isLiked = library?.find((s) => s.id === song?.id);
    const navigate = useNavigate();
    const { handleToggleLike, performingAction } = useToggleLike(song);
    const isSlowVersion = useIsSlowVersion(song?.id);

    const createSlow = async () => {
        if (song) {
            await Server.transformById(song.id);
        }
    };

    const onClickCreateSlow = useLoadingToast(
        createSlow,
        'Slow version created'
    );

    if (!song) return null;

    const handleAddToPlaylist = () => {
        modalModel.events.open({
            title: `Add "${song?.name}" to playlist`,
            content: <AddSongToPlaylistModal song={song} />,
            sizeY: 'l',
        });
    };

    const handleOpenAuthors = () => {
        if ((song?.authors.length ?? 0) > 1) {
            modalModel.events.open({
                title: `${song?.name ?? '-'} authors`,
                content: (
                    <AuthorsModal authors={song?.authors} isAuthor={true} />
                ),
            });
        } else {
            navigate(`/author/${song?.authors[0].uid}`);
        }
    };

    const handleLike = (e: Evt<'btn'>) => {
        if (song) {
            handleToggleLike(e);
        }
    };

    const handleInfoModal = () => {
        modalModel.events.open({
            title: ``,
            content: <SongInfo song={song} />,
        });
    };

    const handleEditModal = () => {
        if (song) {
            modalModel.events.open({
                title: `Edit "${song?.name}"`,
                content: <EditSongModal song={song} />,
                sizeY: 'l',
            });
        }
    };

    const handleAddNext = () => {
        if (song) {
            songModel.queue.addAfterCurrentSongInQueue(song);
        }
    };

    const handleAddToTheEnd = () => {
        if (song) {
            songModel.queue.addToTheEndOfQueue(song);
        }
    };

    const handleSlow = (e: Evt<'input' | 'btn'>) => {
        e.preventDefault();
        e.stopPropagation();

        if (isSlowVersion) {
            slowSongsApi.remove(song.id);
        } else {
            slowSongsApi.add([song.id]);
        }
    };

    const handleCreateSlow = () => {
        confirmModel.events.open({
            icon: <IconSparkles />,
            iconColor: 'purple',
            text: 'Are you sure you want to create slow version of this song?',
            onAccept: async () => {
                onClickCreateSlow();
            },
        });
    };

    return (
        <DefaultContextMenuStyled>
            {onRemove && (
                <>
                    <Button
                        onClick={() => {
                            if (song) {
                                onRemove?.(song);
                            }
                        }}
                        className="danger"
                    >
                        <IconTrash />
                        {translate('delete_from_playlist')}
                    </Button>
                    <Divider />
                </>
            )}
            <Popover content={!currentUser ? NO_ACCOUNT_FOR_ACTION : null}>
                <Button
                    disabled={!currentUser || performingAction}
                    onClick={handleLike}
                >
                    {performingAction ? (
                        <Loading />
                    ) : isLiked ? (
                        <IconHeartBroken />
                    ) : (
                        <IconHeart size={20} />
                    )}
                    {isLiked
                        ? translate('remove_from_liked')
                        : translate('add_to_liked')}
                </Button>
            </Popover>
            <Popover content={!currentUser ? NO_ACCOUNT_FOR_ACTION : null}>
                <Popup
                    content={<AddToPlaylistsContextMenu song={song} />}
                    triggers={['hover']}
                    position="left"
                >
                    <Button
                        disabled={!currentUser}
                        onClick={handleAddToPlaylist}
                    >
                        <Flex width="100%" jc="space-between">
                            <Flex gap={15}>
                                <IconSquareRoundedPlus size={20} />
                                {translate('add_to_playlist')}
                            </Flex>
                            <IconChevronRight />
                        </Flex>
                    </Button>
                </Popup>
            </Popover>
            <Divider />
            <Button onClick={handleAddNext}>
                <IconPlaylistAdd />
                {translate('next')}
            </Button>
            <Button onClick={handleAddToTheEnd}>
                <IconPlaylistAdd />
                {translate('at_the_end')}
            </Button>
            <Divider />
            <ShareButton entity={song} type="menu" />
            <Button onClick={handleInfoModal}>
                <IconInfoCircle />
                {translate('info')}
            </Button>
            <Popup
                triggers={['hover']}
                position="left"
                content={
                    song.authors.length > 1 ? (
                        <AuthorsContextMenu authors={song.authors} />
                    ) : null
                }
            >
                <Button onClick={handleOpenAuthors}>
                    <Flex jc="space-between" width="100%">
                        <Flex gap={15}>
                            {ENTITIES_ICONS.author}
                            {translate('authors')}
                        </Flex>
                        {song.authors.length > 1 ? <IconChevronRight /> : null}
                    </Flex>
                </Button>
            </Popup>
            {currentUser?.isAdmin && (
                <>
                    <Divider />
                    <SlowButton onClick={handleEditModal}>
                        <Flex gap={16}>
                            <IconEditCircle />
                            Edit song
                        </Flex>
                        <BadgeStyled>Admin</BadgeStyled>
                    </SlowButton>
                </>
            )}

            <>
                {!currentUser?.isAdmin && <Divider />}
                <Popover
                    content={
                        !song.slowSrc && !currentUser?.isAdmin ? (
                            <div>Not ready yet</div>
                        ) : undefined
                    }
                    position="top"
                >
                    {(song.slowSrc || !currentUser?.isAdmin) && (
                        <SlowButton
                            onClick={handleSlow}
                            disabled={!song.slowSrc}
                        >
                            <Flex gap={16}>
                                <IconSparkles />
                                {translate('slow_version')}
                            </Flex>
                            <SwitchToggle
                                onChange={(e) => handleSlow(e)}
                                size="s"
                                checked={isSlowVersion}
                            />
                        </SlowButton>
                    )}
                    {!song.slowSrc && currentUser?.isAdmin && (
                        <SlowButton onClick={handleCreateSlow}>
                            <Flex gap={16}>
                                <IconSparkles />
                                Create slow
                            </Flex>

                            <BadgeStyled>Admin</BadgeStyled>
                        </SlowButton>
                    )}
                </Popover>
            </>
        </DefaultContextMenuStyled>
    );
};
