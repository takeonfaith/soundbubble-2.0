import { Input } from "@components/input";
import { Loading } from "@components/loading";
import { debounce } from "@shared/funcs/debounce";
import { normalizeString } from "@shared/funcs/normalizeString";
import {
  IconSearch
} from "@tabler/icons-react";
import { Database } from "database";
import { useEffect, useState } from "react";
import { HintItem } from "./HintItem";
import {
  HintsStyled,
  SearchWithHintsStyled
} from "./styles";
import { THint } from "./types";

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
    <SearchWithHintsStyled

    >
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
        placeholder="Search..."
        rightIcon={loading && <Loading />}
      />
      {showHints && <HintsStyled onClick={e => e.preventDefault()}>
        {normalizeString(value) !== normalizeString(hints[0].displayName ?? hints[0].name) ? <HintItem suggestedIndex={suggestedIndex} item={{ name: value }} icon={<IconSearch />} index={null} key={-1} handleSubmitSuggestion={handleSubmitSuggestion} /> : null}
        {hints.map((el, index) => {
          if (!el) return null;

          return (
            <HintItem suggestedIndex={suggestedIndex} item={el} index={index} key={el.id ?? el.uid} handleSubmitSuggestion={handleSubmitSuggestion} />
          );
        })}
      </HintsStyled>}
    </SearchWithHintsStyled>
  );
};
