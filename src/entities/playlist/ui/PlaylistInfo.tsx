import { IconHeadphones, IconUserPlus } from '@tabler/icons-react';
import styled from 'styled-components';
import { ShareModal } from '../../../features/shareModal';
import { modalModel } from '../../../layout/modal/model';
import { Button } from '../../../shared/components/button';
import { Flex } from '../../../shared/components/flex';
import { Subtext } from '../../../shared/components/subtext';
import { formatBigNumber } from '../../../shared/funcs/formatBigNumber';
import { hexToRgbA } from '../../../shared/funcs/hexToRgba';
import { TPlaylist } from '../model/types';
import { PlaylistCover } from './PlaylistCover';

const PlaylistInfoStyled = styled.div<{ shadowColor: string }>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: calc(100% - 20px);
    padding: 0 20px;

    .general-cover {
        box-shadow: 0 40px 70px
            ${({ shadowColor }) => `rgba(${hexToRgbA(shadowColor)}, 0.4)`};
    }

    .authors {
        width: fit-content;
        font-size: 0.95rem;

        a {
            font-size: 0.95rem;
        }
    }
`;

const ShareButton = styled(Button)`
    color: #fff;
    filter: ${({ theme }) => theme.colors.brightness};

    &.primary {
        background: ${({ color }) => color ?? 'grey'};
        box-shadow: none;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

type Props = {
    playlist: TPlaylist | null;
};

export const PlaylistInfo = ({ playlist }: Props) => {
    if (!playlist) return null;

    const {
        image,
        name,
        subscribers,
        listens,
        imageColors,
        creationDate,
        isAlbum,
    } = playlist;

    const formattedDate = new Date(creationDate).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    const handleShare = () => {
        modalModel.events.open({
            title: `Share ${name} with friends`,
            content: <ShareModal entity={playlist} />,
            sizeY: 'l',
        });
    };

    return (
        <PlaylistInfoStyled shadowColor={imageColors[0] ?? '#e0e0e0'}>
            <PlaylistCover
                isAlbum={isAlbum}
                size="200px"
                src={image}
                colors={imageColors}
            />
            <Flex d="column" gap={20} height="100%">
                <Flex d="column" gap={10}>
                    <h2>{name}</h2>
                    <Flex
                        gap={10}
                        style={{ opacity: '0.8', fontWeight: '300' }}
                        className="stats"
                    >
                        <Flex gap={4}>
                            {formatBigNumber(listens)}
                            <IconHeadphones size={16} />
                        </Flex>
                        ·
                        <Flex gap={4}>
                            {formatBigNumber(subscribers)}
                            <IconUserPlus size={16} />
                        </Flex>
                    </Flex>
                </Flex>

                <Flex gap={10}>
                    <Subtext style={{ fontSize: '0.95rem' }}>
                        Created: {formattedDate}
                    </Subtext>
                </Flex>
            </Flex>
            <Buttons>
                <ShareButton
                    className="primary"
                    color={imageColors[0]}
                    onClick={handleShare}
                >
                    Share
                </ShareButton>
            </Buttons>
        </PlaylistInfoStyled>
    );
};
