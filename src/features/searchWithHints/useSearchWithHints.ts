import React, { useEffect, useRef, useState } from 'react';
import { normalizeString } from '../../shared/funcs/normalizeString';
import { getEntityName } from './lib/getDividedEntity';
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
    const listOfSuggestions = [...localHistorySuggestions, ...suggestions];
    const ref = useRef<HTMLDivElement>(null);
    const [focused, setFocused] = useState(false);

    const inputValue =
        suggestedIndex !== null
            ? getEntityName(listOfSuggestions[suggestedIndex])
            : value;

    const handleFocus = () => {
        setFocused(true);
        setShowHints(listOfSuggestions.length > 0);
    };

    useEffect(() => {
        setShowHints(focused && listOfSuggestions.length > 0);
    }, [listOfSuggestions.length, focused]);

    const handleBlur = () => {
        setFocused(false);
        setShowHints(false);
    };

    useEffect(() => {
        const newHistory =
            value?.length !== 0
                ? historySuggestions.filter((el) => {
                      return normalizeString(getEntityName(el)).includes(
                          normalizeString(value ?? '')
                      );
                  })
                : historySuggestions;

        setLocalHistorySuggestions(newHistory);
    }, [historySuggestions, value]);

    const handleSubmitSuggestion = (index: number | null) => {
        if (index !== null) {
            const newValue = `${getEntityName(listOfSuggestions[index])} ${
                'authors' in listOfSuggestions[index]
                    ? listOfSuggestions[index].authors[0].displayName
                    : ''
            }`;

            setValue(newValue);

            if (!onSuggestionSubmit) {
                console.log(getEntityName(listOfSuggestions[index]));

                onChangeSuggestions([]);
                setShowHints(false);
                setSuggestedIndex(null);
                return;
            }

            setShowHints(false);

            onSuggestionSubmit(listOfSuggestions[index]);
            return;
        }

        setFocused(false);
        setShowHints(false);
        onSumbit(inputValue);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value;
        console.log('value::::::', val);

        onChange(val);
        setValue(val);
        setShowHints(listOfSuggestions.length > 0);

        if (e.currentTarget.value.length === 0) {
            setShowHints(false);
            setSuggestedIndex(null);
        }
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
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
            console.log('here --- ');

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

    const handleReset = () => {
        setValue('');
    };

    return {
        inputValue,
        showHints,
        ref,
        suggestedIndex,
        localHistorySuggestions,
        handleFocus,
        handleBlur,
        handleReset,
        handleKeyDown,
        handleChange,
        onRightIconClick,
        handleSubmitSuggestion,
    };
};
