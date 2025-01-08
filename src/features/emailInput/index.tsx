import { IconAt } from '@tabler/icons-react';
import { SearchWithHints } from '../searchWithHints';
import { getSuggestions } from './getSuggestions';
import { getEmailProviders } from './lib/getEmailProviders';

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
    const emailProviders = getEmailProviders();
    const found = emailProviders.find((p) => value.includes(p.fullName));
    const icon =
        value.length !== 0 ? found ? found.icon : <IconAt /> : <IconAt />;

    return (
        <SearchWithHints
            suggestions={suggestions}
            focusOnLoad={focusOnLoad}
            historySuggestions={[]}
            areSuggestionsLoading={false}
            onSumbit={(val) => onChange(val)}
            icon={icon}
            placeholder="Enter your email"
            label="Email"
            initialValue={value}
            disableCopyButton
            type="email"
            autoCapitalize="false"
            maxLength={60}
            {...props}
        />
    );
};
