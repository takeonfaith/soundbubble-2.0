import { Authors } from '@components/authors';
import { Flex } from '@components/flex';
import { songModel } from '@song/model';
import { IconPlaylist, IconQuote, IconVolume } from '@tabler/icons-react';
import { SongCover } from '../../entities/song/ui/SongCover';

import { LikeButton } from '@features/likeButton';
import { SmallControlButton } from '../../shared/components/musicControls/styles';
import { PlayerMusicControls } from './PlayerMusicControls';
import {
    BottomControlButtons,
    LeftSide,
    PlayerCover,
    PlayerTitle,
    PlayerWrapper,
} from './styles';
import { TRightSideType } from './types';
import { useIsSongLiked } from '../../shared/hooks/useIsSongLiked';

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
    const { currentSong } = songModel.useSong();
    const isLiked = useIsSongLiked(currentSong);

    const onAuthorClick = () => songModel.fullscreen.close();

    return (
        <LeftSide>
            <PlayerWrapper>
                <PlayerCover $color1={currentSong?.imageColors[0]}>
                    <SongCover
                        size="400px"
                        colors={currentSong?.imageColors}
                        src={currentSong?.cover}
                    />
                </PlayerCover>

                <Flex d="column" gap={2}>
                    <Flex width="100%" gap={10}>
                        <PlayerTitle>
                            {currentSong?.name ?? 'Untitled'}
                        </PlayerTitle>
                        <LikeButton
                            isLiked={isLiked}
                            height="30px"
                            song={currentSong}
                            onClick={() => null}
                            likeColor={currentSong?.imageColors[1]}
                        />
                    </Flex>
                    <Authors
                        authors={currentSong?.authors}
                        onAuthorClick={onAuthorClick}
                    />
                </Flex>
                <PlayerMusicControls />
                <BottomControlButtons>
                    <SmallControlButton>
                        <IconVolume opacity={0.9} />
                    </SmallControlButton>
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
