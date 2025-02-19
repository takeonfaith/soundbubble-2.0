import { Authors } from '@components/authors';
import { Flex } from '@components/flex';
import { songModel, songModel as songModelNew } from '@song/new-model';
import { IconDots, IconPlaylist, IconQuote } from '@tabler/icons-react';
import { SongCover } from '../../entities/song/ui/SongCover';

import { LikeButton } from '@features/likeButton';
import { useToggleLike } from '../../entities/song/hooks/useToggleLike';
import { SongMoreContextMenu } from '../../entities/song/ui/context-menu/SongMoreContextMenu';
import { VolumeButton } from '../../features/volumeButton';
import { Button } from '../../shared/components/button';
import { SmallControlButton } from '../../shared/components/musicControls/styles';
import { Popup } from '../newpopup';
import { PlayerMusicControls } from './PlayerMusicControls';
import {
    BottomControlButtons,
    DESKTOP_COVER_WIDTH,
    LeftSide,
    PlayerCover,
    PlayerTitle,
    PlayerWrapper,
} from './styles';
import { TRightSideType } from './types';
import { translate } from '../../i18n';

type Props = {
    type: TRightSideType;
    hasQueue: boolean;
    handleClickControlButton: (type: TRightSideType) => () => void;
};

export const FullScreenPlayerLeftSide = ({
    type,
    hasQueue,
    handleClickControlButton,
}: Props) => {
    const { currentSong } = songModelNew.useSong();
    const { handleToggleLike, isLiked, performingAction } =
        useToggleLike(currentSong);

    const onAuthorsClick = () => songModel.fullscreenPlayer.close();

    return (
        <LeftSide>
            <PlayerWrapper>
                <PlayerCover $color1={currentSong?.imageColors[0]}>
                    <SongCover
                        size={DESKTOP_COVER_WIDTH}
                        colors={currentSong?.imageColors}
                        src={currentSong?.cover}
                    />
                </PlayerCover>

                <Flex d="column" gap={2} width="100%">
                    <Flex width="100%" gap={10} jc="space-between">
                        <PlayerTitle>
                            {currentSong?.name ?? translate('untitled')}
                        </PlayerTitle>
                        <Flex gap={8}>
                            <LikeButton
                                isLiked={isLiked}
                                disabled={!currentSong}
                                height="30px"
                                entity={currentSong}
                                loading={performingAction}
                                onClick={handleToggleLike}
                                likeColor={currentSong?.imageColors[1]}
                            />
                            <Popup
                                content={
                                    <SongMoreContextMenu song={currentSong} />
                                }
                            >
                                <Button
                                    disabled={!currentSong}
                                    $width="30px"
                                    $height="30px"
                                >
                                    <IconDots size={20} color="#fff" />
                                </Button>
                            </Popup>
                        </Flex>
                    </Flex>
                    <Authors
                        authors={currentSong?.authors}
                        onAuthorsClick={onAuthorsClick}
                        width="100%"
                    />
                </Flex>
                <PlayerMusicControls />
                <BottomControlButtons>
                    <VolumeButton />
                    <Flex gap={20}>
                        <SmallControlButton
                            disabled={!hasQueue}
                            $color1={currentSong?.imageColors[0]}
                            className={type === 'queue' ? 'selected' : ''}
                            onClick={handleClickControlButton('queue')}
                        >
                            <IconPlaylist opacity={0.9} />
                        </SmallControlButton>
                        <SmallControlButton
                            $color1={currentSong?.imageColors[0]}
                            className={type === 'lyrics' ? 'selected' : ''}
                            onClick={handleClickControlButton('lyrics')}
                            disabled={!currentSong?.hasLyrics}
                        >
                            <IconQuote opacity={0.9} />
                        </SmallControlButton>
                    </Flex>
                </BottomControlButtons>
            </PlayerWrapper>
        </LeftSide>
    );
};
