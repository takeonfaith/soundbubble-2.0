import { songModel } from "@song/model";
import { Outlet } from "react-router";
import { styled } from "styled-components";
import { FullScreenFullScreenPlayer } from "./fullScreenPlayer";
import { Modal } from "./modal";
import { Sidebar } from "./sidebar";
import { InitialLoading } from "./initialLoading";

export const LayoutStyled = styled.div`
  height: 100dvh;
  display: flex;
`;

// const RightSide = styled.aside`
//   min-width: 400px;
// `;

export const Layout = () => {
  const fullScreen = songModel.fullscreen.useFullScreen();
  return (
    <>
      <InitialLoading />
      <FullScreenFullScreenPlayer open={fullScreen} />
      <Modal />
      {/* <Popup /> */}
      <LayoutStyled>
        <Sidebar />
        <Outlet />
        {/* <RightSide></RightSide> */}
      </LayoutStyled>
    </>
  );
};
