import { Input } from "@components/input";
import { Loading } from "@components/loading";
import {
  IconSearch,
  IconX
} from "@tabler/icons-react";
import { HintItem } from "./HintItem";
import { getHintId } from "./lib/getDividedHint";
import {
  HintsStyled,
  SearchWithHintsStyled
} from "./styles";
import { SearchSuggestionProps } from "./types";
import { useSearchWithHints } from "./useSearchWithHints";

export const SearchWithHints = (props: SearchSuggestionProps) => {
  const { inputValue, ref, localHistorySuggestions, showHints, suggestedIndex, handleFocus, handleBlur, handleKeyDown, handleChange, onRightIconClick, handleSubmitSuggestion } = useSearchWithHints(props)
  const { suggestions, areSuggestionsLoading } = props

  return (
    <SearchWithHintsStyled >
      <Input
        icon={<IconSearch />}
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onFocus={handleFocus}
        onClick={handleFocus}
        onBlur={handleBlur}
        placeholder="Search..."
        rightIcon={areSuggestionsLoading ? <Loading /> : inputValue ? <IconX /> : null}
        onRightIconClick={onRightIconClick}
        type="text"
      />
      {showHints && <HintsStyled ref={ref} onClick={e => e.preventDefault()}>
        {localHistorySuggestions?.map((el, index) => {
          return (
            <HintItem value={inputValue} searchHistory suggestedIndex={suggestedIndex} item={el} index={index} key={getHintId(el)} handleSubmitSuggestion={handleSubmitSuggestion} />
          );
        })}
        {suggestions.map((el, index) => {
          if (!el) return null;

          console.log(localHistorySuggestions.length + index);


          return (
            <HintItem value={inputValue} suggestedIndex={suggestedIndex} item={el} index={localHistorySuggestions.length + index} key={getHintId(el) + index} handleSubmitSuggestion={handleSubmitSuggestion} />
          );
        })}
      </HintsStyled>}
    </SearchWithHintsStyled>
  );
};
