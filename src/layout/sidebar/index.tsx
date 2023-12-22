import { Flex } from "@components/flex";
import { IconText } from "@components/iconText";
import { Logo } from "@components/logo";
import { groupByField } from "@shared/funcs/groupByField";
import { IconPlus } from "@tabler/icons-react";
import { menuRoutes } from "routing/routes";
import {
  LogoWrapper,
  SidebarLink,
  SidebarSection,
  SidebarSectionTitle,
  SidebarStyled,
} from "./styles";
import { modalModel } from "layout/modal/model";

export const Sidebar = () => {
  const preparedRoutes = groupByField(menuRoutes, "section");

  return (
    <SidebarStyled>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      {Object.keys(preparedRoutes).map((route) => {
        return (
          <SidebarSection>
            <SidebarSectionTitle>{route}</SidebarSectionTitle>
            {preparedRoutes[route].map((link) => {
              return (
                <SidebarLink
                  to={link.url}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <IconText icon={link.icon} text={link.title} />
                </SidebarLink>
              );
            })}
          </SidebarSection>
        );
      })}

      <SidebarSection>
        <Flex jc="space-between" width="100%">
          <SidebarSectionTitle>Your Playlists</SidebarSectionTitle>
          <button
            onClick={() =>
              modalModel.events.open({
                title: "Войдите в аккаунт",
                content: <>Acc</>,
              })
            }
          >
            <IconPlus />
          </button>
        </Flex>
      </SidebarSection>
    </SidebarStyled>
  );
};
