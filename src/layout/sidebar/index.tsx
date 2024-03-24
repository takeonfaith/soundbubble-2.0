import { Flex } from "@components/flex";
import { IconText } from "@components/iconText";
import { Logo } from "@components/logo";
import { groupByField } from "@shared/funcs/groupByField";
import { usePrivateAction } from "@shared/hooks/usePrivateAction";
import { songModel } from "@song/model";
import { IconPlus } from "@tabler/icons-react";
import { modalModel } from "layout/modal/model";
import { menuRoutes } from "routing/routes";
import { DefaultButton } from "../../shared/components/button/DefaultButton";
import {
  LogoWrapper,
  SidebarLink,
  SidebarSection,
  SidebarSectionTitle,
  SidebarStyled,
} from "./styles";
import { userModel } from "../../entities/user/model";
import { AddPlaylistModal } from "../../features/addPlaylistModal";
import { playlistModel } from "../../entities/playlist/model";
import { PlaylistItem } from "../../entities/playlist/ui";

export const Sidebar = () => {
  const preparedRoutes = groupByField(menuRoutes, "section");
  const { loggedIn, openLoginModal } = usePrivateAction();
  const { data } = userModel.useUser()
  const { addedPlaylists } = playlistModel.usePlaylist()

  const handleAddPlaylist = loggedIn(() => {
    modalModel.events.open({
      title: "Create Playlist",
      content: <AddPlaylistModal />,
    });
  });

  const handleOpenFullScreenPlayer = () => {
    songModel.fullscreen.open()
  }

  console.log(addedPlaylists);
  

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
        {addedPlaylists?.map((playlist) => <PlaylistItem playlist={playlist} key={playlist.id} />)}
      </SidebarSection>
      {data === null && <DefaultButton onClick={openLoginModal()} appearance="primary">Login</DefaultButton>}
      <IconPlus onClick={handleOpenFullScreenPlayer} />
      {data?.displayName}
    </SidebarStyled>
  );
};
