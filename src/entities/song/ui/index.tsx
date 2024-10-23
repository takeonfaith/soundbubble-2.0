import { Authors } from '@components/authors';
import { Loading } from '@components/loading';
import { LikeButton } from '@features/likeButton';
import {
    IconDots,
    IconHeadphones,
    IconPlayerPauseFilled,
    IconPlayerPlayFilled,
} from '@tabler/icons-react';
import { popupModel } from '../../../layout/popup/model';
import { PlayingAnimation } from '../../../shared/components/playingAnimation';
import { Subtext } from '../../../shared/components/subtext';
import { formatBigNumber } from '../../../shared/funcs/formatBigNumber';
import { useToggleLike } from '../hooks/useToggleLike';
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
    onClick: (song: TSong, e: Evt<'div'>, index: number) => void;
    noImage?: boolean;
    showSerialNumber?: boolean;
    children?: React.ReactNode;
};

export const SongItem = ({
    song,
    playing,
    loading,
    index,
    onClick,
    showSerialNumber,
    children,
}: Props) => {
    const { name, authors, imageColors, cover, listens, duration } = song;
    const { handleToggleLike, performingAction, isLiked } = useToggleLike(song);

    const handleMore: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();

        popupModel.events.open({
            content: <SongMoreContextMenu song={song} />,
            height: 272.5,
            e,
        });
    };

    const handleClick = (e: Evt<'div'>) => onClick(song, e, index);

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
            {showSerialNumber && (
                <SerialNumberStyled>#{index + 1}</SerialNumberStyled>
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
                    {getHumanDuration(duration)}
                </Subtext>
                {children ?? (
                    <MoreInfoButton onClick={handleMore}>
                        <IconDots />
                    </MoreInfoButton>
                )}
            </SongButtons>
        </SongStyled>
    );
};
