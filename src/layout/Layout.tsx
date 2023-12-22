import { Outlet } from "react-router";
import { Sidebar } from "./sidebar";
import { Modal } from "./modal";
import { styled } from "styled-components";
import { Player } from "./player";

export const LayoutStyled = styled.div`
  height: 100dvh;
  display: flex;
`;

export const Layout = () => {
  return (
    <>
      <Player />
      <Modal />
      <LayoutStyled>
        <Sidebar />
        <Outlet />
      </LayoutStyled>
    </>
  );
};
