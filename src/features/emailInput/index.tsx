import { IconAt } from '@tabler/icons-react';
import { SearchWithHints } from '../searchWithHints';
import { getSuggestions } from './getSuggestions';

type Props = {
    onChange: (value: string) => void;
    value: string;
    required: boolean;
    error: string | undefined;
};

export const EmailInput = (props: Props) => {
    const { value, onChange } = props;
    const suggestions = getSuggestions(value);

    return (
        <SearchWithHints
            {...props}
            suggestions={suggestions}
            historySuggestions={[]}
            areSuggestionsLoading={false}
            onSumbit={(val) => onChange(val)}
            icon={<IconAt />}
            placeholder='Enter your email'
            label="Email"
            hintIcon={null}
            initialValue={value}
            disableCopyButton
            type="email"
        />
    );
};
