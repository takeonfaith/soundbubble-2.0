import { TSuggestion } from '../../entities/search/model/types';
import { InputProps } from '../../shared/components/input/types';

export type TExtendedSuggestion = Pick<
    TSuggestion,
    'fullName' | 'uid' | 'place'
> & {
    icon?: React.ReactNode;
};

export type SearchSuggestionProps = Omit<InputProps, 'onChange'> & {
    initialValue: string;
    suggestions: TExtendedSuggestion[];
    historySuggestions: TExtendedSuggestion[];
    areSuggestionsLoading: boolean;
    hintIcon?: React.ReactNode;
    disableCopyButton?: boolean;
    focusOnLoad?: boolean;
    rightSide?: React.ReactNode;
    onChange: (value: string) => void;
    onSumbit: (value: string, suggestion: TExtendedSuggestion | null) => void;
};
