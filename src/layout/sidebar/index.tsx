import { Flex } from "@components/flex";
import { IconText } from "@components/iconText";
import { Logo } from "@components/logo";
import { groupByField } from "@shared/funcs/groupByField";
import { usePrivateAction } from "@shared/hooks/usePrivateAction";
import { songModel } from "@song/model";
import { IconMaximize, IconPlus, IconZoomIn } from "@tabler/icons-react";
import { modalModel } from "layout/modal/model";
import { menuRoutes } from "routing/routes";
import { PlaylistItem } from "../../entities/playlist/ui";
import { userModel } from "../../entities/user/model";
import { AddPlaylistModal } from "../../features/addPlaylistModal";
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
  console.log(userPlaylists);

  const handleAddPlaylist = loggedIn(() => {
    modalModel.events.open({
      title: "Create Playlist",
      content: <AddPlaylistModal />,
    });
  });

  const handleOpenFullScreenPlayer = () => {
    songModel.fullscreen.open()
  }


  return (
    <SidebarStyled>
      <LogoWrapper>
        <Logo />
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
        <Flex d="column" gap={8} padding="10px">
          {userPlaylists?.slice(0, 3)?.map((playlist) => <PlaylistItem orientation="horizontal" playlist={playlist} key={playlist.id} />)}
        </Flex>
      </SidebarSection>
      {data === null && <DefaultButton onClick={openLoginModal()} appearance="primary">Login</DefaultButton>}
      <IconMaximize onClick={handleOpenFullScreenPlayer} />
      {data?.displayName}
    </SidebarStyled>
  );
};
