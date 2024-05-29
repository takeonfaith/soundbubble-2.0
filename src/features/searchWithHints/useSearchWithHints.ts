import React, { useEffect, useRef, useState } from 'react';
import { normalizeString } from '../../shared/funcs/normalizeString';
import { getHintName } from './lib/getDividedHint';
import { SearchSuggestionProps } from './types';

export const useSearchWithHints = ({
    initialValue,
    suggestions,
    historySuggestions,
    onChange,
    onSumbit,
    onChangeSuggestions,
    onSuggestionSubmit,
}: SearchSuggestionProps) => {
    const [showHints, setShowHints] = useState(false);
    const [localHistorySuggestions, setLocalHistorySuggestions] =
        useState(historySuggestions);
    const [value, setValue] = useState(initialValue ?? '');
    const [suggestedIndex, setSuggestedIndex] = useState<number | null>(null);
    const listOfSuggestions = [...suggestions, ...localHistorySuggestions];
    const ref = useRef<HTMLDivElement>(null);

    const inputValue =
        suggestedIndex !== null
            ? getHintName(listOfSuggestions[suggestedIndex])
            : value;

    const handleFocus = () => {
        setShowHints(
            suggestions.length > 0 || (localHistorySuggestions?.length ?? 0) > 0
        );
    };

    const handleBlur = () => {
        setShowHints(false);
    };

    useEffect(() => {
        setLocalHistorySuggestions(historySuggestions);
    }, [historySuggestions]);

    const handleSubmitSuggestion = (index: number | null) => {
        if (index !== null) {
            if (!onSuggestionSubmit) {
                setValue(getHintName(suggestions[index]));
                onChangeSuggestions([]);
                setShowHints(false);
                setSuggestedIndex(null);
                return;
            }

            setShowHints(false);

            onSuggestionSubmit(listOfSuggestions[index], index);
            return 
        }
        setShowHints(false);

        onSumbit(inputValue);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value;
        console.log('value::::::', val);

        onChange(val);
        setValue(val);
        setShowHints(listOfSuggestions.length > 0);
        if (val.length !== 0) {
            console.log(localHistorySuggestions);
            const filteredHistorySuggestions = historySuggestions.filter(
                (el) => {
                    return normalizeString(getHintName(el)).includes(
                        normalizeString(val ?? '')
                    );
                }
            );
            setLocalHistorySuggestions(filteredHistorySuggestions);
        } else {
            setLocalHistorySuggestions(historySuggestions);
        }

        if (e.currentTarget.value.length === 0) {
            setShowHints(false);
            setSuggestedIndex(null);
        }
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (listOfSuggestions.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSuggestedIndex((prev) =>
                prev === null
                    ? 0
                    : prev === listOfSuggestions.length - 1
                    ? null
                    : prev + 1
            );
            return;
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();

            setSuggestedIndex((prev) =>
                prev === 0
                    ? null
                    : prev === null
                    ? listOfSuggestions.length - 1
                    : prev - 1
            );
            return;
        }

        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmitSuggestion(suggestedIndex);

            return;
        }

        if (suggestedIndex !== null) {
            setValue(e.currentTarget.value);
            setSuggestedIndex(null);
        }
    };

    const onRightIconClick = () => {
        onChange('');
    };

    return {
        inputValue,
        showHints,
        ref,
        suggestedIndex,
        localHistorySuggestions,
        handleFocus,
        handleBlur,
        handleKeyDown,
        handleChange,
        onRightIconClick,
        handleSubmitSuggestion,
    };
};
