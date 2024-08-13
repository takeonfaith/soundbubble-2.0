import { useUnit } from 'effector-react';
import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import {
    $isLoadingSuggestions,
    $searchQuery,
    $searchResult,
    $searchSuggestions,
    getSearchResult,
    setSearchQuery,
} from '../../entities/search/model';
import { userModel } from '../../entities/user/model';
import { SearchWithHints } from '../../features/searchWithHints';
import { Header } from '../../layout/header';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { normalizeString } from '../../shared/funcs/normalizeString';
import { SearchResult } from './SearchResult';
import { TSuggestion } from '../../entities/search/model/types';
import { Tabs } from '../../shared/components/tabs';

const SearchBarStyled = styled.div`
    max-width: 550px;
    width: 100%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 1000px) {
        width: 100%;
        max-width: none;
    }
`;

/**
 * Разница между getSuggestions и getSearchResult
 * getResult дает полный результат, то есть запрашивает инфу о
 * плейлистах исполнителя, топ 5 его треков, а элементы сортирует не по
 * индексу внутри поиска, а по прослушиваниям
 */

export const SearchPage = () => {
    const [params] = useSearchParams();
    const queryValue = params.get('query') ?? '';
    const navigate = useNavigate();
    const debounceTimer = useRef<NodeJS.Timeout>();
    const [searchQuery, result, isLoadingSuggestions, setQuery, getResult] =
        useUnit([
            $searchQuery,
            $searchResult,
            $isLoadingSuggestions,
            setSearchQuery,
            getSearchResult,
        ]);

    const searchHistory = userModel.useSearchHistory();
    const suggestions = useUnit($searchSuggestions);

    const handleChange = (val: string) => {
        clearTimeout(debounceTimer.current);

        debounceTimer.current = setTimeout(() => {
            setQuery(val);
        }, 100);
    };

    const onSumbit = (value: string, suggestion: TSuggestion | null) => {
        navigate(
            `/search?query=${value.trim()}&type=${
                suggestion !== null && suggestion.place === 'users'
                    ? 'author'
                    : 'query'
            }`
        );
        getResult({
            query: normalizeString(value),
            suggestion,
        });
    };

    useEffect(() => {
        if (queryValue.length > 0 && result.length === 0) {
            // если в поисковой строке есть что-то, но результатов нет,
            // то запросить результаты по введенному значению
            setQuery(queryValue);
            getResult({ query: normalizeString(queryValue) });
        }
    }, [getResult, queryValue, result.length, setQuery]);

    return (
        <PageWrapper>
            <Header>
                <SearchBarStyled>
                    <SearchWithHints
                        focusOnLoad
                        initialValue={queryValue ?? searchQuery}
                        suggestions={suggestions}
                        historySuggestions={searchHistory}
                        areSuggestionsLoading={isLoadingSuggestions}
                        onChange={handleChange}
                        onSumbit={onSumbit}
                    />
                    <Tabs
                        tabs={[
                            { title: 'All', url: '' },
                            { title: 'Songs', url: '' },
                            { title: 'Playlists', url: '' },
                            { title: 'Authors', url: '' },
                        ]}
                        chips
                    />
                </SearchBarStyled>
            </Header>
            <SearchResult />
        </PageWrapper>
    );
};
