import { Input } from '@components/input';
import { Loading } from '@components/loading';
import { IconSearch, IconX } from '@tabler/icons-react';
import { HintItem } from './HintItem';
import { getEntityId } from './lib/getDividedEntity';
import { HintsStyled, SearchWithHintsStyled } from './styles';
import { SearchSuggestionProps } from './types';
import { useSearchWithHints } from './useSearchWithHints';

export const SearchWithHints = (props: SearchSuggestionProps) => {
    const {
        inputValue,
        ref,
        localHistorySuggestions,
        showHints,
        suggestedIndex,
        handleFocus,
        handleKeyDown,
        handleChange,
        handleReset,
        handleBlur,
        onRightIconClick,
        handleSubmitSuggestion,
    } = useSearchWithHints(props);
    const { suggestions, areSuggestionsLoading } = props;

    return (
        <SearchWithHintsStyled onKeyDown={handleKeyDown}>
            <Input
                id="inputsearch"
                icon={<IconSearch />}
                value={inputValue}
                onChange={handleChange}
                onFocus={handleFocus}
                autoComplete="off"
                onClick={handleFocus}
                placeholder="Search..."
                rightIcon={
                    areSuggestionsLoading ? (
                        <Loading />
                    ) : inputValue ? (
                        <IconX onClick={handleReset} />
                    ) : null
                }
                onRightIconClick={onRightIconClick}
                type="text"
            />
            {showHints && (
                <HintsStyled
                    id="hints"
                    ref={ref}
                    // onClick={(e) => e.preventDefault()}
                >
                    {localHistorySuggestions?.map((el, index) => {
                        return (
                            <HintItem
                                value={inputValue}
                                searchHistory
                                suggestedIndex={suggestedIndex}
                                item={el}
                                index={index}
                                key={getEntityId(el)}
                                handleSubmitSuggestion={handleSubmitSuggestion}
                            />
                        );
                    })}
                    {suggestions.map((el, index) => {
                        if (!el) return null;

                        return (
                            <HintItem
                                value={inputValue}
                                suggestedIndex={suggestedIndex}
                                item={el}
                                index={localHistorySuggestions.length + index}
                                key={getEntityId(el) + index}
                                handleSubmitSuggestion={handleSubmitSuggestion}
                            />
                        );
                    })}
                </HintsStyled>
            )}
        </SearchWithHintsStyled>
    );
};
