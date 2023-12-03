import { styled } from "styled-components";
import { COLOR } from "../../constants/colors";
import { NavLink } from "react-router-dom";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: black;
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  z-index: 1;
  text-align: center;
`;

export const MainFontStyle = styled.div`
  color: white;
  font-size: 45px;
  font-weight: 700;
  text-align: center;
  font-style: normal;
  line-height: 1.6;
`;

export const LineStyle = styled.div`
  width: 108px;
  border: 1.5px solid ${COLOR.Side_Blue};
  margin: 40px auto 20px;
`;

export const SideFontStyle = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  font-style: normal;
  line-height: 1.5;
`;

export const IconContainer = styled(NavLink)`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const ArrowIcStyle = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
`;

export const MainImageStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;
