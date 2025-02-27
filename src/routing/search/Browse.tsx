import { createEffect, createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SearchSuggestions } from '../../database/sections';
import { TSuggestion } from '../../entities/search/model/types';
import { getPlaceToType } from '../../features/searchWithHints/lib/getEntityPlace';
import { Loading } from '../../shared/components/loading';
import { ENTITIES_ICONS } from '../../shared/constants/icons';
import { TTheme } from '../../shared/constants/theme';
import { MEDIA_QUERIES } from '../../shared/constants/screenSize';

const TOTAL_TRENDING_QUANTITY = 50;

const getAnimationDelay = (quantity: number) => {
    let result = '';

    for (let index = 0; index < quantity; index++) {
        result += `
& a:nth-child(${index + 1}) {
	animation-delay: ${(index + 1) * 15}ms;
}\n`;
    }

    return result;
};

const BrowseStyled = styled.div``;

const BrowseBlock = styled.div`
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    h2 {
        font-weight: 400;
        padding: 20px;
        padding-bottom: 10px;
    }
`;

const BlockGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 8px;
    grid-template-columns: repeat(
        5,
        minmax(150px, 1fr)
    ); /* Колонки от 100px до равномерного распределения */
    padding: 12px 10px;

    ${getAnimationDelay(TOTAL_TRENDING_QUANTITY)}

    ${MEDIA_QUERIES.isSmallDesktop} {
        grid-template-columns: repeat(3, minmax(100px, 1fr));
    }

    ${MEDIA_QUERIES.isTablet} {
        grid-template-columns: repeat(2, minmax(100px, 1fr));
    }

    ${MEDIA_QUERIES.isMobile} {
        grid-template-columns: repeat(1, minmax(100px, 1fr));
    }
`;

const TrendingLink = styled(Link)`
    padding: 12px 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 200;
    animation: linkAppear 0.5s forwards;
    opacity: 0;

    @keyframes linkAppear {
        0% {
            transform: translateY(-10px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }

    & .name {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    svg {
        width: 18px;
        height: 18px;
        color: ${({ color, theme }) => theme.scheme[color].main};
    }

    @media (hover: hover) {
        &:hover {
            background: ${({ theme }) => theme.colors.pageBackground2};
        }
    }
`;

const loadFx = createEffect<void, TSuggestion[]>();

const $trendingSearches = createStore<TSuggestion[]>([]);

const load = createEvent();

sample({
    clock: load,
    source: $trendingSearches,
    filter: (t) => !t.length,
    target: loadFx,
});

sample({
    clock: loadFx.doneData,
    target: $trendingSearches,
});

loadFx.use(async () => {
    return await SearchSuggestions.getTopSuggestions(TOTAL_TRENDING_QUANTITY);
});

const ENTITY_COLOR: Record<
    keyof typeof ENTITIES_ICONS,
    keyof TTheme['scheme']
> = {
    author: 'pink',
    album: 'blue',
    user: 'pink',
    playlist: 'green',
    deleted: 'grey',
    chat: 'grey',
    song: 'blue',
};

export const Browse = () => {
    const [trending, isLoading] = useUnit([$trendingSearches, loadFx.pending]);

    useEffect(() => {
        load();
    }, []);

    return (
        <BrowseStyled>
            <BrowseBlock>
                <h2>Trending searches</h2>
                <BlockGrid>
                    {isLoading && <Loading />}
                    {trending.map((t) => {
                        const type = getPlaceToType(t.place);
                        return (
                            <TrendingLink
                                color={ENTITY_COLOR[type]}
                                to={`/search?query=${t.fullName}&type=${type}`}
                            >
                                {ENTITIES_ICONS[type]}
                                <div className="name">{t.fullName}</div>
                            </TrendingLink>
                        );
                    })}
                </BlockGrid>
            </BrowseBlock>
        </BrowseStyled>
    );
};
