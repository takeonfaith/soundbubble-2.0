import { Input } from "@components/input";
import { debounce } from "@shared/funcs/debounce";
import { normalizeString } from "@shared/funcs/normalizeString";
import {
  IconDiscountCheckFilled,
  IconMicrophone2,
  IconMusic,
  IconSearch,
  IconUser,
  IconVinyl,
} from "@tabler/icons-react";
import { Database } from "database";
import { useEffect, useState } from "react";
import {
  HintIcon,
  HintItemStyled,
  HintsStyled,
  HintName,
  SearchWithHintsStyled,
} from "./styles";
import { Loading } from "@components/loading";
import { Authors } from "@components/authors";
import { Flex } from "@components/flex";
import { THint } from "./types";
import { THEME } from "../../shared/constants/theme";

type Props = {
  initialValue?: string | null;
  onSuggestionSubmit?: (hint: THint) => void;
};

export const SearchWithHints = ({
  initialValue = "",
  onSuggestionSubmit,
}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [hints, setHints] = useState<any[]>([]);
  const [showHints, setShowHints] = useState(false);
  const [value, setValue] = useState(initialValue ?? "");
  const [suggestedIndex, setSuggestedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  // TODO: оптимизировать запрос так, чтобы при наборе слова он сверялся
  // с уже имеющимися подсказками и если они не изменились не делал лишних
  // запросов
  // Пример: only дает результат onlyfans
  // Точно такой же как и вся строка onlyfans
  //
  useEffect(() => {
    setLoading(true);
    return debounce(
      () =>
        Database.SearchSuggestions.getSearchSuggestions(
          normalizeString(value)
        ).then((suggestions) => {
          console.log('suggestions', suggestions);

          setLoading(false);
          setHints(suggestions);
          setShowHints(suggestions.length > 0);
        }),
      150
    );
  }, [value]);

  const handleFocus = () => {
    setShowHints(hints.length > 0);
  };

  const handleBlur = () => {
    setShowHints(false);
  };

  const handleSubmitSuggestion = (index: number | null) => {
    if (index !== null) {
      if (!onSuggestionSubmit) {
        setValue(hints[index].displayName ?? hints[index].name);
        setHints([]);
        setShowHints(false);
        setSuggestedIndex(null);
        return;
      }

      onSuggestionSubmit(hints[index]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);

    if (e.currentTarget.value.length === 0) {
      setShowHints(false);
      setSuggestedIndex(null);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (hints.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSuggestedIndex((prev) =>
        prev === null ? 0 : prev === hints.length - 1 ? null : prev + 1
      );
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setSuggestedIndex((prev) =>
        prev === 0 ? null : prev === null ? hints.length - 1 : prev - 1
      );
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmitSuggestion(suggestedIndex);

      return;
    }

    if (suggestedIndex !== null) {
      setValue(e.currentTarget.value)
      setSuggestedIndex(null)
    }
  };

  return (
    <SearchWithHintsStyled>
      <Input
        icon={<IconSearch />}
        value={
          suggestedIndex !== null
            ? hints[suggestedIndex]?.displayName ?? hints[suggestedIndex]?.name
            : value
        }
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Search..."
        rightIcon={loading && <Loading />}
      />
      {showHints && (
        <HintsStyled>
          {hints.map((el, index) => {
            if (!el) return null;
            //  console.log(el);
            const icon = el.isAuthor ? (
              <IconMicrophone2 />
            ) : el.displayName !== undefined ? (
              <IconUser />
            ) : el.subscribers !== undefined ? (
              <IconVinyl />
            ) : (
              <IconMusic />
            );

            return (
              <HintItemStyled
                className={suggestedIndex === index ? "selected" : ""}
                key={el.id ?? el.uid + index}
                onClick={() => handleSubmitSuggestion(index)}
              >
                <Flex gap={8} width="100%">
                  {index === 0 && (
                    <img src={el?.cover ?? el.photoURL ?? el.image} />
                  )}
                  {index !== 0 && <HintIcon>{icon}</HintIcon>}
                  <HintName>{el.name ?? el.displayName}</HintName>
                  {el.isVerified && <IconDiscountCheckFilled size={18} style={{ color: THEME.colors.blue.main}} />}
                </Flex>
                {el.authors && <Authors authors={el.authors} />}
              </HintItemStyled>
            );
          })}
        </HintsStyled>
      )}
    </SearchWithHintsStyled>
  );
};
