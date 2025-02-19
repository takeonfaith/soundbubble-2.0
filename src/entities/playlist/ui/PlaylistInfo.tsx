import { IconHeadphones, IconUserPlus } from '@tabler/icons-react';
import styled from 'styled-components';
import { ShareButton } from '../../../features/shareButton';
import { translate } from '../../../i18n';
import { Flex } from '../../../shared/components/flex';
import { Subtext } from '../../../shared/components/subtext';
import { dateToString } from '../../../shared/funcs/dateToString';
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

    const formattedDate = dateToString(new Date(creationDate));
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

                <Flex gap={10} d="column">
                    <Subtext style={{ fontSize: '0.95rem' }}>
                        {translate('created', { created: formattedDate })}
                    </Subtext>
                </Flex>
            </Flex>
            <ShareButton entity={playlist} />
        </PlaylistInfoStyled>
    );
};
