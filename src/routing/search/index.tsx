import { useUnit } from "effector-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { $isLoadingResult, $searchResult, getSearchResult } from "../../entities/search/model";
import { Header } from "../../layout/header";
import { Flex } from "../../shared/components/flex";
import { SkeletonPageAnimation } from "../../shared/components/skeleton/SkeletonPageAnimation";
import { normalizeString } from "../../shared/funcs/normalizeString";
import { SearchResult } from "./SearchResult";
import { SearchSkeleton } from "./SearchSkeleton";

/**
 * Разница между getSuggestions и getSearchResult
 * getResult дает полный результат, то есть запрашивает инфу о
 * плейлистах исполнителя, топ 5 его треков, а элементы сортирует не по 
 * индексу внутри поиска, а по прослушиваниям
 */

export const SearchPage = () => {
  const [params] = useSearchParams();
  const queryValue = params.get("query")
  const [result, isLoading, getResult] = useUnit([$searchResult, $isLoadingResult, getSearchResult])

  useEffect(() => {
    if (queryValue) {
      getResult(normalizeString(queryValue))
    }
  }, [getResult, queryValue])

  return (
    <Flex d="column" width="100%" height="100%">
      <Header />
      <SkeletonPageAnimation color="" loading={isLoading} skeleton={<SearchSkeleton />}>
        <SearchResult result={result} />
      </SkeletonPageAnimation>
    </Flex>
  );
};
