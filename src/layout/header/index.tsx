import { IconBell, IconSearch, IconSettings } from "@tabler/icons-react";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userModel } from "../../entities/user/model";
import { UserCover } from "../../entities/user/ui/UserCover";
import { SearchWithHints } from "../../features/searchWithHints";
import { allRoutes } from "../../routing/routes";
import { Button } from "../../shared/components/button";
import { Flex } from "../../shared/components/flex";
import { HeaderPageTitle, HeaderStyled } from "./styles";

const BreadcrumbsStyled = styled.div``

const getCrumbs = (location: Location<any>): { url: string; title: string }[] => {
  return []
}

const Breadcrumbs = () => {
  const location = useLocation()
  console.log(location);

  const crumbs = getCrumbs(location)

  return <BreadcrumbsStyled>
    {crumbs.map(crumb => <Link to={crumb.url}>{crumb.title}</Link>)}
  </BreadcrumbsStyled>
}

type Props = {
  children?: React.ReactNode;
}

export const Header = ({ children }: Props) => {
  const { data } = userModel.useUser()
  const [searchMode, setSearchMode] = useState(false)
  const location = useLocation()
  const currentRoute = allRoutes.find(route => route.url.includes(location.pathname.slice(1, location.pathname.length)))

  return (
    <HeaderStyled>
      <Flex width="100%" height="50px" jc="space-between" gap={30}>
        <HeaderPageTitle>
          {currentRoute?.title}
        </HeaderPageTitle>
        {searchMode ? <Flex width="500px"><SearchWithHints /></Flex> : children}
        <Flex width="300px" gap={20} jc="flex-end">
          <Button $width="40px" onClick={() => setSearchMode(true)}><IconSearch size={20} /></Button>
          <Button $width="40px"><IconSettings size={20} /></Button>
          <Button $width="40px"><IconBell size={20} /></Button>
          <Button $width="40px">
            <UserCover color={data?.imageColors[0]} src={data?.photoURL} size={"30px"} isAuthor={data?.isAuthor} />
          </Button>
        </Flex>
      </Flex>

    </HeaderStyled>
  );
};
