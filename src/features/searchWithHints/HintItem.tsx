/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    IconArrowUpLeft,
    IconDiscountCheckFilled,
    IconHistory,
} from '@tabler/icons-react';
import { useTheme } from 'styled-components';
import { TPlaylist } from '../../entities/playlist/model/types';
import { PlaylistCover } from '../../entities/playlist/ui/PlaylistCover';
import { TSong } from '../../entities/song/model/types';
import { SongCover } from '../../entities/song/ui/SongCover';
import { TUser } from '../../entities/user/model/types';
import { UserCover } from '../../entities/user/ui/UserCover';
import { Authors } from '../../shared/components/authors';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { ENTITIES_ICONS } from '../../shared/constants/icons';
import { getEntityName } from './lib/getDividedEntity';
import { getEntityType } from './lib/getEntityType';
import { HintIcon, HintItemStyled, HintName } from './styles';

type Props = {
    item: any;
    value: string;
    suggestedIndex?: number | null;
    icon?: React.ReactNode;
    index: number | null;
    searchHistory?: boolean;
    handleSubmitSuggestion: (index: number | null) => void;
};

export const HintItem = ({
    item,
    handleSubmitSuggestion,
    suggestedIndex,
    index,
    icon,
    searchHistory,
}: Props) => {
    const type = getEntityType(item);
    const hintIcon = icon ?? ENTITIES_ICONS[type];
    const theme = useTheme();
    const hintName = getEntityName(item);
    const showCover = false;
    // !searchHistory &&
    // (value.length >= 4 ||
    //     normalizeString(value).includes(normalizeString(hintName))) &&
    // index === 0;

    const coverDictionary = (type: keyof typeof ENTITIES_ICONS, el: any) => {
        const covers = {
            user: (
                <UserCover
                    isAuthor={false}
                    src={(el as TUser).photoURL}
                    colors={el.imageColors}
                    size="30px"
                />
            ),
            author: (
                <UserCover
                    isAuthor
                    src={(el as TUser).photoURL}
                    colors={el.imageColors}
                    size="30px"
                />
            ),
            song: (
                <SongCover
                    src={(el as TSong).cover}
                    colors={(el as TSong).imageColors}
                    size={'30px'}
                />
            ),
            playlist: (
                <PlaylistCover
                    src={(el as TPlaylist).image}
                    colors={el.imageColors}
                    size="30px"
                    isAlbum={false}
                />
            ),
            album: (
                <PlaylistCover
                    src={(el as TPlaylist).image}
                    colors={el.imageColors}
                    size="30px"
                    isAlbum
                />
            ),
        };

        return covers[type];
    };

    return (
        <HintItemStyled
            className={suggestedIndex === index ? 'selected' : ''}
            key={item.id ?? item.uid + index}
            onClick={() => handleSubmitSuggestion(index)}
        >
            <Flex gap={8} width="100%">
                {searchHistory && (
                    <HintIcon>
                        <IconHistory />
                    </HintIcon>
                )}
                {showCover && coverDictionary(type, item)}
                {!searchHistory && !showCover && (
                    <HintIcon>{hintIcon}</HintIcon>
                )}
                <Flex d="column" ai="flex-start">
                    <HintName>{hintName}</HintName>
                    {item.authors && (
                        <Authors disableOnDesktop authors={item.authors} />
                    )}
                </Flex>
                {item.isVerified && (
                    <IconDiscountCheckFilled
                        size={18}
                        style={{ color: theme.colors.blue.main }}
                    />
                )}
            </Flex>
            <Button $width="40px">
                <IconArrowUpLeft size={20} />
            </Button>
        </HintItemStyled>
    );
};
