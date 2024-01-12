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

const RightSide = styled.aside`
  min-width: 400px;
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
        <RightSide></RightSide>
      </LayoutStyled>
    </>
  );
};
