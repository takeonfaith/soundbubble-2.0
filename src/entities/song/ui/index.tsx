import { Authors } from '@components/authors';
import { Loading } from '@components/loading';
import { LikeButton } from '@features/likeButton';
import {
    IconDots,
    IconHeadphones,
    IconPlayerPauseFilled,
    IconPlayerPlayFilled,
} from '@tabler/icons-react';
import { memo } from 'react';
import { popupModel } from '../../../layout/popup/model';
import { PlayingAnimation } from '../../../shared/components/playingAnimation';
import { Subtext } from '../../../shared/components/subtext';
import { useIsSongLiked } from '../../../shared/hooks/useIsSongLiked';
import { userModel } from '../../user/model';
import { getHumanDuration } from '../lib/getHumanDuration';
import { TSong } from '../model/types';
import { SongCover } from './SongCover';
import { SongMoreContextMenu } from './SongMoreContextMenu';
import {
    Listens,
    LoadingOverlay,
    MoreInfoButton,
    PauseOverlay,
    PlayButton,
    PlayOverlay,
    SongButtons,
    SongInfo,
    SongLeft,
    SongName,
    SongNameAndListens,
    SongStyled,
} from './styles';

type Props = {
    song: TSong;
    playing: boolean;
    loading: boolean;
    loaded: boolean;
    index: number;
    onClick: (song: TSong, index: number) => void;
    noImage?: boolean;
};

export const SongItem = memo(
    ({ song, playing, loading, index, onClick }: Props) => {
        const { name, authors, imageColors, cover, listens, duration } = song;
        const isLiked = useIsSongLiked(song);

        const handleMore: React.MouseEventHandler<HTMLButtonElement> = (e) => {
            e.stopPropagation();

            popupModel.events.open({
                content: <SongMoreContextMenu song={song} />,
                height: 272.5,
                e,
            });
        };

        const handleClick = () => onClick(song, index);

        const handleLike = () => {
            if (song) {
                userModel.events.addSongToLibrary(song);
            }
        };

        return (
            <SongStyled
                onClick={handleClick}
                tabIndex={0}
                role="button"
                aria-pressed="false"
                className={playing || loading ? 'playing' : ''}
            >
                <SongLeft $color1={imageColors[0]}>
                    <SongCover size="35px" src={cover} colors={imageColors}>
                        {!loading && !playing && (
                            <PlayOverlay>
                                <PlayButton>
                                    <IconPlayerPlayFilled className="action-icon" />
                                </PlayButton>
                            </PlayOverlay>
                        )}
                        {!loading && playing && (
                            <PauseOverlay>
                                <PlayButton>
                                    <IconPlayerPauseFilled className="action-icon" />
                                </PlayButton>
                                <PlayingAnimation
                                    color={imageColors[1]}
                                    playing
                                />
                            </PauseOverlay>
                        )}
                        {loading && (
                            <LoadingOverlay>
                                <Loading />
                            </LoadingOverlay>
                        )}
                    </SongCover>
                    <SongInfo>
                        <SongNameAndListens>
                            <SongName>{name}</SongName>
                            <Listens>
                                {listens}
                                <IconHeadphones />
                            </Listens>
                        </SongNameAndListens>
                        <Authors
                            width="100%"
                            authors={authors}
                            disableOnMobile
                        />
                    </SongInfo>
                </SongLeft>
                <Listens className="outside">
                    {listens}
                    <IconHeadphones />
                </Listens>
                <SongButtons>
                    <LikeButton
                        width="35px"
                        height="35px"
                        song={song}
                        isLiked={isLiked}
                        likeColor={'red'}
                        onClick={handleLike}
                    />
                    <Subtext className="duration">
                        {getHumanDuration(duration)}
                    </Subtext>
                    <MoreInfoButton onClick={handleMore}>
                        <IconDots />
                    </MoreInfoButton>
                </SongButtons>
            </SongStyled>
        );
    }
);

SongItem.displayName = 'SongItem';
