import { IconEditCircle, IconLogout, IconSettings, IconShare3, IconSun } from "@tabler/icons-react";
import { useUnit } from "effector-react";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { $isLoadingSuggestions, $searchQuery, $searchSuggestions, setSearchQuery, setSuggestions } from "../../entities/search/model";
import { userModel } from "../../entities/user/model";
import { UserCover } from "../../entities/user/ui/UserCover";
import { SearchWithHints } from "../../features/searchWithHints";
import { getEntityType } from "../../features/searchWithHints/lib/getEntityType";
import { THint } from "../../features/searchWithHints/types";
import { allRoutes } from "../../routing/routes";
import { Button } from "../../shared/components/button";
import { DefaultButton } from "../../shared/components/button/DefaultButton";
import { DefaultContextMenuStyled } from "../../shared/components/defaultContextMenu";
import { Divider } from "../../shared/components/divider";
import { Flex } from "../../shared/components/flex";
import { popupModel } from "../popup/model";
import { HeaderPageTitle, HeaderStyled, SearchStyled } from "./styles";
import { modalModel } from "../modal/model";
import { ShareModal } from "../../features/shareModal";
import { usePrivateAction } from "../../shared/hooks/usePrivateAction";

const UserContextMenu = () => {
  const [{ data }] = userModel.useUser()
  const navigate = useNavigate()

  const handleLogout = () => {
    userModel.events.logout()
  }

  const handleShare = () => {
    modalModel.events.open({ title: `Share profile with friends`, content: <ShareModal entity={data} /> })
    popupModel.events.close()
  }

  return <DefaultContextMenuStyled>
    <Button onClick={() => {
      navigate('/me')
      popupModel.events.close()
    }}>
      <UserCover color={undefined} src={data?.photoURL} size={'20px'} isAuthor={data?.isAuthor} />
      Go to profile
    </Button>
    <Button onClick={handleShare}>
      <IconShare3 />
      Share profile
    </Button>
    <Divider />
    <Button>
      <IconEditCircle />
      Edit
    </Button>
    <Button>
      <IconSettings />
      Settings
    </Button>
    <Button>
      <IconSun />
      Change theme
    </Button>
    <Divider />
    <Button onClick={handleLogout}>
      <IconLogout />
      Logout
    </Button>
  </DefaultContextMenuStyled>
}

export const Header = () => {
  const [{ data }, loading] = userModel.useUser()
  const searchHistory = userModel.useSearchHistory()
  const suggestions = useUnit($searchSuggestions)
  const [searchQuery, setQuery, isLoadingSuggestions] = useUnit([$searchQuery, setSearchQuery, $isLoadingSuggestions])
  const location = useLocation()
  const [params] = useSearchParams();
  const { openLoginModal } = usePrivateAction()
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

  const handleOpenUserPopup = (e: Evt<'btn'>) => {
    e.stopPropagation()
    popupModel.events.open({ content: <UserContextMenu />, e, height: 289 })
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
          {data && <Button $width="40px" onClick={handleOpenUserPopup}>
            <UserCover color={data?.imageColors[0]} src={data?.photoURL} size={"30px"} isAuthor={data?.isAuthor} />
          </Button>}
          {!data && <DefaultButton loading={loading} width="100px" onClick={openLoginModal()} appearance='primary'>Login</DefaultButton>}
        </Flex>
      </Flex>

    </HeaderStyled>
  );
};
