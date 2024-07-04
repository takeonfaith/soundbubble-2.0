import { TEntity } from '../../entities/search/model/types';

export type SearchSuggestionProps = {
    initialValue: string;
    suggestions: TEntity[];
    historySuggestions: TEntity[];
    areSuggestionsLoading: boolean;
    onChange: (value: string) => void;
    onChangeSuggestions: (suggestions: TEntity[]) => void;
    onSumbit: (value: string) => void;
    onSuggestionSubmit: (suggestion: TEntity) => void;
};
