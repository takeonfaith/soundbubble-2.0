import { TSuggestion } from '../../entities/search/model/types';
import { InputProps } from '../../shared/components/input/types';

export type SearchSuggestionProps = Omit<InputProps, 'onChange'> & {
    initialValue: string;
    suggestions: TSuggestion[];
    historySuggestions: TSuggestion[];
    areSuggestionsLoading: boolean;
    hintIcon?: React.ReactNode;
    disableCopyButton?: boolean;
    focusOnLoad?: boolean;
    onChange: (value: string) => void;
    onSumbit: (value: string, suggestion: TSuggestion | null) => void;
};
