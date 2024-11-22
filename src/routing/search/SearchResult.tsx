/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconDiscOff } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import {
    $isLoadingResult,
    $searchQuery,
    $searchResult,
} from '../../entities/search/model';
import { EntityList } from '../../shared/components/entityList';
import { Flex } from '../../shared/components/flex';
import { PageMessage } from '../../shared/components/pageMessage';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { SearchSkeleton } from './SearchSkeleton';
import { TopAuthorCard } from './TopAuthorCard';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';

const SearchPageWrapper = styled.div`
    max-width: 650px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;

    @media (max-width: 1000px) {
        margin-top: 0px;
    }
`;

export const SearchResult = () => {
    const [params] = useSearchParams();
    const [result, isLoading] = useUnit([$searchResult, $isLoadingResult]);
    const [searchQuery] = useUnit([$searchQuery]);

    const first = result[0];

    const isAuthorCard =
        !!first &&
        'isAuthor' in first &&
        first?.isAuthor &&
        params.get('type') === 'author' &&
        params.get('where') === null;

    const noResult =
        params.get('query') !== null && result.length === 0 && !isLoading;

    // const notSearchedYet =
    //     params.get('query') === null && result.length === 0 && !isLoading;

    const queue = createQueueObject({
        name: 'Search',
        url: `/search/?query=${searchQuery}`,
    });

    return (
        <ContentWrapper>
            {/* {notSearchedYet && (
                <Flex wrap="wrap" padding="40px 0px" gap={10}>
                    <PlaylistCollectionItem
                        background={theme.scheme.blue.action}
                        title="Rap"
                    />
                    <PlaylistCollectionItem
                        background={theme.scheme.red.action}
                        title="Hip Hop"
                    />
                    <PlaylistCollectionItem
                        background={theme.scheme.purple.main}
                        title="Jazz"
                    />
                    <PlaylistCollectionItem
                        background={theme.scheme.orange.main}
                        title="Chill"
                    />
                    <PlaylistCollectionItem
                        background={theme.scheme.green.main}
                        title="Sport"
                    />
                    <PlaylistCollectionItem
                        background={theme.scheme.orange.main}
                        title="Pop"
                    />
                    <PlaylistCollectionItem
                        background={theme.scheme.blue.action}
                        title="Metal"
                    />
                    <PlaylistCollectionItem
                        background={theme.scheme.red.action}
                        title="Chill"
                    />
                </Flex>
            )} */}
            <SearchPageWrapper>
                <SkeletonPageAnimation
                    color=""
                    loading={isLoading}
                    skeleton={<SearchSkeleton />}
                >
                    {noResult && searchQuery.length !== 0 && (
                        <Flex
                            height="100%"
                            width="100%"
                            jc="center"
                            padding="20vh 0"
                        >
                            <PageMessage
                                icon={IconDiscOff}
                                title={'Not Found'}
                                description={'Try to change search query'}
                            />
                        </Flex>
                    )}
                    {result.length > 0 && (
                        <>
                            {!isAuthorCard && (
                                <h3
                                    style={{
                                        fontWeight: 300,
                                        marginBottom: '10px',
                                        marginLeft: '7px',
                                    }}
                                >
                                    Result
                                </h3>
                            )}
                            <Flex d="column" gap={4} width="100%">
                                {isAuthorCard && (
                                    <TopAuthorCard author={first} />
                                )}
                                <EntityList
                                    queue={queue}
                                    entities={
                                        isAuthorCard ? result.slice(1) : result
                                    }
                                />
                            </Flex>
                        </>
                    )}
                </SkeletonPageAnimation>
            </SearchPageWrapper>
        </ContentWrapper>
    );
};
