import {
    IconArrowLeft,
    IconDotsVertical,
    IconHeadphones,
    IconUserPlus,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { useTogglePlaylistLike } from '../../entities/playlist/hooks/useTogglePlaylistLike';
import { TPlaylist } from '../../entities/playlist/model/types';
import { PlaylistCover } from '../../entities/playlist/ui/PlaylistCover';
import { TQueue } from '../../entities/song/model/types';
import { ControlButtons } from '../../features/controlButtons';
import { LikeButton } from '../../features/likeButton';
import { Authors } from '../../shared/components/authors';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { formatBigNumber } from '../../shared/funcs/formatBigNumber';
import { Wave } from '../../shared/images';
import { ButtonsStyled } from '../author/styles';
import {
    PageTopStyled,
    TopBackground,
    TopLeftCorner,
    TopRightCorner,
} from './styles';
import { Popup } from '../../layout/newpopup';
import { AlbumContextMenu } from './AlbumContextMenu';

type Props = {
    album: TPlaylist | null;
    isOwner: boolean;
    handleClickShare: () => void;
    queue: TQueue;
};

export const PageTop = ({ album, queue }: Props) => {
    const navigate = useNavigate();

    const { isLiked, handleToggleLike, performingAction } =
        useTogglePlaylistLike(album);

    if (!album) return null;

    const { name, subscribers, imageColors, listens } = album;

    return (
        <PageTopStyled $colors={imageColors}>
            <PlaylistCover
                size="200px"
                isAlbum={album?.isAlbum ?? false}
                src={album?.image}
                colors={album?.imageColors}
            />
            <Flex gap={8} d="column" ai="center">
                <Flex gap={4} d="column">
                    <Flex gap={6}>
                        <h2>{name}</h2>
                    </Flex>
                    <div className="subtitle">
                        <Flex gap={3}>
                            {
                                <span
                                    style={{
                                        fontSize: '0.8rem',
                                        fontWeight: '300',
                                        opacity: '0.6',
                                    }}
                                >
                                    {album?.isAlbum ? 'Album' : 'Playlist'} ·{' '}
                                </span>
                            }
                            <Authors
                                width="fit-content"
                                authors={album?.authors}
                                isAuthor={album?.isAlbum}
                            />
                        </Flex>
                    </div>
                </Flex>
                <Flex
                    gap={20}
                    style={{ opacity: '0.8', fontWeight: '300' }}
                    className="stats"
                >
                    <Flex gap={4}>
                        {formatBigNumber(listens)}
                        <IconHeadphones size={16} />
                    </Flex>
                    <Flex gap={4}>
                        {formatBigNumber(subscribers)}
                        <IconUserPlus size={16} />
                    </Flex>
                </Flex>
            </Flex>
            <TopLeftCorner>
                <Button
                    $height="40px"
                    $width="40px"
                    onClick={() => navigate(-1)}
                >
                    <IconArrowLeft size={20} />
                </Button>
            </TopLeftCorner>
            <TopRightCorner>
                <LikeButton
                    entity={album}
                    isLiked={isLiked}
                    likeColor={'#fff'}
                    height="40px"
                    loading={performingAction}
                    width="40px"
                    onClick={handleToggleLike}
                />
                <Popup content={<AlbumContextMenu album={album} />}>
                    <Button $height="40px" $width="40px">
                        <IconDotsVertical size={20} />
                    </Button>
                </Popup>
            </TopRightCorner>
            <TopBackground>
                <img src={Wave} />
            </TopBackground>
            <ButtonsStyled $color={imageColors?.[0] ?? 'grey'}>
                <ControlButtons
                    queue={queue}
                    color={imageColors?.[0] ?? 'grey'}
                />
            </ButtonsStyled>
        </PageTopStyled>
    );
};
