import { useUnit } from 'effector-react';
import { useCallback, useEffect, useRef } from 'react';
import {
    Location,
    useLocation,
    useNavigate,
    useSearchParams,
} from 'react-router-dom';
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
import { TExtendedSuggestion } from '../../features/searchWithHints/types';
import { Header } from '../../layout/header';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { normalizeString } from '../../shared/funcs/normalizeString';
import { SearchResult } from './SearchResult';
import { Tabs, TTab } from '../../shared/components/tabs';
import { Divider } from '../../shared/components/divider';
import { TPlace } from '../../entities/search/model/types';

const SearchBarStyled = styled.div`
    max-width: 650px;
    width: 100%;
    min-width: 300px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    max-height: 40px;

    @media (max-width: 1000px) {
        width: 100%;
        max-width: none;
        max-height: none;
    }
`;

const TabsWrapper = styled.div`
    padding: 10px 0;
    background: ${({ theme }) => theme.colors.pageBackground};
`;

const getTabUrl = (
    location: Location<unknown>,
    title: string | undefined,
    queryValue: string | undefined
) => {
    if (!title) {
        return `${location.search.replace(/[&?]where=\S*/g, '')}`;
    }

    return `${location.search.replace(/[&?]where=\S*/g, '')}${
        queryValue ? '&' : '?'
    }where=${title}`;
};

/**
 * Разница между getSuggestions и getSearchResult
 * getResult дает полный результат, то есть запрашивает инфу о
 * плейлистах исполнителя, топ 5 его треков, а элементы сортирует не по
 * индексу внутри поиска, а по прослушиваниям
 */

export const SearchPage = () => {
    const [params] = useSearchParams();
    const queryValue = params.get('query') ?? '';
    const where: string = params.get('where') ?? '';
    const navigate = useNavigate();
    const debounceTimer = useRef<NodeJS.Timeout>();
    const location = useLocation();
    const tabs = [
        {
            title: 'All',
            url: getTabUrl(location, undefined, queryValue),
        },
        {
            title: 'Songs',
            url: getTabUrl(location, 'songs', queryValue),
        },
        {
            title: 'Playlists',
            url: getTabUrl(location, 'playlists', queryValue),
        },
        {
            title: 'Users',
            url: getTabUrl(location, 'users', queryValue),
        },
    ];

    const currentTab = tabs.findIndex(
        (tab) => tab.title.toLocaleLowerCase() === where
    );

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

    const onSumbit = (
        value: string,
        suggestion: TExtendedSuggestion | null
    ) => {
        navigate(
            `/search?query=${value.trim()}&type=${
                suggestion !== null && suggestion.place === 'users'
                    ? 'author'
                    : 'query'
            }${where !== '' ? `&where=${where}` : ''}`
        );
        getResult({
            query: normalizeString(value),
            place: where === '' ? undefined : (where as TPlace),
            suggestion,
        });
    };

    const handleGetResult = useCallback(
        (tab?: TTab) => {
            if (queryValue.length > 0) {
                getResult({
                    query: normalizeString(queryValue),
                    place: tab
                        ? (tab.title.toLocaleLowerCase() as TPlace)
                        : where === ''
                        ? undefined
                        : (where as TPlace),
                });
            }
        },
        [getResult, queryValue, where]
    );

    useEffect(() => {
        if (queryValue.length > 0 && result.length === 0) {
            // если в поисковой строке есть что-то, но результатов нет,
            // то запросить результаты по введенному значению
            handleGetResult();
        }
    }, [handleGetResult, queryValue.length, result.length]);

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
                    <TabsWrapper>
                        <Tabs
                            tabs={tabs}
                            chips
                            onTabClick={handleGetResult}
                            currentTab={Math.max(0, currentTab)}
                        />
                    </TabsWrapper>
                    <Divider style={{ margin: 0 }} />
                </SearchBarStyled>
            </Header>
            <SearchResult />
        </PageWrapper>
    );
};
