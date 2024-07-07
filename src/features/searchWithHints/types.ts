import { TSuggestion } from '../../entities/search/model/types';

export type SearchSuggestionProps = {
    initialValue: string;
    suggestions: TSuggestion[];
    historySuggestions: TSuggestion[];
    areSuggestionsLoading: boolean;
    onChange: (value: string) => void;
    onSumbit: (value: string, suggestion: TSuggestion | null) => void;
};
