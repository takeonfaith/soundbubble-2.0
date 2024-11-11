/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconDiscOff } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { TPlaylist } from '../../entities/playlist/model/types';
import { PlaylistItem } from '../../entities/playlist/ui';
import {
    $isLoadingResult,
    $searchQuery,
    $searchResult,
} from '../../entities/search/model';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';
import { TSong } from '../../entities/song/model/types';
import { PlaneSongList } from '../../entities/song/ui/planeList';
import { TUser } from '../../entities/user/model/types';
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

const dic: Record<
    keyof typeof ENTITIES_ICONS,
    (...props: any[]) => React.ReactNode
> = {
    song: (song: TSong) => (
        <PlaneSongList
            queue={createQueueObject({
                songs: [song],
                name: 'Search',
                url: `/search/?query=${song.name}`,
            })}
        />
    ),
    author: (user: TUser) => <UserItem user={user} orientation="horizontal" />,
    user: (user: TUser) => <UserItem user={user} orientation="horizontal" />,
    playlist: (playlist: TPlaylist) => (
        <PlaylistItem orientation="horizontal" playlist={playlist} />
    ),
    album: (playlist: TPlaylist) => (
        <PlaylistItem orientation="horizontal" playlist={playlist} />
    ),
    deleted: () => <PlaylistItem orientation="horizontal" playlist={null} />,
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
                                        return dic[type](item);
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
