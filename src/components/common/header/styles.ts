import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../../constants/colors";

export const HeaderFont = styled.div`
  font-weight: 900;
  font-size: 30px;
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0px 60px;
  background-color: white;
  z-index: 999;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const MainLogo = styled.img`
  height: 53px;
  width: 156px;
  cursor: pointer;
`;

export const NavContainer = styled(Container)`
  justify-content: flex-end;
  gap: 50px;
`;

export const NavStyle = styled(NavLink)`
  color: black;

  &:link {
    text-decoration: none;
  }

  &:hover {
    color: ${COLOR.Main_Blue};
  }
`;
