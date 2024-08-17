import { IconAt } from '@tabler/icons-react';
import { SearchWithHints } from '../searchWithHints';
import { getSuggestions } from './getSuggestions';

type Props = {
    onChange: (value: string) => void;
    value: string;
    required: boolean;
    error: string | undefined;
    focusOnLoad?: boolean;
};

export const EmailInput = (props: Props) => {
    const { value, onChange, focusOnLoad } = props;
    const suggestions = getSuggestions(value);

    return (
        <SearchWithHints
            suggestions={suggestions}
            focusOnLoad={focusOnLoad}
            historySuggestions={[]}
            areSuggestionsLoading={false}
            onSumbit={(val) => onChange(val)}
            icon={<IconAt />}
            placeholder="Enter your email"
            label="Email"
            hintIcon={null}
            initialValue={value}
            disableCopyButton
            type="email"
            autoCapitalize="false"
            {...props}
        />
    );
};
