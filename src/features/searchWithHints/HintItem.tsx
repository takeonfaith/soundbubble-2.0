/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconDiscountCheckFilled } from "@tabler/icons-react";
import { TPlaylist } from "../../entities/playlist/model/types";
import { PlaylistCover } from "../../entities/playlist/ui/PlaylistCover";
import { TSong } from "../../entities/song/model/types";
import { SongCover } from "../../entities/song/ui/SongCover";
import { TUser } from "../../entities/user/model/types";
import { UserCover } from "../../entities/user/ui/UserCover";
import { Authors } from "../../shared/components/authors";
import { Flex } from "../../shared/components/flex";
import { ENTITIES_ICONS } from "../../shared/constants/icons";
import { THEME } from "../../shared/constants/theme";
import { getEntityType } from "./lib/getEntityType";
import { HintIcon, HintItemStyled, HintName } from "./styles";

type Props = {
  item: any;
  suggestedIndex?: number | null
  icon?: React.ReactNode
  index: number | null
  handleSubmitSuggestion: (index: number | null) => void;
};

export const HintItem = ({ item, handleSubmitSuggestion, suggestedIndex, index, icon }: Props) => {
  const type = getEntityType(item)
  const hintIcon = icon ?? ENTITIES_ICONS[type]

  const coverDictionary = (type: keyof typeof ENTITIES_ICONS, el: any) => {
    const covers = {
      user: <UserCover isAuthor={false} src={(el as TUser).photoURL} color={el.imageColors?.[0]} size="30px" />,
      author: <UserCover isAuthor src={(el as TUser).photoURL} color={el.imageColors?.[0]} size="30px" />,
      song: <SongCover src={(el as TSong).cover} color={(el as TSong).imageColors[0]} size={"30px"} />,
      playlist: <PlaylistCover src={(el as TPlaylist).image} color={el.imageColors?.[0]} size="30px" />,
    }

    return covers[type]
  }

  return <HintItemStyled
    className={suggestedIndex === index ? "selected" : ""}
    key={item.id ?? item.uid + index}
    onClick={() => handleSubmitSuggestion(index)}
  >
    <Flex gap={8} width="100%">
      {index === 0 && coverDictionary(type, item)}
      {index !== 0 && <HintIcon>{hintIcon}</HintIcon>}
      <HintName>{item.name ?? item.displayName}</HintName>
      {item.isVerified && <IconDiscountCheckFilled size={18} style={{ color: THEME.colors.blue.main }} />}
    </Flex>
    {item.authors && <Authors authors={item.authors} />}
  </HintItemStyled>
};
