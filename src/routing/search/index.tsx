import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { TPlace } from '../../entities/search/model/types';
import { GlobalSearch } from '../../features/globalSearch';
import { Header } from '../../layout/header';
import { Divider } from '../../shared/components/divider';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { SearchResult } from './SearchResult';
import { NEW_LAYOUT } from '../../shared/constants';

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

/**
 * Разница между getSuggestions и getSearchResult
 * getResult дает полный результат, то есть запрашивает инфу о
 * плейлистах исполнителя, топ 5 его треков, а элементы сортирует не по
 * индексу внутри поиска, а по прослушиваниям
 */

export const SearchPage = () => {
    const [params] = useSearchParams();
    const queryValue = params.get('query') ?? '';
    const where = (params.get('where') ?? '') as TPlace | '';

    return (
        <PageWrapper>
            {!NEW_LAYOUT && (
                <Header>
                    <SearchBarStyled>
                        <GlobalSearch queryValue={queryValue} where={where} />
                        <Divider style={{ margin: 0 }} />
                    </SearchBarStyled>
                </Header>
            )}
            <SearchResult />
        </PageWrapper>
    );
};
