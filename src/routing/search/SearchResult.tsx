/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconDiscOff } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { PlaylistItem } from '../../entities/playlist/ui';
import {
    $isLoadingResult,
    $searchQuery,
    $searchResult,
} from '../../entities/search/model';
import { SongItem } from '../../entities/song/ui';
import { UserItem } from '../../entities/user/ui';
import { getEntityType } from '../../features/searchWithHints/lib/getEntityType';
import { Flex } from '../../shared/components/flex';
import { PageMessage } from '../../shared/components/pageMessage';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { ENTITIES_ICONS } from '../../shared/constants/icons';
import { SearchSkeleton } from './SearchSkeleton';
import { TopAuthorCard } from './TopAuthorCard';

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

export const EntityTypeMap = {
    song: SongItem,
    author: UserItem,
    user: UserItem,
    playlist: PlaylistItem,
    album: PlaylistItem,
    deleted: PlaylistItem,
    chat: () => null,
};

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
                                {result.map((item, index) => {
                                    const type = getEntityType(item);
                                    if (isAuthorCard && index === 0)
                                        return null;

                                    if (type) {
                                        const Component = EntityTypeMap[type];
                                        return (
                                            <Component
                                                song={item}
                                                playing={false}
                                                loading={false}
                                                index={0}
                                                onClick={undefined}
                                                user={item}
                                                playlist={item}
                                                isAuthor={false}
                                            />
                                        );
                                    }
                                })}
                            </Flex>
                        </>
                    )}
                </SkeletonPageAnimation>
            </SearchPageWrapper>
        </ContentWrapper>
    );
};
