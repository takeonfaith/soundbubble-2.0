import { Authors } from '@components/authors';
import { Loading } from '@components/loading';
import { LikeButton } from '@features/likeButton';
import {
    IconDots,
    IconHeadphones,
    IconPlayerPauseFilled,
    IconPlayerPlayFilled,
    IconSparkles,
    IconSquareRoundedMinusFilled,
} from '@tabler/icons-react';
import { popupModel } from '../../../layout/popup/model';
import { PlayingAnimation } from '../../../shared/components/playingAnimation';
import Popover from '../../../shared/components/popover';
import { Subtext } from '../../../shared/components/subtext';
import { SLOW_SONGS_FACTOR } from '../../../shared/constants';
import { formatBigNumber } from '../../../shared/funcs/formatBigNumber';
import { useToggleLike } from '../hooks/useToggleLike';
import { getHumanDuration } from '../lib/getHumanDuration';
import { TSong } from '../model/types';
import { slowSongsApi, useIsSlowVersion } from '../new-model/slow-songs';
import { SongCover } from './SongCover';
import { SongMoreContextMenu } from './SongMoreContextMenu';
import {
    DeleteButton,
    Listens,
    LoadingOverlay,
    MoreInfoButton,
    PauseOverlay,
    PlayButton,
    PlayOverlay,
    SerialNumberStyled,
    SongAuthors,
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
    index: number;
    noImage?: boolean;
    showSerialNumber?: number;
    children?: React.ReactNode;
    isEditing?: boolean;
    onClick: (song: TSong, e: Evt<'div'>, index: number) => void;
    onRemove?: (song: TSong) => void;
    leftContent?: React.ReactNode;
};

export const SongItem = ({
    song,
    playing,
    loading,
    index,
    showSerialNumber,
    children,
    isEditing,
    onClick,
    onRemove,
    leftContent,
}: Props) => {
    const { name, authors, imageColors, cover, listens, duration } = song;
    const { handleToggleLike, performingAction, isLiked } = useToggleLike(song);
    const isSlowVersion = useIsSlowVersion(song.id);

    const handleMore: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();

        popupModel.events.open({
            content: <SongMoreContextMenu onRemove={onRemove} song={song} />,
            height: onRemove ? 402 : 345.5,
            e,
        });
    };

    const handleClick = (e: Evt<'div'>) => {
        if (!isEditing) {
            onClick(song, e, index);
        }
    };

    return (
        <SongStyled
            onClick={handleClick}
            tabIndex={0}
            role="button"
            aria-pressed="false"
            className={`${playing || loading ? 'playing' : ''} ${
                performingAction ? 'disabled' : ''
            }`}
        >
            {showSerialNumber !== undefined && (
                <SerialNumberStyled>
                    #{showSerialNumber + index + 1}
                </SerialNumberStyled>
            )}
            {isEditing && onRemove && (
                <SerialNumberStyled>
                    <DeleteButton
                        onClick={() => onRemove(song)}
                        $height="35px"
                        $width="35px"
                    >
                        <IconSquareRoundedMinusFilled />
                    </DeleteButton>
                </SerialNumberStyled>
            )}
            {leftContent && (
                <SerialNumberStyled>{leftContent}</SerialNumberStyled>
            )}
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
                            <PlayingAnimation color={imageColors[1]} playing />
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
                            {formatBigNumber(listens)}
                            <IconHeadphones />
                        </Listens>
                    </SongNameAndListens>
                    <SongAuthors>
                        <Authors authors={authors} disableOnMobile />
                    </SongAuthors>
                </SongInfo>
            </SongLeft>
            <Listens className="outside">
                {listens}
                <IconHeadphones />
            </Listens>
            <SongButtons>
                <Popover
                    content={
                        !song.slowSrc
                            ? 'Not ready yet'
                            : isSlowVersion
                            ? 'Disable slow version'
                            : 'Slow version'
                    }
                >
                    <MoreInfoButton
                        onClick={() => {
                            if (song.slowSrc) {
                                if (isSlowVersion) {
                                    slowSongsApi.remove(song.id);
                                } else {
                                    slowSongsApi.add([song.id]);
                                }
                            }
                        }}
                        disabled={!song.slowSrc}
                        className={isSlowVersion ? 'current' : ''}
                    >
                        <IconSparkles size={20} />
                    </MoreInfoButton>
                </Popover>
                {!children && (
                    <LikeButton
                        width="35px"
                        height="35px"
                        entity={song}
                        isLiked={isLiked}
                        likeColor={'grey'}
                        onClick={handleToggleLike}
                        loading={performingAction}
                    />
                )}
                <Subtext className="duration">
                    {getHumanDuration(
                        isSlowVersion ? duration / SLOW_SONGS_FACTOR : duration
                    )}
                </Subtext>
                {children ?? (
                    <MoreInfoButton onClick={handleMore}>
                        <IconDots />
                    </MoreInfoButton>
                )}
                {/* {isEditing && (
                    <Button
                        $width="45px"
                        $height="35px"
                        style={{ cursor: '-webkit-grab' }}
                    >
                        <IconMenu2 opacity={0.5} size={18} />
                    </Button>
                )} */}
            </SongButtons>
        </SongStyled>
    );
};
