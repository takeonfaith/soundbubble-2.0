import { Authors } from '@components/authors';
import { Flex } from '@components/flex';
import { songModel as songModelNew } from '@song/new-model';
import { songModel } from '@song/model';
import { IconPlaylist, IconQuote } from '@tabler/icons-react';
import { SongCover } from '../../entities/song/ui/SongCover';

import { LikeButton } from '@features/likeButton';
import { useToggleLike } from '../../entities/song/hooks/useToggleLike';
import { VolumeButton } from '../../features/volumeButton';
import { SmallControlButton } from '../../shared/components/musicControls/styles';
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

type Props = {
    type: TRightSideType;
    hasQueue: boolean;
    hasLyrics: boolean;
    handleClickControlButton: (type: TRightSideType) => () => void;
};

export const FullScreenPlayerLeftSide = ({
    type,
    hasLyrics,
    hasQueue,
    handleClickControlButton,
}: Props) => {
    const { currentSong } = songModelNew.useSong();
    const { handleToggleLike, isLiked, performingAction } =
        useToggleLike(currentSong);

    const onAuthorsClick = () => songModel.fullscreen.close();

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
                            {currentSong?.name ?? 'Untitled'}
                        </PlayerTitle>
                        <LikeButton
                            isLiked={isLiked}
                            height="30px"
                            entity={currentSong}
                            loading={performingAction}
                            onClick={handleToggleLike}
                            likeColor={currentSong?.imageColors[1]}
                        />
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
                            disabled={!hasLyrics}
                            $color1={currentSong?.imageColors[0]}
                            className={type === 'lyrics' ? 'selected' : ''}
                            onClick={handleClickControlButton('lyrics')}
                        >
                            <IconQuote opacity={0.9} />
                        </SmallControlButton>
                    </Flex>
                </BottomControlButtons>
            </PlayerWrapper>
        </LeftSide>
    );
};
