import { useUnit } from 'effector-react';
import { useCallback, useEffect, useRef } from 'react';
import { Location, useLocation, useNavigate } from 'react-router';
import {
    $isLoadingSuggestions,
    $searchQuery,
    $searchResult,
    $searchSuggestions,
    getSearchResult,
    setSearchQuery,
} from '../../entities/search/model';
import { TPlace } from '../../entities/search/model/types';
import { userModel } from '../../entities/user/model';
import { Tabs, TTab } from '../../shared/components/tabs';
import { normalizeString } from '../../shared/funcs/normalizeString';
import { SearchWithHints } from '../searchWithHints';
import { TExtendedSuggestion } from '../searchWithHints/types';
import { TabsWrapper } from './styles';

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

type Props = {
    queryValue: string;
    where: '' | TPlace;
    showTabs?: boolean;
};

export const GlobalSearch = ({ queryValue, where, showTabs = true }: Props) => {
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

    const handleGetResult = useCallback(
        (tab?: TTab) => {
            if (queryValue.length > 0) {
                const place = tab
                    ? (tab.title.toLocaleLowerCase() as TPlace)
                    : where === ''
                    ? undefined
                    : (where as TPlace);

                getResult({
                    query: normalizeString(queryValue),
                    place,
                });
            }
        },
        [getResult, queryValue, where]
    );

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
        setSearchQuery(value);
    };

    const handleChange = (val: string) => {
        clearTimeout(debounceTimer.current);

        debounceTimer.current = setTimeout(() => {
            setQuery(val);
        }, 100);
    };

    // useEffect(() => {
    //     console.log(searchQuery, queryValue);

    //     if (
    //         searchQuery !== queryValue ||
    //         (queryValue.length > 0 && result.length === 0)
    //     ) {
    //         // если в поисковой строке есть что-то, но результатов нет,
    //         // то запросить результаты по введенному значению
    //         handleGetResult();
    //     }
    // }, [
    //     handleGetResult,
    //     queryValue.length,
    //     searchQuery,
    //     result.length,
    //     queryValue,
    // ]);

    return (
        <>
            <SearchWithHints
                focusOnLoad
                initialValue={queryValue ?? searchQuery}
                suggestions={suggestions}
                historySuggestions={searchHistory}
                areSuggestionsLoading={isLoadingSuggestions}
                onChange={handleChange}
                onSumbit={onSumbit}
            />
            {showTabs && (
                <TabsWrapper>
                    <Tabs
                        tabs={tabs}
                        chips
                        onTabClick={handleGetResult}
                        currentTab={Math.max(0, currentTab)}
                    />
                </TabsWrapper>
            )}
        </>
    );
};
