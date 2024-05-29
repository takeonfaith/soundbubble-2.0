import { useUnit } from "effector-react";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { $isLoadingSuggestions, $searchQuery, $searchSuggestions, getSearchResult, setSearchQuery, setSuggestions } from "../../entities/search/model";
import { userModel } from "../../entities/user/model";
import { UserCover } from "../../entities/user/ui/UserCover";
import { SearchWithHints } from "../../features/searchWithHints";
import { THint } from "../../features/searchWithHints/types";
import { allRoutes } from "../../routing/routes";
import { Button } from "../../shared/components/button";
import { DefaultButton } from "../../shared/components/button/DefaultButton";
import { Flex } from "../../shared/components/flex";
import { HeaderPageTitle, HeaderStyled, SearchStyled } from "./styles";
import { getEntityType } from "../../features/searchWithHints/lib/getEntityType";


export const Header = () => {
  const { data } = userModel.useUser()
  const searchHistory = userModel.useSearchHistory()
  const suggestions = useUnit($searchSuggestions)
  const [searchQuery, setQuery, isLoadingSuggestions] = useUnit([$searchQuery, setSearchQuery, $isLoadingSuggestions])
  const location = useLocation()
  const [params, setParams] = useSearchParams();
  const currentRoute = allRoutes.find(route => route.url.includes(location.pathname.slice(1, location.pathname.length)))
  const navigate = useNavigate()

  const handleSuggestionSubmit = (hint: THint) => {
    const query = 'displayName' in hint ? hint.displayName : hint.name
    const type = getEntityType(hint)
    console.log({ type });

    navigate(`/search?query=${query}&type=${type}`)
  }

  const onChange = (value: string) => {
    setQuery(value)
  }

  const onChangeSuggestions = (suggestions: THint[]) => {
    setSuggestions(suggestions)
  }

  const onSumbit = (value: string) => {
    console.log('onSumbit');

    navigate(`/search?query=${value}&type=query`)
  }

  return (
    <HeaderStyled>
      <Flex width="100%" height="50px" jc="space-between" gap={30}>
        <HeaderPageTitle>

          {currentRoute?.title}
        </HeaderPageTitle>
        <SearchStyled>
          <SearchWithHints
            suggestions={suggestions}
            initialValue={params.get('query') ?? searchQuery}
            historySuggestions={searchHistory}
            onSuggestionSubmit={handleSuggestionSubmit}
            areSuggestionsLoading={isLoadingSuggestions}
            onChange={onChange}
            onSumbit={onSumbit}
            onChangeSuggestions={onChangeSuggestions} />
        </SearchStyled>
        <Flex width="150px" gap={20} jc="flex-end">
          {data && <Button $width="40px">
            <UserCover color={data?.imageColors[0]} src={data?.photoURL} size={"30px"} isAuthor={data?.isAuthor} />
          </Button>}
          {!data && <DefaultButton width="100px" appearance='primary'>Login</DefaultButton>}
        </Flex>
      </Flex>

    </HeaderStyled>
  );
};
