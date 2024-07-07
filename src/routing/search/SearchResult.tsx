/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconSearch } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { TPlaylist } from '../../entities/playlist/model/types';
import { PlaylistItem } from '../../entities/playlist/ui';
import { $isLoadingResult, $searchResult } from '../../entities/search/model';
import { TSong } from '../../entities/song/model/types';
import { PlaneSongList } from '../../entities/song/ui/planeList';
import { TUser } from '../../entities/user/model/types';
import { UserItem } from '../../entities/user/ui';
import { getEntityType } from '../../features/searchWithHints/lib/getEntityType';
import { Flex } from '../../shared/components/flex';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { ENTITIES_ICONS } from '../../shared/constants/icons';
import { SearchSkeleton } from './SearchSkeleton';
import { TopAuthorCard } from './TopAuthorCard';
import { Subtext } from '../../shared/components/subtext';

const SearchPageWrapper = styled.div`
    max-width: 650px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
`;

const dic: Record<
    keyof typeof ENTITIES_ICONS,
    (...props: any[]) => React.ReactNode
> = {
    song: (song: TSong) => (
        <PlaneSongList
            songs={[song]}
            listName="Search"
            listIcon={<IconSearch />}
            listUrl={`/search?query=${song.name}&type=query`}
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
};

export const SearchResult = () => {
    const [params] = useSearchParams();
    const [result, isLoading] = useUnit([$searchResult, $isLoadingResult]);

    const first = result[0];

    const isAuthor =
        !!first &&
        'isAuthor' in first &&
        first?.isAuthor &&
        params.get('type') === 'author';

    const noResult =
        params.get('query')?.length !== 0 && result.length === 0 && !isLoading;

    return (
        <ContentWrapper>
            <SearchPageWrapper>
                <SkeletonPageAnimation
                    color=""
                    loading={isLoading}
                    skeleton={<SearchSkeleton />}
                >
                    {!isAuthor && (
                        <h3 style={{ fontWeight: 300, marginBottom: '10px' }}>
                            {noResult ? 'No' : ''} Result
                        </h3>
                    )}
                    <Flex d="column" gap={4} width="100%">
                        {isAuthor && <TopAuthorCard author={first} />}
                        {result.map((item, index) => {
                            const type = getEntityType(item);
                            if (isAuthor && index === 0) return null;

                            if (type) {
                                return dic[type](item);
                            }
                        })}
                    </Flex>
                </SkeletonPageAnimation>
            </SearchPageWrapper>
        </ContentWrapper>
    );
};
