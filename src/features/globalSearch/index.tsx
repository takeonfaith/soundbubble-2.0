import { IconCompass, IconCompassFilled } from '@tabler/icons-react';
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
import { $searchHistory } from '../../entities/search/model/search-history';
import { TPlace, TSuggestion } from '../../entities/search/model/types';
import { Divider } from '../../shared/components/divider';
import { Flex } from '../../shared/components/flex';
import Popover from '../../shared/components/popover';
import { Tabs, TTab } from '../../shared/components/tabs';
import { normalizeString } from '../../shared/funcs/normalizeString';
import { SearchWithHints } from '../searchWithHints';
import { TExtendedSuggestion } from '../searchWithHints/types';
import { BrowseLink, TabsWrapper } from './styles';

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

    const [searchHistory, suggestions] = useUnit([
        $searchHistory,
        $searchSuggestions,
    ]);

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
            suggestion: suggestion as TSuggestion,
        });
        setSearchQuery(value);
    };

    const handleChange = (val: string) => {
        clearTimeout(debounceTimer.current);

        debounceTimer.current = setTimeout(() => {
            setQuery(val);
        }, 100);
    };

    useEffect(() => {
        if (queryValue.length > 0 && result.length === 0) {
            // если в поисковой строке есть что-то, но результатов нет,
            // то запросить результаты по введенному значению
            handleGetResult();
        }
    }, [
        handleGetResult,
        queryValue.length,
        searchQuery,
        result.length,
        queryValue,
    ]);

    return (
        <>
            <SearchWithHints
                initialValue={queryValue ?? searchQuery}
                suggestions={suggestions}
                historySuggestions={searchHistory}
                areSuggestionsLoading={isLoadingSuggestions}
                onChange={handleChange}
                onSumbit={onSumbit}
                className="global-search"
                rightSide={
                    <Flex gap={8} height="35px">
                        <kbd>/</kbd>
                        <Divider orientation="vertical" />
                        <Popover content={'Browse'} position="bottom">
                            <BrowseLink to="/search">
                                {({ isActive }) =>
                                    isActive ? (
                                        <IconCompassFilled />
                                    ) : (
                                        <IconCompass />
                                    )
                                }
                            </BrowseLink>
                        </Popover>
                    </Flex>
                }
                placeholder="Search for songs, albums, authors..."
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
