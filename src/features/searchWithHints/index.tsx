import { Input } from '@components/input';
import { IconSearch } from '@tabler/icons-react';
import { SuggestionList } from './SuggestionList';
import { HintsStyled, SearchWithHintsStyled } from './styles';
import { SearchSuggestionProps } from './types';
import { useSearchWithHints } from './useSearchWithHints';

export const SearchWithHints = (props: SearchSuggestionProps) => {
    const {
        selectedSuggestion,
        rightIcon,
        showSuggestions,
        visibleSearchHistory,
        allSuggestions,
        visibleInputValue,
        ref,
        handleSubmit,
        handleChange,
        handleReset,
        handleFocus,
        handleCopyName,
        handleKeyDown,
    } = useSearchWithHints(props);
    const { suggestions, hintIcon, disableCopyButton } = props;

    return (
        <SearchWithHintsStyled onKeyDown={handleKeyDown}>
            <Input
                id="inputsearch"
                icon={<IconSearch />}
                value={visibleInputValue}
                autoComplete="off"
                placeholder="Search..."
                aria-autocomplete="list"
                aria-controls="autocomplete-list"
                onFocus={handleFocus}
                rightIcon={rightIcon}
                ref={ref}
                onRightIconClick={handleReset}
                enterKeyHint="done"
                type="text"
                {...props}
                onChange={handleChange}
            />
            {showSuggestions && allSuggestions.length > 0 && (
                <HintsStyled>
                    <SuggestionList
                        suggestions={visibleSearchHistory}
                        selected={selectedSuggestion}
                        handleCopyName={handleCopyName}
                        handleSubmit={handleSubmit}
                        isSearchHistory
                        disableCopyButton={disableCopyButton}
                        hintIcon={hintIcon}
                    />
                    <SuggestionList
                        startIndex={visibleSearchHistory.length}
                        suggestions={suggestions}
                        selected={selectedSuggestion}
                        handleCopyName={handleCopyName}
                        handleSubmit={handleSubmit}
                        disableCopyButton={disableCopyButton}
                        hintIcon={hintIcon}
                    />
                </HintsStyled>
            )}
        </SearchWithHintsStyled>
    );
};
