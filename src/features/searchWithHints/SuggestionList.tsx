import React from 'react';
import { HintItem } from './HintItem';
import { TExtendedSuggestion } from './types';

type Props = {
    suggestions: TExtendedSuggestion[];
    selected: number | null;
    startIndex?: number;
    isSearchHistory?: boolean;
    hintIcon?: React.ReactNode;
    disableCopyButton?: boolean;
    handleCopyName: (name: string) => void;
    handleSubmit: (index: number | null) => void;
};

export const SuggestionList = ({
    suggestions,
    selected,
    isSearchHistory,
    hintIcon,
    disableCopyButton,
    startIndex = 0,
    handleCopyName,
    handleSubmit,
}: Props) => {
    return suggestions.map((suggestion, index) => {
        const itemIndex = index + startIndex;
        const isSelected = selected !== null && itemIndex === selected;

        return (
            <HintItem
                isSelected={isSelected}
                item={suggestion}
                icon={hintIcon}
                searchHistory={isSearchHistory}
                key={suggestion.uid}
                disableCopyButton={disableCopyButton}
                handleCopyName={handleCopyName}
                handleSubmitSuggestion={() => handleSubmit(itemIndex)}
            />
        );
    });
};
