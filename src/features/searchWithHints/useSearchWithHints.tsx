import { IconX } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import { Loading } from '../../shared/components/loading';
import { normalizeString } from '../../shared/funcs/normalizeString';
import { SearchSuggestionProps } from './types';
import { useClickOutside } from '../../shared/hooks/useClickOutside';

export const useSearchWithHints = ({
    initialValue,
    suggestions,
    historySuggestions,
    onChange,
    onSumbit,
    areSuggestionsLoading,
}: SearchSuggestionProps) => {
    const [selectedSuggestion, setSelectedSuggestion] = useState<number | null>(
        null
    );
    const [inputValue, setInputValue] = useState(initialValue);
    const [visibleSearchHistory, setVisibleSearchHistory] =
        useState(historySuggestions);
    const allSuggestions = [...visibleSearchHistory, ...suggestions];
    const ref = useRef<HTMLDivElement>(null);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const visibleInputValue =
        selectedSuggestion !== null
            ? allSuggestions[selectedSuggestion]?.fullName
            : inputValue;

    useEffect(() => {
        if (inputValue === '') {
            setVisibleSearchHistory(historySuggestions);

            return;
        }

        setVisibleSearchHistory(
            historySuggestions.filter((h) =>
                normalizeString(h.fullName).includes(
                    normalizeString(inputValue)
                )
            )
        );
    }, [historySuggestions, inputValue]);

    useClickOutside(ref, () => {
        setShowSuggestions(false);
    });

    const handleReset = () => {
        onChange('');
        setInputValue('');
        ref.current?.focus();
        setShowSuggestions(true)
    };

    const rightIcon = areSuggestionsLoading ? (
        <Loading />
    ) : inputValue ? (
        <IconX />
    ) : null;

    const handleSubmit = (index: number | null) => {
        if (index === null) {
            if (visibleInputValue.length === 0) return;

            onSumbit(inputValue, null);
            setShowSuggestions(false);
            return;
        }

        onSumbit(allSuggestions[index].fullName, allSuggestions[index]);
        setSelectedSuggestion(null);
        setInputValue(allSuggestions[index].fullName);
        setShowSuggestions(false);
    };

    const handleChange = (e: Evt<'input'>) => {
        const newValue = e.target.value;

        onChange(newValue);
        setInputValue(newValue);
        setShowSuggestions(true);
        setSelectedSuggestion(null);
    };

    const handleFocus = () => {
        setShowSuggestions(allSuggestions.length > 0);
    };

    const handleCopyName = (name: string) => {
        // onChange(name);
        setInputValue(name);
        setShowSuggestions(false);
        ref.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();

            setSelectedSuggestion((prev) => {
                const newIndex = Math.min(
                    allSuggestions.length,
                    (prev ?? -1) + 1
                );
                return newIndex === allSuggestions.length ? null : newIndex;
            });
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();

            setSelectedSuggestion((prev) => {
                const newIndex = Math.max(
                    -1,
                    (prev ?? allSuggestions.length) - 1
                );
                return newIndex === -1 ? null : newIndex;
            });
        }

        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit(selectedSuggestion);
        }
    };

    return {
        inputValue,
        selectedSuggestion,
        rightIcon,
        showSuggestions,
        allSuggestions,
        visibleSearchHistory,
        ref,
        visibleInputValue,
        handleReset,
        handleFocus,
        handleCopyName,
        handleKeyDown,
        handleSubmit,
        handleChange,
    };
};
