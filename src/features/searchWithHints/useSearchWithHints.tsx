import { IconX } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import { CSSProperties } from 'styled-components';
import { Loading } from '../../shared/components/loading';
import { normalizeString } from '../../shared/funcs/normalizeString';
import { SearchSuggestionProps } from './types';

export const useSearchWithHints = ({
    initialValue,
    suggestions,
    historySuggestions,
    areSuggestionsLoading,
    focusOnLoad,
    onChange,
    onSumbit,
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
    const visibleInputValue = inputValue;

    useEffect(() => {
        setInputValue(initialValue);
    }, [initialValue]);

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

    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        if (event.relatedTarget?.nodeName === 'LI') return;

        setShowSuggestions(false);
    };

    const handleReset = () => {
        onChange('');
        setInputValue('');
        ref.current?.focus();
        setShowSuggestions(true);
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
        if (suggestions.length === 1) {
            setSelectedSuggestion(0);
        } else {
            setSelectedSuggestion(null);
        }
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

    useEffect(() => {
        if (focusOnLoad && ref?.current) {
            ref.current.focus();
        }
    }, [focusOnLoad]);

    const getHintsStyle = (): CSSProperties | undefined => {
        if (!ref.current) return undefined;

        const targetRect = ref.current.getBoundingClientRect();

        const maxHeightInScreen =
            window.innerHeight -
            targetRect?.top +
            ref.current.offsetHeight -
            100;

        return {
            width: ref.current?.offsetWidth,
            top: targetRect?.top + ref.current.offsetHeight,
            left: targetRect?.left,
            maxHeight: Math.min(maxHeightInScreen, 565),
        };
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
        getHintsStyle,
        handleBlur,
    };
};
