import { useUnit } from 'effector-react';
import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import {
    $isLoadingSuggestions,
    $searchQuery,
    $searchSuggestions,
    getSearchResult,
    setSearchQuery,
    setSuggestions,
} from '../../entities/search/model';
import { TEntity } from '../../entities/search/model/types';
import { userModel } from '../../entities/user/model';
import { SearchWithHints } from '../../features/searchWithHints';
import { getEntityName } from '../../features/searchWithHints/lib/getDividedEntity';
import { getEntityType } from '../../features/searchWithHints/lib/getEntityType';
import { Header } from '../../layout/header';
import { normalizeString } from '../../shared/funcs/normalizeString';
import { SearchResult } from './SearchResult';

const SearchBarStyled = styled.div`
    max-width: 650px;
    width: 100%;
    min-width: 300px;

    @media (max-width: 1000px) {
        width: 100%;
        max-width: none;
    }
`;

const SearchStyled = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
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
    const [searchQuery, setQuery, isLoadingSuggestions] = useUnit([
        $searchQuery,
        setSearchQuery,
        $isLoadingSuggestions,
    ]);

    const searchHistory = userModel.useSearchHistory();
    const suggestions = useUnit($searchSuggestions);
    const [getResult] = useUnit([getSearchResult]);

    const handleChange = (val: string) => {
        clearTimeout(debounceTimer.current);

        debounceTimer.current = setTimeout(() => {
            // setQuery(val);
        }, 300);
    };

    const handleSuggestionSubmit = (hint: TEntity) => {
        const query = getEntityName(hint);
        const type = getEntityType(hint);
        console.log({ type });

        navigate(`/search?query=${query}&type=${type}`);
    };

    const onChangeSuggestions = (suggestions: TEntity[]) => {
        setSuggestions(suggestions);
    };

    const onSumbit = (value: string) => {
        console.log('onSumbit');

        navigate(`/search?query=${value}&type=query`);
    };

    useEffect(() => {
        if (queryValue) {
            console.log({ queryValue });

            getResult(normalizeString(queryValue));
        }
    }, [getResult, queryValue]);

    return (
        <SearchStyled>
            <Header>
                <SearchBarStyled>
                    <SearchWithHints
                        initialValue={queryValue ?? searchQuery}
                        suggestions={suggestions}
                        historySuggestions={searchHistory}
                        areSuggestionsLoading={isLoadingSuggestions}
                        onChange={handleChange}
                        onChangeSuggestions={onChangeSuggestions}
                        onSumbit={onSumbit}
                        onSuggestionSubmit={handleSuggestionSubmit}
                    />
                </SearchBarStyled>
            </Header>
            <SearchResult />
        </SearchStyled>
    );
};
