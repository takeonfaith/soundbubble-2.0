import { Outlet } from "react-router";
import { Sidebar } from "./sidebar";
import { Modal } from "./modal";
import { styled } from "styled-components";
import { Player } from "./player";
import { songModel } from "@song/model";

export const LayoutStyled = styled.div`
  height: 100dvh;
  display: flex;
`;

export const Layout = () => {
  const fullScreen = songModel.fullscreen.useFullScreen();
  return (
    <>
      {fullScreen && <Player />}
      <Modal />
      <LayoutStyled>
        <Sidebar />
        <Outlet />
      </LayoutStyled>
    </>
  );
};
