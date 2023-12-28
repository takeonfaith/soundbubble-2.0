import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarStyled = styled.aside`
  min-width: 240px;
  width: 240px;
  height: 100dvh;
  padding: 10px;
  background: ${({ theme }) => theme.colors.sidebar};
  position: relative;
`;

export const LogoWrapper = styled.div`
  padding: 10px;
  padding-top: 20px;
`;

export const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin: 30px 0;

  button {
    color: #fff;
    background: transparent;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      width: 18px;
      height: 18px;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.hover};
      color: ${({ theme }) => theme.colors.blue.main};
    }
  }
`;

export const SidebarLink = styled(NavLink)`
  text-decoration: none;
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.mild};
  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }

  &.active {
    & > div {
      opacity: 1;
      color: ${({ theme }) => theme.colors.blue.main};
    }
  }
`;

export const SidebarSectionTitle = styled.div`
  font-size: 0.8rem;
  opacity: 0.3;
  color: #fff;
  padding: 4px 10px;
  text-transform: uppercase;
`;
