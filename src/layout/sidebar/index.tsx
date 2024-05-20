import { Flex } from "@components/flex";
import { IconText } from "@components/iconText";
import { Logo } from "@components/logo";
import { groupByField } from "@shared/funcs/groupByField";
import { usePrivateAction } from "@shared/hooks/usePrivateAction";
import { IconPlus } from "@tabler/icons-react";
import { modalModel } from "layout/modal/model";
import { menuRoutes } from "routing/routes";
import { PlaylistItem } from "../../entities/playlist/ui";
import { userModel } from "../../entities/user/model";
import { CreatePlaylistModal } from "../../features/createPlaylistModal";
import { ThemeButton } from "../../features/themeButton";
import { DefaultButton } from "../../shared/components/button/DefaultButton";
import {
  LogoWrapper,
  SidebarLink,
  SidebarSection,
  SidebarSectionTitle,
  SidebarStyled,
} from "./styles";

export const Sidebar = () => {
  const preparedRoutes = groupByField(menuRoutes, "section");
  const { loggedIn, openLoginModal } = usePrivateAction();
  const { data, userPlaylists } = userModel.useUser()

  const handleAddPlaylist = loggedIn(() => {
    modalModel.events.open({
      title: "Create Playlist",
      content: <CreatePlaylistModal />,
    });
  });

  return (
    <SidebarStyled>
      <LogoWrapper>
        <Logo />
        <ThemeButton />
      </LogoWrapper>
      {Object.keys(preparedRoutes).map((route, index) => {
        return (
          <SidebarSection key={index}>
            <SidebarSectionTitle>{route}</SidebarSectionTitle>
            {preparedRoutes[route].map((link) => {
              return (
                <SidebarLink
                  key={link.url}
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
          <button onClick={handleAddPlaylist}>
            <IconPlus />
          </button>
        </Flex>
        <Flex d="column" gap={0} padding="10px">
          {userPlaylists?.slice(0, 3)?.map((playlist) => <PlaylistItem orientation="horizontal" playlist={playlist} key={playlist.id} />)}
        </Flex>
      </SidebarSection>
      {data === null && <DefaultButton onClick={openLoginModal()} appearance="primary">Login</DefaultButton>}
      <Flex height="90px"></Flex>
    </SidebarStyled>
  );
};
