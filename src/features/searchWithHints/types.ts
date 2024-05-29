import { TPlaylist } from '@playlist/model/types';
import { TSong } from '@song/model/types';
import { TUser } from '@user/model/types';

export type THint = TSong | TPlaylist | TUser;

export type SearchSuggestionProps = {
    initialValue: string;
    suggestions: THint[];
    historySuggestions: THint[];
    areSuggestionsLoading: boolean;
    onChange: (value: string) => void;
    onChangeSuggestions: (suggestions: THint[]) => void;
    onSumbit: (value: string) => void;
    onSuggestionSubmit: (suggestion: THint, index: number) => void;
};
